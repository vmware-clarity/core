# Development Details

## Public Packages

This repository contains the code for two public packages:

- `@cds/angular` - Clarity Angular package for easier consumption of Clarity Core with Angular

- `@cds/core` - Clarity Web Components and common utilities

- `@clr/eslint-plugin-clarity-adoption` - ESLint rules to help with migration to Core (@clr/eslint-plugin-clarity-adoption)

- `@cds/react` - Clarity React package for easier consumption of Clarity Core with React (@cds/react)

## Project Structure

This repository consists of three projects:

```bash
packages

├── adoption # ESLint rules to help with migration to Core (@clr/eslint-plugin-clarity-adoption)

├── angular # Clarity Angular package for easier consumption of Clarity Core with Angular (@cds/angular)

├── core # Clarity Web Components and common utilities (@cds/core)

├── react # Clarity React package for easier consumption of Clarity Core with React (@cds/react)

```

## Build Process

The build scripts in this repository have been designed to work with Node.js v16 or later.

The build process consists of the following five stages. Each stage can be ran individually or all stages could be executed by running `npm run build:ci`. This is useful when submitting pull requests, because `npm run build:ci` is essentially the same command the CI system will run.

1. `npm run clean`: deletes all generated code and artifacts

2. `npm run lint`: validates linting, formatting, and license headers for all code files

   - `npm run lint:fix`: automatically fixes any linting or formatting issues if possible

   - `npm run lint:changed`: same as `npm run lint`, but only for new and modified files

   - `npm run lint:changed:fix`: same as `npm run lint:fix`, but only for new and modified files

3. `npm run build`: builds all projects

4. `npm run test`: verifies all tests pass

   - `npm run test:watch`: runs a watcher on all tests

5. `npm run public-api:check`: verifies the public API has not changed
   - `npm run public-api:update`: updates the public api "golden file" and accepts the changes to the public API allowing the CI build to pass.

Other commands

- `npm run commit`: launches an interactive prompt to help format commit messages.

- `npm run preview`: performs a dry-run of the release process and shows you what a release would look like (branch must exist remotely).

- `npm run start`: serves and launches the storybook project

## Commit Hooks

This repository uses Husky to execute the following client-side commit hooks.

- `pre-commit`: Before performing a commit, all staged files will be automatically linted.

- `commit-msg`: All commit messages will be validated to ensure they conform this repository's commit message conventions. Non-conforming commits will be automatically blocked.

Although it is typically not recommended, you may bypass the commit hooks by adding the `--no-verify` flag to you `git commit` command.
