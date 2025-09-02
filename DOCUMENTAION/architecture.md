# Architecture

* App shell: Vite + React 19
* Routing: react-router-dom with BrowserRouter basename `/AI-Mock-Interviewer`
* Styling: index.css (Tailwind via @tailwindcss/vite plugin), motion for basic animations
* Data layer: static JSON/JS under `src/data`
* AI: Perplexity Sonar chat completions REST API
* Speech: Web Speech API (SpeechRecognition) and SpeechSynthesis
* Build: Vite base configured for GitHub Pages

Key files:

* src/main.jsx → Router + basename
* src/App.jsx → Routes
* src/pages/interview/InterviewSession.jsx → AI chat, STT, TTS, summary
* src/data/{resourcesData.js, sheets.json, sheetsTopics.json} → content
* vite.config.js → `base` set; Tailwind plugin enabled
