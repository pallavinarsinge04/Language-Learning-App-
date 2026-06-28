const state = {
  language: 'spanish',
  category: 'vocabulary',
  dailyIndex: 0,
  flashcardIndex: 0,
  quizQuestions: [],
  progress: {
    streak: 0,
    lessonsCompleted: 0,
    lastCompletedDate: null,
  },
};

const languageLabels = {
  spanish: 'Spanish',
  french: 'French',
  german: 'German',
  italian: 'Italian',
  japanese: 'Japanese',
  chinese: 'Chinese',
  portuguese: 'Portuguese',
  af: 'Afrikaans',
  sq: 'Albanian',
  am: 'Amharic',
  ar: 'Arabic',
  hy: 'Armenian',
  az: 'Azerbaijani',
  eu: 'Basque',
  be: 'Belarusian',
  bn: 'Bengali',
  bs: 'Bosnian',
  bg: 'Bulgarian',
  ca: 'Catalan',
  ceb: 'Cebuano',
  co: 'Corsican',
  hr: 'Croatian',
  cs: 'Czech',
  da: 'Danish',
  nl: 'Dutch',
  en: 'English',
  eo: 'Esperanto',
  et: 'Estonian',
  fi: 'Finnish',
  fy: 'Frisian',
  gl: 'Galician',
  ka: 'Georgian',
  el: 'Greek',
  gu: 'Gujarati',
  ht: 'Haitian Creole',
  ha: 'Hausa',
  haw: 'Hawaiian',
  he: 'Hebrew',
  hi: 'Hindi',
  hmn: 'Hmong',
  hu: 'Hungarian',
  is: 'Icelandic',
  ig: 'Igbo',
  id: 'Indonesian',
  ga: 'Irish',
  jw: 'Javanese',
  kn: 'Kannada',
  kk: 'Kazakh',
  km: 'Khmer',
  ko: 'Korean',
  ku: 'Kurdish',
  ky: 'Kyrgyz',
  lo: 'Lao',
  la: 'Latin',
  lv: 'Latvian',
  lt: 'Lithuanian',
  lb: 'Luxembourgish',
  mk: 'Macedonian',
  mg: 'Malagasy',
  ms: 'Malay',
  ml: 'Malayalam',
  mt: 'Maltese',
  mi: 'Maori',
  mr: 'Marathi',
  mn: 'Mongolian',
  my: 'Myanmar',
  ne: 'Nepali',
  no: 'Norwegian',
  ny: 'Nyanja',
  ps: 'Pashto',
  fa: 'Persian',
  pl: 'Polish',
  ro: 'Romanian',
  ru: 'Russian',
  sm: 'Samoan',
  gd: 'Scots Gaelic',
  sr: 'Serbian',
  st: 'Sesotho',
  sn: 'Shona',
  sd: 'Sindhi',
  si: 'Sinhala',
  sk: 'Slovak',
  sl: 'Slovenian',
  so: 'Somali',
  es: 'Spanish',
  su: 'Sundanese',
  sw: 'Swahili',
  sv: 'Swedish',
  tl: 'Tagalog',
  tg: 'Tajik',
  ta: 'Tamil',
  te: 'Telugu',
  th: 'Thai',
  tr: 'Turkish',
  uk: 'Ukrainian',
  ur: 'Urdu',
  uz: 'Uzbek',
  vi: 'Vietnamese',
  cy: 'Welsh',
  xh: 'Xhosa',
  yi: 'Yiddish',
  yo: 'Yoruba',
  zu: 'Zulu',
};

const categories = ['vocabulary', 'phrases', 'grammar'];
let customData = {};

