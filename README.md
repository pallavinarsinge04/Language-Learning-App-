# LinguaLift

A lightweight interactive language learning app that runs in the browser.

## Features

- Daily lessons for vocabulary, phrases, and grammar.
- Interactive flashcards with translation and pronunciation support.
- Practice quizzes with instant answer feedback.
- Local progress storage using browser `localStorage`.
- Clean, mobile-friendly UI with category-based learning.

## How to use

1. Open `index.html` in a browser.
2. Choose a language and learning category.
3. Review the daily lesson and complete it with the "Mark Completed" button.
4. Practice with flashcards and press "Pronounce" for speech output.
5. Start a quiz and choose the correct translations.

## Extend with Firebase

If you want to sync progress across devices, you can add Firebase Authentication and Firestore:

- Create a Firebase project.
- Add the Firebase config to the app.
- Replace `localStorage` save/load calls with Firestore sync functions.

## Files

- `index.html` — app layout and structure.
- `styles.css` — UI styling.
- `app.js` — lesson data, flashcards, quizzes, and progress persistence.
