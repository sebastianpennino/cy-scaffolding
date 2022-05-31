Step by step project creation:
- initialized package.json with `npm init -y`
- installed cypress `npm i -DE cypress`
- installed typrescript `npm i -DE typrescript`
- created `.editorconfig`, `.gitignore`, `prettierrc`, `.prettierignore` and `README.md`
- used bahmutov utility (https://github.com/bahmutov/cly) 
(usage: https://www.youtube.com/watch?v=g9ToLSD_lbQ) to install the basic scafolding 
`npx @bahmutov/cly init`
- added `"blockHosts": ["*.google-analytics.com", "*.googletagmanager.com"]` to `cypress.json`

- authored the package.json by adding:
```
{
  "test": "cypress run --browser chrome --headless",
  "open": "cypress open"
}
```
- run the project locally with `npx cypress open`

Adding husky
- wip
