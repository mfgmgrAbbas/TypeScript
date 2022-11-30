Develop a CLI Calculator using TypeScript and Node.js and Deploy it on NPM

CLI Calculator Steps:

1. Generate tsconfig.json by giving this command:

 tsc --init
If you want to run TypeScript tsc command in Windows Powershell:

    1.  Open Powershell in Adminstrator mode

    2. Run command:

        Set-ExecutionPolicy RemoteSigned

[Policy updated and now you can run tsc command in powershell.](<href = "https://islenmisveri.wordpress.com/2021/01/31/working-with-scripts-in-powershell-typescript-compiler-tsc-problem-fix/" taget = "blank"/>)


2. Make it a Node.js project by giving the following command:

    npm init -y

It will creade tsconfig.json and package.json files. Open tsconfig.json file and change "target": "ES2022", "module": "NodeNext" and "moduleResolution": "NodeNext". Now open package.json file and add "type": "module" under the "main": "index.js". 

3. Install types for Node.js

    npm i @types/node -D

4. Create a file index.ts

    console.log("Hello World")

5. Transpile index.ts by running:

    tsc 

    tsc && node index.ts  // for direct execution.

6. It will create index.js file now run it by following command

    node index.js 

7. Create .gitignore file in root directory.

    node_modules

8. Instal inquirer, chalk and chalk-animation, their types and node type by following command

    npm i inquirer

    npm i chalk

    npm i @types/node -D

    npm i -D @types/inquirer

    npm i -D @types/chalk

    npm i -D @types/chalk-animation

    npm i chalk-animation     

[For more information and documentation about inquirer](<href = "https://www.npmjs.com/package/inquirer?activeTab=readme" target = "blank"/>) (:target = "blank")

[for more information about @types/inquirer](https://www.npmjs.com/package/@types/inquirer){:target="_blank"}

[for more information and documentation about chalk](https://www.npmjs.com/package/chalk){:target="_blank"}

[for about chalk-animation](https://www.npmjs.com/package/@types/chalk-animation){:target="_blank"}

9. Create new fie calculator.ts and import the required dependicies by following commands

    import inquirer from "inquirer";

    import chalk from "chalk";

    import chalkAnimation from "chalk-animation";

10. Give environment path at the top of calulator.ts file.

    #! /usr/bin/env node

11. Open chalk-animvation cli

12. [Copy calculator image and insert it](https://www.asciiart.eu/electronics/calculators){:target="_blank"}

