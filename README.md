# Shivakrishna Karnati — Portfolio

German-language React portfolio covering AI consulting, software development, professional experience, current RAG/MCP/LLM work, and spec-driven development.

Live site: https://shivakarnati.github.io/fastreact/

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

The production bundle is generated in `build/` with the `/fastreact/` asset base configured in `package.json`.

## Content and layout

- `src/constants/portfolio.js`: experience, current focus, skills, project summaries, and social links.
- `src/App.jsx`: page sections, education, contact information, and spec-driven workflow.
- `src/css/styles.css`: responsive layout, colors, typography, and accessibility preferences.
- `public/index.html`: German language, title, description, and social metadata.

Spec-driven development is described as a current focus, without claiming named products or completed projects. Employer project summaries do not link to private source code.

## Publishing

Deploy the contents of `build/` to the existing GitHub Pages configuration. Local edits and a successful build do not update the live website automatically. The legacy `npm run deploy` script requires `gh-pages`, which is not included in the repository's locked dependencies.
