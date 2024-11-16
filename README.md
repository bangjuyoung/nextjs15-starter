# Nextjs15 Starter

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## Packages

#### Core

- [nextjs](https://nextjs.org/) ⎯ The React Web Framework (app router)
- [tailwindcss](https://tailwindcss.com/) ⎯ A utility-first CSS framework
  - [autoprefixer](https://github.com/postcss/autoprefixer) ⎯ Automatically adds vendor prefixes to CSS for browser compatibility, using Can I Use
- [eslint with nextjs](https://nextjs.org/docs/app/api-reference/config/eslint) ⎯ Detecting issues and maintaining quality in ECMAScript/JavaScript/Typescript code

#### Tool

- code formatting
  - [prettier](https://prettier.io/) ⎯ A code formatter to enforce consistent code style
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) ⎯ Turn off all ESLint rules that are unnecessary or might conflict with Prettier
- commit message formatting
  - [@commitlint/cli](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/cli) ⎯ Checking commit messages
  - [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) ⎯ A setup for enforcing [Conventional Commits](https://www.conventionalcommits.org/) rules on commit messages
- git hooks
  - [husky](https://typicode.github.io/husky/) ⎯ Use Git hooks to run tasks like linting and testing before commits or pushes
  - [lint-staged](https://github.com/lint-staged/lint-staged) ⎯ Linting Git-staged files
