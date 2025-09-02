# Data & Configuration

Environment:

* `frontend/.env` → VITE_SONAR_API_KEY=your_key
* `vite.config.js` → base '/AI-Mock-Interviewer/' for GitHub Pages

Static data:

* `src/data/resourcesData.js` → arrays per category used by Resources pages
* `src/data/sheets.json` → list of practice sheets
* `src/data/sheetsTopics.json` → topics per sheet id

Deployment metadata:

* `frontend/package.json` → `homepage`, `predeploy/build/deploy` scripts for gh-pages

Local dev tips:

* If deploying under a different repo path, update BrowserRouter basename and vite `base`.