const data = {
  spanish: {
    vocabulary: [
      { term: 'Casa', translation: 'House', detail: 'La casa es grande. (The house is big.)' },
      { term: 'Libro', translation: 'Book', detail: 'Estoy leyendo un libro. (I am reading a book.)' },
      { term: 'Comida', translation: 'Food', detail: 'Me encanta la comida mexicana. (I love Mexican food.)' },
      { term: 'Amigo', translation: 'Friend', detail: 'Mi amigo es muy simpático. (My friend is very nice.)' },
      { term: 'Familia', translation: 'Family', detail: 'La familia es importante. (Family is important.)' },
    ],
    phrases: [
      { term: 'Buenos días', translation: 'Good morning', detail: 'Usa esto para saludar por la mañana. (Use this to greet in the morning.)' },
      { term: '¿Cómo estás?', translation: 'How are you?', detail: 'Pregunta para saber cómo está alguien. (A question to ask how someone is doing.)' },
      { term: 'Muchas gracias', translation: 'Thank you very much', detail: 'Una forma educada de agradecer. (A polite way to say thanks.)' },
      { term: '¿Dónde está el baño?', translation: 'Where is the bathroom?', detail: 'Frase útil cuando estás de viaje. (Useful phrase while traveling.)' },
      { term: 'Hasta luego', translation: 'See you later', detail: 'Despedida informal. (Informal goodbye.)' },
    ],
    grammar: [
      { term: 'Ser vs Estar', translation: 'To Be', detail: 'Ser se usa para identidad; estar para estados temporales. (Ser is used for identity; estar for temporary states.)' },
      { term: 'Género', translation: 'Gender', detail: 'Los sustantivos tienen género masculino o femenino. (Nouns have masculine or feminine gender.)' },
      { term: 'Plural', translation: 'Plural', detail: 'Agrega -s o -es para formar plural. (Add -s or -es to form plurals.)' },
      { term: 'Artículos', translation: 'Articles', detail: 'El/la/los/las se usan según el género y número. (Use el/la/los/las by gender and number.)' },
      { term: 'Adjetivos', translation: 'Adjectives', detail: 'Los adjetivos concuerdan en género y número con el sustantivo. (Adjectives agree in gender and number.)' },
    ],
  },
  french: {
    vocabulary: [
      { term: 'Maison', translation: 'House', detail: 'La maison est grande. (The house is big.)' },
      { term: 'Livre', translation: 'Book', detail: 'Je lis un livre. (I am reading a book.)' },
      { term: 'Nourriture', translation: 'Food', detail: 'J’aime la nourriture française. (I love French food.)' },
      { term: 'Ami', translation: 'Friend', detail: 'Mon ami est très gentil. (My friend is very kind.)' },
      { term: 'Famille', translation: 'Family', detail: 'La famille est importante. (Family is important.)' },
    ],
    phrases: [
      { term: 'Bonjour', translation: 'Hello', detail: 'Utilisé pour saluer pendant le jour. (Used to greet during the day.)' },
      { term: 'Comment ça va?', translation: 'How are you?', detail: 'Demande pour vérifier le bien-être. (A question to check how someone is.)' },
      { term: 'Merci beaucoup', translation: 'Thank you very much', detail: 'Une façon polie de remercier. (A polite way to say thanks.)' },
      { term: 'Où sont les toilettes?', translation: 'Where is the bathroom?', detail: 'Phrase utile en voyage. (Useful phrase while traveling.)' },
      { term: 'À bientôt', translation: 'See you soon', detail: 'Une salutation d’au revoir. (A goodbye phrase.)' },
    ],
    grammar: [
      { term: 'Être vs Avoir', translation: 'To Be vs To Have', detail: 'Être et avoir sont auxiliaires importants. (Être and avoir are important auxiliary verbs.)' },
      { term: 'Genre', translation: 'Gender', detail: 'Les noms sont masculins ou féminins. (Nouns are masculine or feminine.)' },
      { term: 'Plural', translation: 'Plural', detail: 'Ajoute -s ou -x pour le pluriel. (Add -s or -x for plural.)' },
      { term: 'Articles', translation: 'Articles', detail: 'Le/la/les sont utilisés par genre et nombre. (Le/la/les are used by gender and number.)' },
      { term: 'Adjectifs', translation: 'Adjectives', detail: 'Les adjectifs s’accordent avec le nom. (Adjectives agree with the noun.)' },
    ],
  },
  german: {
    vocabulary: [
      { term: 'Haus', translation: 'House', detail: 'Das Haus ist groß. (The house is big.)' },
      { term: 'Buch', translation: 'Book', detail: 'Ich lese ein Buch. (I am reading a book.)' },
      { term: 'Essen', translation: 'Food', detail: 'Das Essen ist lecker. (The food is delicious.)' },
      { term: 'Freund', translation: 'Friend', detail: 'Mein Freund ist nett. (My friend is nice.)' },
      { term: 'Familie', translation: 'Family', detail: 'Die Familie ist wichtig. (Family is important.)' },
    ],
    phrases: [
      { term: 'Guten Morgen', translation: 'Good morning', detail: 'Begrüßung am Morgen. (Greeting in the morning.)' },
      { term: 'Wie geht es dir?', translation: 'How are you?', detail: 'Frage nach dem Befinden. (Question asking how someone is.)' },
      { term: 'Vielen Dank', translation: 'Thank you very much', detail: 'Eine höfliche Dankesformel. (A polite way to say thank you.)' },
      { term: 'Wo ist die Toilette?', translation: 'Where is the bathroom?', detail: 'Nützlicher Satz auf Reisen. (Useful sentence while traveling.)' },
      { term: 'Bis später', translation: 'See you later', detail: 'Informelle Verabschiedung. (Informal goodbye.)' },
    ],
    grammar: [
      { term: 'Artikel', translation: 'Articles', detail: 'Der/die/das richten sich nach dem Genus. (Der/die/das depend on gender.)' },
      { term: 'Pluralbildung', translation: 'Plural formation', detail: 'Plurals werden auf unterschiedliche Weise gebildet. (Plurals are formed in different ways.)' },
      { term: 'Verben', translation: 'Verbs', detail: 'Starke und schwache Verben konjugieren unterschiedlich. (Strong and weak verbs conjugate differently.)' },
      { term: 'Satzbau', translation: 'Sentence structure', detail: 'Im Hauptsatz steht das Verb an zweiter Stelle. (Main clauses place the verb second.)' },
      { term: 'Adjektive', translation: 'Adjectives', detail: 'Adjektive passen sich dem Nomen an. (Adjectives agree with the noun.)' },
    ],
  },
  italian: {
    vocabulary: [
      { term: 'Casa', translation: 'House', detail: 'La casa è grande. (The house is big.)' },
      { term: 'Libro', translation: 'Book', detail: 'Sto leggendo un libro. (I am reading a book.)' },
      { term: 'Cibo', translation: 'Food', detail: 'Mi piace il cibo italiano. (I like Italian food.)' },
      { term: 'Amico', translation: 'Friend', detail: 'Il mio amico è gentile. (My friend is kind.)' },
      { term: 'Famiglia', translation: 'Family', detail: 'La famiglia è importante. (Family is important.)' },
    ],
    phrases: [
      { term: 'Buongiorno', translation: 'Good morning', detail: 'Saluto per la mattina. (Morning greeting.)' },
      { term: 'Come stai?', translation: 'How are you?', detail: 'Domanda per chiedere come va. (Question to ask how someone is.)' },
      { term: 'Grazie mille', translation: 'Thank you very much', detail: 'Modo educato di ringraziare. (A polite way to thank.)' },
      { term: 'Dov’è il bagno?', translation: 'Where is the bathroom?', detail: 'Frase utile durante il viaggio. (Useful phrase while traveling.)' },
      { term: 'A presto', translation: 'See you soon', detail: 'Saluto di arrivederci. (Goodbye phrase.)' },
    ],
    grammar: [
      { term: 'Articoli', translation: 'Articles', detail: 'Gli articoli cambiano con genere e numero. (Articles change with gender and number.)' },
      { term: 'Plurale', translation: 'Plural', detail: 'Il plurale si forma con -i o -e. (Plural forms with -i or -e.)' },
      { term: 'Verbi', translation: 'Verbs', detail: 'I verbi regolari seguono schemi prevedibili. (Regular verbs follow predictable patterns.)' },
      { term: 'Aggettivi', translation: 'Adjectives', detail: 'Gli aggettivi concordano con il nome. (Adjectives agree with the noun.)' },
      { term: 'Pronomi', translation: 'Pronouns', detail: 'Usa io, tu, lui/lei per le persone. (Use io, tu, lui/lei for people.)' },
    ],
  },
  japanese: {
    vocabulary: [
      { term: '家 (いえ)', translation: 'House', detail: '家は大きいです。 (The house is big.)' },
      { term: '本 (ほん)', translation: 'Book', detail: '私は本を読んでいます。 (I am reading a book.)' },
      { term: '食べ物 (たべもの)', translation: 'Food', detail: '食べ物が美味しいです。 (The food is delicious.)' },
      { term: '友達 (ともだち)', translation: 'Friend', detail: '友達は親切です。 (My friend is kind.)' },
      { term: '家族 (かぞく)', translation: 'Family', detail: '家族は大切です。 (Family is important.)' },
    ],
    phrases: [
      { term: 'おはようございます', translation: 'Good morning', detail: '朝の挨拶です。 (Morning greeting.)' },
      { term: 'お元気ですか？', translation: 'How are you?', detail: '相手の調子を聞く表現です。 (Expression to ask someone how they are.)' },
      { term: 'ありがとうございます', translation: 'Thank you very much', detail: '感謝を伝える丁寧な言い方です。 (Polite way to express thanks.)' },
      { term: 'トイレはどこですか？', translation: 'Where is the bathroom?', detail: '旅行中に便利な表現です。 (Useful phrase while traveling.)' },
      { term: 'またね', translation: 'See you later', detail: 'カジュアルな別れの言い方です。 (Casual goodbye.)' },
    ],
    grammar: [
      { term: 'です/ます', translation: 'Polite Form', detail: '丁寧に話すための基本形です。 (Basic polite speech endings.)' },
      { term: '助詞', translation: 'Particles', detail: 'は、が、をなどが文をつなぎます。 (Particles connect sentence parts.)' },
      { term: '名詞', translation: 'Nouns', detail: '日本語の名詞は性別がありません。 (Japanese nouns have no gender.)' },
      { term: '形容詞', translation: 'Adjectives', detail: 'い形容詞とな形容詞があります。 (There are i-adjectives and na-adjectives.)' },
      { term: '挨拶', translation: 'Greetings', detail: '挨拶は文化的に重要です。 (Greetings are culturally important.)' },
    ],
  },
  chinese: {
    vocabulary: [
      { term: '家 (jiā)', translation: 'House', detail: '这所房子很大。 (The house is big.)' },
      { term: '书 (shū)', translation: 'Book', detail: '我在看书。 (I am reading a book.)' },
      { term: '食物 (shíwù)', translation: 'Food', detail: '食物很好吃。 (The food is delicious.)' },
      { term: '朋友 (péngyǒu)', translation: 'Friend', detail: '我的朋友很友好。 (My friend is friendly.)' },
      { term: '家庭 (jiātíng)', translation: 'Family', detail: '家庭很重要。 (Family is important.)' },
    ],
    phrases: [
      { term: '早上好', translation: 'Good morning', detail: '早上的问候。 (Morning greeting.)' },
      { term: '你好吗？', translation: 'How are you?', detail: '询问对方的状态。 (Ask how someone is.)' },
      { term: '非常感谢', translation: 'Thank you very much', detail: '表示感谢的礼貌用语。 (Polite way to express thanks.)' },
      { term: '洗手间在哪里？', translation: 'Where is the bathroom?', detail: '旅行中常用。 (Common while traveling.)' },
      { term: '再见', translation: 'Goodbye', detail: '道别时使用。 (Used when saying goodbye.)' },
    ],
    grammar: [
      { term: '语序', translation: 'Word order', detail: '汉语通常是主谓宾。 (Chinese usually uses SVO order.)' },
      { term: '量词', translation: 'Measure words', detail: '名词前需要量词。 (Measure words are used before nouns.)' },
      { term: '时态', translation: 'Tense', detail: '汉语通过时间词和上下文表达时态。 (Tense is expressed with time words and context.)' },
      { term: '疑问句', translation: 'Questions', detail: '用“吗”来构成是非问句。 (Use "吗" for yes/no questions.)' },
      { term: '形容词', translation: 'Adjectives', detail: '形容词通常放在名词前。 (Adjectives usually come before nouns.)' },
    ],
  },
  portuguese: {
    vocabulary: [
      { term: 'Casa', translation: 'House', detail: 'A casa é grande. (The house is big.)' },
      { term: 'Livro', translation: 'Book', detail: 'Estou lendo um livro. (I am reading a book.)' },
      { term: 'Comida', translation: 'Food', detail: 'A comida é deliciosa. (The food is delicious.)' },
      { term: 'Amigo', translation: 'Friend', detail: 'Meu amigo é simpático. (My friend is nice.)' },
      { term: 'Família', translation: 'Family', detail: 'A família é importante. (Family is important.)' },
    ],
    phrases: [
      { term: 'Bom dia', translation: 'Good morning', detail: 'Saudação matinal. (Morning greeting.)' },
      { term: 'Como vai?', translation: 'How are you?', detail: 'Pergunta para saber como alguém está. (Question to ask how someone is.)' },
      { term: 'Muito obrigado', translation: 'Thank you very much', detail: 'Expressão de agradecimento. (Expression of gratitude.)' },
      { term: 'Onde fica o banheiro?', translation: 'Where is the bathroom?', detail: 'Frase útil em viagens. (Useful phrase while traveling.)' },
      { term: 'Até logo', translation: 'See you later', detail: 'Despedida casual. (Casual goodbye.)' },
    ],
    grammar: [
      { term: 'Artigos', translation: 'Articles', detail: 'O/a/os/as mudam com gênero e número. (O/a/os/as change with gender and number.)' },
      { term: 'Plural', translation: 'Plural', detail: 'A maioria dos plurais termina em -s. (Most plurals end in -s.)' },
      { term: 'Verbos', translation: 'Verbs', detail: 'Verbos têm conjugações diferentes por pessoa. (Verbs conjugate differently by person.)' },
      { term: 'Adjetivos', translation: 'Adjectives', detail: 'Adjetivos concordam com o substantivo. (Adjectives agree with the noun.)' },
      { term: 'Pronomes', translation: 'Pronouns', detail: 'Eu, tu, ele/ela são pronomes pessoais. (Eu, tu, ele/ela are personal pronouns.)' },
    ],
  },
};

