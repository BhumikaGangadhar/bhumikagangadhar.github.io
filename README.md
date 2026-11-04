# Shivakrishna Karnati — Portfolio

German-language React portfolio covering AI consulting, software development, professional experience, current RAG/MCP/LLM work, and spec-driven development.

Live site: https://shivakarnati.github.io/

## Local development

```sh
npm ci
npm start
```

## Validation

```sh
npm test -- --watchAll=false
npm run build
```

The production bundle is generated in `build/` with the root `/` asset base configured in `package.json`.

## Content and layout

- `src/constants/portfolio.js`: experience, current focus, skills, project summaries, and social links.
- `src/App.jsx`: page sections, education, contact information, and spec-driven workflow.
- `src/css/styles.css`: responsive layout, colors, typography, and accessibility preferences.
- `public/index.html`: German language, title, description, and social metadata.

Spec-driven development is described as a current focus, without claiming named products or completed projects. Employer project summaries do not link to private source code.

## Publishing

GitHub Pages uses the GitHub Actions source. Pushing to `main` automatically runs `.github/workflows/deploy-pages.yml` to install locked dependencies, run the tests, build the React app, and deploy `build/` to:

https://shivakarnati.github.io/

Watch the **Actions** tab for the deployment result. You can also run **Deploy portfolio to GitHub Pages** manually with **Run workflow**. Only a successful build is published; the previous deployment stays live when checks fail.

The old `gh-pages` branch is retained as deployment history. It is no longer the publishing source. The obsolete `npm run deploy` script was removed because it referenced an uninstalled dependency and did not connect updates on `main` to the live site.

The repository is named `shivakarnati.github.io` so GitHub Pages publishes at the account root. The old `/fastreact/` URL redirects to the root through `public/fastreact/index.html`.
