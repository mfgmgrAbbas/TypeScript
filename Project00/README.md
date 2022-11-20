# TypeScript

1. Install Node.js from https://nodejs.org/

2. Install TypeScript 4.9+ using Node Package Manager command (https://www.typescriptlang.org/download):
 	        
          npm install -g typescript
          
          For Linux
          
          sudo npm i -g typescript
          
3. To check version of Typescript command

           tsc --version
           
           If this command gives error like 
           
           + CategoryInfo          : SecurityError: (:) [], PSSecurityException
           + FullyQualifiedErrorId : UnauthorizedAccess
           
           Then rigt click on start menu and open window power shell as administrator type this command
           
           Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
           
           Remember:- You can always revert the changes you made with the following command:

            Set-ExecutionPolicy Restricted

4. Install VSCode from https://code.visualstudio.com/Download

5. Read: https://bobbyhadz.com/blog/typescript-generate-tsconfig-json

6. Read: https://www.typescripttutorial.net/typescript-tutorial/typescript-hello-world/

7. Generate tsconfig.json by giving this command:
          
          tsc --init
          
8. Make it a Node.js project by giving the following command:
          
          npm init -y
          
9. Create file index.ts

We have used string type to store and print the message.
Note that the most basic types in TypeScript correspond to the seven basic kinds of primitives in JavaScript:

          1. null
          2. undefined
          3. boolean // true or false
          4. string // "", "Hello World"
          5. number // 0, 5.1, -9
          6. bigint // 0n, 5n, -10n
          7. symbol // Symbol(), Symbol("hi"),
          
10. Transpile JavaScript by running:

          tsc
          
11. Run transpiled javascript by running the following command:
          
          node app
          
11. Also Read: https://code.visualstudio.com/Docs/languages/typescript
