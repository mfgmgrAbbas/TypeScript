Install all dependencies:
Install Node.js from https://nodejs.org/

Install TypeScript 4.9+ using Node Package Manager command (https://www.typescriptlang.org/download):

 	npm install -g typescript

Make it a Node.js project by giving the following command:

    npm init -y
Install types for Node.js

    npm i @types/node -D

Generate tsconfig.json by giving this command:

    tsc --init

Others

npm i nodemon

npm i --save-dav @types/jest


Vechical class created in Vehical.ts file and Vehicle test are in Vehicle.test.ts

Air Vechical class created in Air Vehical.ts file and Vehicle test are in airVehicle.test.ts

Two functions were create describeVehicleXPosition function, and moveVehicles Forward function.

Each class has its own file, and both functions are in the functions.ts file. 

There is also a file for the tests for each class and functions.test.ts for the function tests.