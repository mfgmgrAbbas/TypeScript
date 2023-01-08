Installaion errors

if nextjs local host give error on command npm run dev
npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\ArsalAli\AppData\Local\npm-cache\_logs\2023-01-07T05_09_43_501Z-debug-0.log
change the directory and siwitch to current directory.

Go to given place and show hidden files then the AppData will be visibale and delete the log file "2023-01-07T05_09_43_501Z-debug-0.log" 



Install Simple React Snippets from VS code extensions

write sfc and enter on .tsx file it will create function

TypeScript getting error TS2304: cannot find name ' require'
https://stackoverflow.com/questions/31173738/typescript-getting-error-ts2304-cannot-find-name-require

Quick and Dirty
If you just have one file using require, or you're doing this for demo purposes you can define require at the top of your TypeScript file.

declare var require: any
TypeScript 2.x
If you are using TypeScript 2.x you no longer need to have Typings or Definitely Typed installed. Simply install the following package.

npm install @types/node --save-dev
The Future of Declaration Files (6/15/2016)

Tools like Typings and tsd will continue to work, and we’ll be working alongside those communities to ensure a smooth transition.

Verify or Edit your src/tsconfig.app.json so that it contains the following:

...
"types": [ "node" ],
"typeRoots": [ "../node_modules/@types" ]
...
Make sure is the file in the src folder and no the one on the root app folder.

By default, any package under @types is already included in your build unless you've specified either of these options. Read more

TypeScript 1.x
Using typings (DefinitelyTyped's replacement) you can specify a definition directly from a GitHub repository.

Install typings

npm install typings -g --save-dev
Install the requireJS type definition from DefinitelyType's repo

typings install dt~node --save --global
Webpack
If you are using Webpack as your build tool you can include the Webpack types.

npm install --save-dev @types/webpack-env
Update your tsconfig.json with the following under compilerOptions:

"types": [
      "webpack-env"
    ]
This allows you to do require.ensure and other Webpack specific functions.

Angular CLI
With CLI you can follow the Webpack step above and add the "types" block to your tsconfig.app.json.

Alternatively, you could use the preinstalled node types. Keep in mind this will include additional types to your client-side code that are not really available.

"compilerOptions": {
    // other options
    "types": [
      "node"
    ]
  }

  How to Create Pages in Next.js?

  https://medium.com/nextjs/how-to-create-pages-in-next-js-fcc4891ce3a4#:~:text=If%20you%20create%20an%20about,component%20exports%20with%20export%20default.

  .css file

  https://www.youtube.com/watch?v=qKwnlTVAGnA

  https://github.com/iamshaunjp/nextjs-tutorial/blob/lesson-6/styles/globals.css

  creat comps folder inside project hi_world

  Navbar.tsx file 
  install
  npm i react-router-dom
  import * as React from 'react';
  import {Link} from 'react-router-dom';

  import Link to link pages like import {Link} from 'react-router-dom';
  
  