const elements = {
  languageSelect: document.getElementById('languageSelect'),
  categorySelect: document.getElementById('categorySelect'),
  dailyLesson: document.getElementById('dailyLesson'),
  markLessonBtn: document.getElementById('markLessonBtn'),
  flashcardTerm: document.getElementById('flashcardTerm'),
  flashcardTranslation: document.getElementById('flashcardTranslation'),
  flashcardDetail: document.getElementById('flashcardDetail'),
  flashcardBack: document.getElementById('flashcardBack'),
  speakBtn: document.getElementById('speakBtn'),
  nextFlashcardBtn: document.getElementById('nextFlashcardBtn'),
  quizBox: document.getElementById('quizBox'),
  newQuizBtn: document.getElementById('newQuizBtn'),
  clearProgressBtn: document.getElementById('clearProgressBtn'),
  streakCount: document.getElementById('streakCount'),
  completedCount: document.getElementById('completedCount'),
  customLanguageCode: document.getElementById('customLanguageCode'),
  customLanguageName: document.getElementById('customLanguageName'),
  customCategory: document.getElementById('customCategory'),
  customTerm: document.getElementById('customTerm'),
  customTranslation: document.getElementById('customTranslation'),
  customDetail: document.getElementById('customDetail'),
  addCustomEntry: document.getElementById('addCustomEntry'),
};

