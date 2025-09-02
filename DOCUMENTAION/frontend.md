# Frontend Guide

Routing map (from `App.jsx`):

* `/` → Home
* `/dashboard` → Dashboard
* `/practice` → Practice index
* `/practice/:sheetId` → Sheet details (uses `src/pages/practive/SheetDetails.jsx`)
* `/interviews` → Interviews landing
* `/interview/start` → InterviewSession (reads location.state: { interviewType, difficulty, topic })
* `/resources` → Resources index
* `/resources/{dsa|core|hr|nontech|sheets|projects|webdev|resume}` → Resource categories
* `*` → NotFound

InterviewSession essentials:

* Requires `VITE_SONAR_API_KEY` in environment
* Sends system prompt with interviewType/difficulty/topic
* Limits AI reply length to ~500 chars
* Finish flow requests a JSON summary and parses it
* Optional TTS autoplay and speech rate control

Notes:

* Browser speech features vary; show a friendly fallback when unsupported.
* Keep messages short to reduce token usage.
