# Deployment

Target: GitHub Pages

* `vite.config.js` sets `base` to '/AI-Mock-Interviewer/'
* `BrowserRouter` uses the same basename
* package.json has:
  * predeploy → build
  * deploy → `gh-pages -d dist`

Steps:

* Ensure repo visibility is public
* In `frontend` run: npm run predeploy; npm run deploy
* In GitHub repo settings, set Pages source to `gh-pages` branch

Troubleshooting:

* 404 on refresh → basename/base mismatch; confirm both are '/AI-Mock-Interviewer/'
* Blank page → check that assets are served under the correct base path
