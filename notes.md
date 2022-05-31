Project Creation

Base project changes

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

Adding pre-commit hook

This will add a commit pre-hook (using husky) that will run on the git
staged files (using lint-staged) a formatter (using prettier)

- install all deps `npm i -DE husky lint-staged prettier`
- Following steps described here https://typicode.github.io/husky/#/?id=install
  - enable git hooks `npx husky install`
  - add to the package.json script 
    ```
    {
      "prepare": "husky install"
    }
    ```
  - create a hook `npx husky add .husky/pre-commit "npx lint-staged"`
  - add a valid `.lintstagedrc` file on the root folder
  
