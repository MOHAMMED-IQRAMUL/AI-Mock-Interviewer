# 🧠 AI Mock Interview Buddy Platform

**Your personal AI Interviewer powered by Perplexity Sonar API.**
Practice behavioral and technical interviews, solve coding sheets, explore resources, and receive instant feedback — all in a beautiful and modern UI.

---

## 🚀 Features

* 🎤 **AI-Powered Interview Sessions**
  Real-time interactive mock interviews with speech-to-text (STT) and text-to-speech (TTS) functionality.

* 🧪 **Live Interview Summary Report**
  Get AI-generated feedback with a score, summary, and areas to improve.

* 📚 **Interview Resources Hub**
  Curated preparation material for:

  * DSA & Coding
  * Core CS Subjects (OS, DBMS, CN, OOPs)
  * HR Questions
  * Non-Tech Rounds (Aptitude, Communication, etc.)
  * Sheets & Practice Lists

* 🧩 **Practice Page**
  Explore topic-wise question sheets like SDE Sheet, DSA AtoZ, Top 200 Questions with progress tracking.

* 💡 **Beautiful UI & Animations**
  Built using TailwindCSS, Framer Motion, and Lucide/FontAwesome icons.

---

### 🔧 Tech Stack

| Frontend      | APIs Used                           | State Management         |
| ------------- | ----------------------------------- | ------------------------ |
| React (Vite)  | Perplexity Sonar                    | useState/useEffect       |
| Tailwind CSS  | Web Speech API                      | Local Storage  |
| Framer Motion | SpeechSynthesis & SpeechRecognition | —                        |

---

### 🛠️ Getting Started

#### 📦 Clone & Setup

```bash
git clone https://github.com/mohammed-iqramul/ai-mock-interviewer.git
cd ai-mock-interviewer
cd frontend
npm install
```

#### 🔑 Configure API Key

Create a `.env` file at the root:

```env
VITE_SONAR_API_KEY=your_perplexity_sonar_api_key
```

---

### 📁 Project Structure

``` md
src/
│
├── components/             # Shared components like ResourceCard, Wrapper
├── pages/                  # Route-based pages (Practice, Interview, Home)
├── data/                   # Static sheets/resources data in JSON/JS
├── assets/                 # Icons/images (optional)
├── App.jsx                 # Root component
└── main.jsx                # ReactDOM root
```

---

### 💻 Scripts

| Script            | Description            |
| ----------------- | ---------------------- |
| `npm run dev`     | Run development server |
| `npm run build`   | Production build       |
| `npm run preview` | Preview production app |

 ---

<!--
### 📸 Screenshots

| Home                    | Practice                    | Interview                    |
| ----------------------- | --------------------------- | ---------------------------- |
| ![](./screens/home.png) | ![](./screens/practice.png) | ![](./screens/interview.png) |

> 📷 *Update screenshots as needed in the `screens/` folder.*

--- -->

### 🙌 Future Improvements

* PDF Export of summary reports
* User authentication and dashboard
* Realtime code editor integration
* Leaderboard or stats tracking

---
