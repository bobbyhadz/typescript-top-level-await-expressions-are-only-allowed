## Instructions

The TS code is in the `src/index.ts` file.

To be able to run the code, follow these instructions:

1. Clone the GitHub repository with the `git clone` command.
2. Open your terminal in the project's root directory (right next to `package.json`).
3. Install the node modules.

```bash:shell
npm install
```

4. To run the code, issue the following command.

```bash:shell
npx tsc && node build/index.js
```

The output file is located under `build/index.js` as indicated in the command.

5. Alternatively, you can use the [esrun package](https://www.npmjs.com/package/esrun) as shown toward the end of the article.

```bash:shell
npx esrun src/index.ts
```

Or run the command in watch mode.

```bash:shell
npx esrun --watch src/index.ts
```