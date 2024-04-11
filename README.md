# Turborepo starter

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `@repo/design-system`: The design system built on the Panda CSS
- `@repo/ui`: a React component library shared by `web` applications
- `apps/web`: [Next.js](https://nextjs.org/) app

### Utilities

### Build

To build all apps and packages, run the following command:

```bash
cd my-turborepo
bun turbo build
```

### Develop

#### `packages/design-system`

Run Panda Studio:

```bash
cd my-turborepo
bun design-system studio
```

#### `packages/ui`

Run Storybook

```bash
cd my-turborepo
bun ui dev
```

#### `apps/web`

Run Next.js App

```bash
cd my-turborepo
bun web dev
```

#### Create new workspace

```bash
bun turbo gen workspace
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```bash
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```bash
npx turbo link
```
