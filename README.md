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

## Packages
### Code formatting
  - [prettier](https://prettier.io/)
    - A code formatter to enforce consistent code style.
    - 일관된 코드 스타일을 강제하기 위한 코드 포맷터
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
    - When using ESLint, turn off all ESLint rules that are unnecessary or might conflict with Prettier.
    - ESLint와 함께 사용할 때, 필요없거나 Prettier와 충돌하는 모든 ESLint 규칙을 비활성화

### Commit Messages formatting
- [@commitlint/cli](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/cli)
  - A command-line tool for checking commit messages
  - 커밋 메시지 검사를 위한 CLI 도구
- [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
  - A setup for enforcing [Conventional Commits](https://www.conventionalcommits.org/) rules on commit messages
  - 커밋 메시지에 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 적용하는 설정