function loadProgress() {
  const saved = localStorage.getItem('linguaLiftProgress');
  if (saved) {
    Object.assign(state.progress, JSON.parse(saved));
  }
}

function saveProgress() {
  localStorage.setItem('linguaLiftProgress', JSON.stringify(state.progress));
}

function loadCustomData() {
  const saved = localStorage.getItem('linguaLiftCustomData');
  const savedLabels = localStorage.getItem('linguaLiftLanguageLabels');
  if (savedLabels) {
    Object.assign(languageLabels, JSON.parse(savedLabels));
  }
  if (saved) {
    customData = JSON.parse(saved);
    Object.entries(customData).forEach(([code, languageData]) => {
      if (!data[code]) {
        data[code] = { vocabulary: [], phrases: [], grammar: [] };
      }
      categories.forEach((category) => {
        if (Array.isArray(languageData[category])) {
          data[code][category] = [...languageData[category]];
        }
      });
    });
  }
}

function saveCustomData() {
  localStorage.setItem('linguaLiftCustomData', JSON.stringify(customData));
  localStorage.setItem('linguaLiftLanguageLabels', JSON.stringify(languageLabels));
}

function createPlaceholderData(category) {
  const labels = {
    vocabulary: [
      { term: 'Sample word', translation: 'Placeholder translation', detail: 'This language does not have built-in content yet. Add your own lessons below.' },
    ],
    phrases: [
      { term: 'Example phrase', translation: 'Placeholder phrase', detail: 'Create custom content for this language to start learning.' },
    ],
    grammar: [
      { term: 'Grammar tip', translation: 'Placeholder grammar', detail: 'Use the custom lesson form to save notes and practice items.' },
    ],
  };
  return labels[category] || [{ term: 'Example', translation: 'Placeholder', detail: 'Add your own content.' }];
}

