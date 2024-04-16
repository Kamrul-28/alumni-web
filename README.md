# Alumni web

## Table of Contents

- [Contrubution](#contrubution)
- [Extension](#extension)
- [Intallation Process](#installation-process)
- [Project Run](./client/README.md#run-command)
- [Project Instruction](./client/README.md)
- [Deployment](#deployment)

Use vscode to get better experience

## Contrubution

- forked the repository to your account.
- switch to dev branch.
- _fetch_ from upstream and _reabase_ from _upsteam/dev_.
- create new branch according to the features.
- finish your task.
- create pull request to upstream dev branch.

**Note:** you can follow the article below to know about forked collaboration:

- [Configure remote repo](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork)
- [Syncing with fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)

## Extension

You are encourage to install the to get better experience

- ESLint by Dirk Baeumer
- Prettier - Code formatter by Prettier
- Playwright Test for Vscode
- ES7+REACT/REDUX/REACT-NATIVE

## Installation Process

- install [node.js](https://nodejs.org/en/download) version 18/16.
- install [git](https://git-scm.com/)
- clone the repository from github to your local machine.
- `cd client` (enter into project directory)
- `npm install` (install required npm packages)
- configure enviroment variables for [development](./client/.env.development) | [staging](./client/.env.staging) | [testing](./client/.env.testing) | [production](./client/.env.production)

## Deployment

- `docker compose up`

<!-- 060202 123 -->
