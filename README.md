# Task Flow

React + TypeScript + Vite, with React Router, Tailwind CSS, ESLint, Prettier, and Husky.

## Get started

Use Node.js 24 and npm.

```sh
nvm use
npm install
npm run dev
```

Open the local URL printed by Vite.

## Commands

- `npm run dev` — start the development server.
- `npm run build` — type-check and build into `dist/`.
- `npm run preview` — preview the production build locally.
- `npm run lint` / `npm run lint:fix` — check / fix lint errors.
- `npm run format` / `npm run format:fix` — check / apply formatting.
- `npm run typecheck` — check TypeScript.
- `npm run check` — run lint, formatting, and production build checks.

`npm install` enables Husky. The pre-commit hook checks lint, formatting, and TypeScript across the project. Run `npm run format:fix` before committing if formatting fails.

Work on feature branches and open a pull request into `main` when ready.
The repository started empty, so the setup branch contains its first application files.

The app uses browser routing; production hosting must serve `index.html` for unknown paths.

## Styling

Tailwind CSS is integrated through `@tailwindcss/vite` in `vite.config.ts` and imported in `src/index.css`. Use utility classes directly in JSX. Existing global styles live in `@layer base`, so utility classes can override them. Tailwind detects source files automatically; no separate Tailwind or PostCSS configuration is needed.