function createLanguageDataIfAbsent(language) {
  if (!data[language]) {
    data[language] = {
      vocabulary: createPlaceholderData('vocabulary'),
      phrases: createPlaceholderData('phrases'),
      grammar: createPlaceholderData('grammar'),
    };
  }
}

function populateLanguageSelect() {
  elements.languageSelect.innerHTML = '';
  Object.entries(languageLabels)
    .sort(([, a], [, b]) => a.localeCompare(b))
    .forEach(([code, label]) => {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = label;
      elements.languageSelect.appendChild(option);
    });
  if (!languageLabels[state.language]) {
    const option = document.createElement('option');
    option.value = state.language;
    option.textContent = state.language;
    elements.languageSelect.appendChild(option);
  }
  elements.languageSelect.value = state.language;
}

function addCustomEntry() {
  const code = elements.customLanguageCode.value.trim().toLowerCase();
  const name = elements.customLanguageName.value.trim();
  const category = elements.customCategory.value;
  const term = elements.customTerm.value.trim();
  const translation = elements.customTranslation.value.trim();
  const detail = elements.customDetail.value.trim() || 'Custom entry created by the learner.';

  if (!code || !name || !term || !translation) {
    alert('Please enter a language code, name, term, and translation.');
    return;
  }

  languageLabels[code] = name;
  createLanguageDataIfAbsent(code);
  if (!customData[code]) {
    customData[code] = { vocabulary: [], phrases: [], grammar: [] };
  }
  const newEntry = { term, translation, detail };
  data[code][category].unshift(newEntry);
  customData[code][category] = data[code][category];
  saveCustomData();
  populateLanguageSelect();
  elements.languageSelect.value = code;
  state.language = code;
  state.category = category;
  renderDailyLesson();
  renderFlashcard();
  generateQuiz();
  elements.customTerm.value = '';
  elements.customTranslation.value = '';
  elements.customDetail.value = '';
  alert(`Saved custom lesson for ${name}.`);
}

