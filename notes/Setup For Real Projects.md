- tsc --init : creates a basic config file for typescript in json 
- npm init -y : creates config file to start a nodejs project (installing node packages etc)
- touch index.html : creates an html file for the project
- mkdir src dist : creates these two directories that are typically found in real projects; src contains the typescript code while dist has some files that are added during production
- touch src/index.ts : creates an initial typescript file to start working
- uncomment "outDir" in the tsconfig file and set the path as "./dist" it to be the final output directory
- npm i lite-server : installs a local server package to run the project

## How to run the project:

**There are two methods:**
1. running the html file using the live server extension on vscode
2. adding a start script in the package.json file to start the lite-server extension when the command 'npm start' is ran.

[[Coding/languages/Typescript/Classes]]