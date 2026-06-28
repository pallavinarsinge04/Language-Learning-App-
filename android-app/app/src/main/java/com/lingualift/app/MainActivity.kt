package com.lingualift.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.rememberTopAppBarState
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            LinguaLiftApp()
        }
    }
}

private val appColors = mapOf(
    "primary" to Color(0xFF0A2947),
    "surface" to Color(0xFFF3E4C9),
    "surfaceStrong" to Color(0xFFD3D4C0),
    "accent" to Color(0xFF8B5E3C),
    "text" to Color(0xFF0A2947),
    "muted" to Color(0xFF5F665E)
)

private val sampleData = mapOf(
    "Vocabulary" to listOf(
        "Casa — House",
        "Libro — Book",
        "Comida — Food",
        "Amigo — Friend",
        "Familia — Family"
    ),
    "Phrases" to listOf(
        "Buenos días — Good morning",
        "¿Cómo estás? — How are you?",
        "Muchas gracias — Thank you very much"
    ),
    "Grammar" to listOf(
        "Ser vs Estar — To be",
        "Género — Gender",
        "Plural — Plural"
    )
)

@Composable
fun LinguaLiftApp() {
    var selectedSection by remember { mutableStateOf("Vocabulary") }
    Surface(modifier = Modifier.fillMaxSize(), color = appColors["surface"]!!)
    {
        Column(modifier = Modifier.fillMaxSize()) {
            TopBar()
            SectionTabs(selectedSection) { selectedSection = it }
            LessonSection(selectedSection)
        }
    }
}

@Composable
fun TopBar() {
    TopAppBar(
        title = {
            Text("LinguaLift", fontSize = 22.sp, fontWeight = FontWeight.Bold, color = appColors["text"]!!)
        },
        modifier = Modifier
            .fillMaxWidth()
            .background(appColors["surface"]!!),
        colors = androidx.compose.material3.TopAppBarDefaults.smallTopAppBarColors(
            containerColor = appColors["surfaceStrong"]!!,
            titleContentColor = appColors["text"]!!
        )
    )
}

@Composable
fun SectionTabs(selectedSection: String, onSelect: (String) -> Unit) {
    Row(modifier = Modifier.fillMaxWidth().padding(16.dp), horizontalArrangement = Arrangement.SpaceBetween) {
        listOf("Vocabulary", "Phrases", "Grammar").forEach { section ->
            Box(
                modifier = Modifier
                    .clickable { onSelect(section) }
                    .background(if (selectedSection == section) appColors["accent"]!! else appColors["surfaceStrong"]!!)
                    .padding(12.dp)
                    .weight(1f)
            ) {
                Text(
                    section,
                    color = if (selectedSection == section) Color.White else appColors["text"]!!,
                    modifier = Modifier.align(Alignment.Center)
                )
            }
            Spacer(modifier = Modifier.width(8.dp))
        }
    }
}

@Composable
fun LessonSection(selectedSection: String) {
    Column(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        Text("Daily Lesson", fontSize = 20.sp, fontWeight = FontWeight.ExtraBold, color = appColors["text"]!!)
        Spacer(modifier = Modifier.height(12.dp))
        Surface(
            modifier = Modifier.fillMaxWidth().padding(bottom = 16.dp),
            color = appColors["surfaceStrong"]!!,
            tonalElevation = 2.dp,
            shape = androidx.compose.foundation.shape.RoundedCornerShape(20.dp)
        ) {
            Column(modifier = Modifier.padding(20.dp)) {
                Text(
                    "${selectedSection}: ${sampleData[selectedSection]?.firstOrNull() ?: "No sample"}",
                    color = appColors["text"]!!,
                    fontSize = 16.sp
                )
                Spacer(modifier = Modifier.height(10.dp))
                Button(onClick = {}, modifier = Modifier.align(Alignment.End)) {
                    Text("Mark Completed")
                }
            }
        }
        QuizSection(selectedSection)
    }
}

@Composable
fun QuizSection(selectedSection: String) {
    Column {
        Text("Practice Quiz", fontSize = 18.sp, fontWeight = FontWeight.Bold, color = appColors["text"]!!)
        Spacer(modifier = Modifier.height(12.dp))
        LazyColumn(modifier = Modifier.fillMaxWidth()) {
            items(sampleData[selectedSection] ?: listOf()) { item ->
                Surface(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(bottom = 10.dp),
                    color = appColors["surfaceStrong"]!!,
                    shape = androidx.compose.foundation.shape.RoundedCornerShape(16.dp)
                ) {
                    Text(item, modifier = Modifier.padding(16.dp), color = appColors["text"]!!)
                }
            }
        }
    }
}