function updateSummary() {
  elements.streakCount.textContent = state.progress.streak;
  elements.completedCount.textContent = state.progress.lessonsCompleted;
}

function getCurrentList() {
  return data[state.language][state.category];
}

function renderDailyLesson() {
  const list = getCurrentList();
  state.dailyIndex = state.dailyIndex % list.length;
  const lesson = list[state.dailyIndex];
  elements.dailyLesson.innerHTML = `
    <h3>${lesson.term}</h3>
    <p><strong>Translation:</strong> ${lesson.translation}</p>
    <p class="detail-text">${lesson.detail}</p>
  `;
}

function renderFlashcard() {
  const list = getCurrentList();
  state.flashcardIndex = Math.floor(Math.random() * list.length);
  const entry = list[state.flashcardIndex];
  elements.flashcardTerm.textContent = entry.term;
  elements.flashcardTranslation.textContent = entry.translation;
  elements.flashcardDetail.textContent = entry.detail;
  elements.flashcardBack.classList.add('hidden');
}

function generateQuiz() {
  const list = getCurrentList();
  const shuffled = [...list].sort(() => Math.random() - 0.5);
  const questions = shuffled.slice(0, 3).map((item) => {
    const incorrect = list.filter((entry) => entry.term !== item.term)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((entry) => entry.translation);
    return {
      term: item.term,
      answer: item.translation,
      choices: shuffleArray([item.translation, ...incorrect]).slice(0, 4),
    };
  });
  state.quizQuestions = questions;
  renderQuiz();
}

