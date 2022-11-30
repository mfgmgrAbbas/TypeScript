#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import  chalkAnimation, { rainbow }  from "chalk-animation";
import * as moment from "moment-timezone";

const sleep = () => {
    return new Promise ((res) => {
        setTimeout(res, 3000);
    })
}

async function beforeStartCal() {
    let pulse = chalkAnimation.rainbow('PLEASE START CALCULATION');
    await sleep();
    pulse.stop();
    console.log(` _____________________
    |  _________________  |
    | | JO  3.141592654 | |
    | |_________________| |
    |  __ __ __ __ __ __  |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
    
}

await beforeStartCal();

async function askQuestions () {
const answers = await inquirer
  .prompt([
    {
        type:"list",
        name:"operator",
        message:chalk.bgBlueBright("Which operation do you want to perform?"),
        choices:["Addition", "Subtraction", "Multiplication", "Division"],

    }, 
    {
        type:"number",
        name:"num1",
        message:chalk.bgGreenBright("Enter Number 1:")
    },
    {
        type:"number",
        name:"num2",
        message:chalk.bgYellowBright("Enter Number 2:")
    }
  ])
  .then((answers) => {
    // console.log(answers);
    if (answers.operator == "Addition"){
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        
    }else if (answers.operator == "Subtration"){
        console.log(chalk.red(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
        
    }else if (answers.operator == "Multiplication"){
        console.log(chalk.blue(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
        
    }else if (answers.operator == "Division"){
        console.log(chalk.yellow(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
        
    }
  })
 
  };

 // askQuestions();

 async function calculateAgain () {
    do {
        await askQuestions();
        var again = await inquirer
        .prompt([{
            type: "string",
            name: "restart",
            message: chalk.bgCyanBright(`Do you want to Calculate again? press "Y" or "N"`),
        }])
            
        
    }while(again.restart == "y" || again.restart == "yes" || again.restart == "Yes" || again.restart == "YES")
 } 
 calculateAgain();
