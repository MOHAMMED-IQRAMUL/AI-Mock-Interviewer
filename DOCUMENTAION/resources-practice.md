# Resources & Practice

Resources pages

* Category components under `src/pages/resources/` render cards from `resourcesData.js`
* Add new cards by appending to the corresponding array export

Practice

* `/practice` lists sheets from `sheets.json`
* `/practice/:sheetId` renders topics from `sheetsTopics.json` keyed by id
* Links typically point to external LeetCode/GFG pages

Conventions

* Prefer minimal fields: { title, tags[], type, url, description }
* Host PDFs under `public/pdfs/` when needed and reference via `/pdfs/...`