function renderQuiz() {
  elements.quizBox.innerHTML = '';
  state.quizQuestions.forEach((question, index) => {
    const item = document.createElement('div');
    item.className = 'quiz-item';
    item.innerHTML = `
      <h3>Question ${index + 1}</h3>
      <p>What is the correct translation for <strong>${question.term}</strong>?</p>
      <div class="choice-grid" id="choices-${index}"></div>
    `;
    elements.quizBox.appendChild(item);
    const choices = item.querySelector(`#choices-${index}`);
    question.choices.forEach((choice) => {
      const option = document.createElement('button');
      option.className = 'choice-option';
      option.textContent = choice;
      option.addEventListener('click', () => handleChoice(choice, question.answer, option));
      choices.appendChild(option);
    });
  });
}

function handleChoice(answer, correctAnswer, option) {
  const parent = option.closest('.choice-grid');
  if (!parent) return;
  Array.from(parent.children).forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add('correct');
    }
    if (btn === option && btn.textContent !== correctAnswer) {
      btn.classList.add('incorrect');
    }
  });
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function speakTerm() {
  const text = elements.flashcardTerm.textContent;
  if (!('speechSynthesis' in window) || !text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  const langMap = {
    spanish: 'es-ES',
    french: 'fr-FR',
    german: 'de-DE',
    italian: 'it-IT',
    japanese: 'ja-JP',
    chinese: 'zh-CN',
    portuguese: 'pt-PT',
    russian: 'ru-RU',
    arabic: 'ar-SA',
    hindi: 'hi-IN',
    korean: 'ko-KR',
    sw: 'sw-KE',
  };
  utterance.lang = langMap[state.language] || 'en-US';
  window.speechSynthesis.speak(utterance);
}

function updateLanguageSettings() {
  state.language = elements.languageSelect.value;
  state.category = elements.categorySelect.value;
  createLanguageDataIfAbsent(state.language);
  renderDailyLesson();
  renderFlashcard();
  generateQuiz();
}

function markLessonCompleted() {
  const today = new Date().toDateString();
  if (state.progress.lastCompletedDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (state.progress.lastCompletedDate === yesterday) {
    state.progress.streak += 1;
  } else {
    state.progress.streak = 1;
  }
  state.progress.lessonsCompleted += 1;
  state.progress.lastCompletedDate = today;
  saveProgress();
  updateSummary();
}

function clearProgress() {
  if (confirm('Clear saved progress and reset streak?')) {
    state.progress = { streak: 0, lessonsCompleted: 0, lastCompletedDate: null };
    localStorage.removeItem('linguaLiftProgress');
    updateSummary();
  }
}

function attachEvents() {
  elements.languageSelect.addEventListener('change', updateLanguageSettings);
  elements.categorySelect.addEventListener('change', updateLanguageSettings);
  elements.nextFlashcardBtn.addEventListener('click', () => {
    renderFlashcard();
  });
  elements.speakBtn.addEventListener('click', speakTerm);
  elements.newQuizBtn.addEventListener('click', generateQuiz);
  elements.markLessonBtn.addEventListener('click', markLessonCompleted);
  elements.clearProgressBtn.addEventListener('click', clearProgress);
  elements.addCustomEntry.addEventListener('click', addCustomEntry);
  elements.flashcardTerm.addEventListener('click', () => {
    elements.flashcardBack.classList.toggle('hidden');
  });
}

function initialize() {
  loadProgress();
  loadCustomData();
  populateLanguageSelect();
  updateSummary();
  attachEvents();
  renderDailyLesson();
  renderFlashcard();
  generateQuiz();
}

initialize();
