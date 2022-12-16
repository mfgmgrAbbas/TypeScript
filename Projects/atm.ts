
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import Choice from "inquirer/lib/objects/choice.js";
import { type } from "os";
import { exit } from "process";

const sleep = () => {
    return new Promise ((res) => {
        setTimeout (res, 3000)
    })
}
/*async function beforeStart() {
    let pulse = chalkAnimation.rainbow("Welcome to Online Automatic Teller Machine");
    await sleep();
    pulse.stop();
    console.log(`   _______________________
    .'|.=====================.|'.
   /  ||.-------------------.||  \
   |  ||| _________________ |||  |
   |  ||||_________________||||  |
   |  ||||'.             .'||||  |
   |  ||||  '._________.'  ||||  |
  =|  ||||   /         \   ||||  |=
   |  ||||  /           \  ||||  |
   |  |||| /             \ ||||  |
   |  ||||/___.-------.___\||||  |
   |  |||_______ ___ _______|||  |
   |  |||       |   |       |||  |
   |  ||'======='---'======='||  |
   |  ||  ______             ||  |
   |  ||.'      '.  _   .''. ||  |
   |  |||        | (_) |    |||  |
   |  ||'.______.'      '..' ||  |
   |  ||=====================||  |
   |  || .-----------------. ||  |
   |  || |   o .'''''. o   | ||  |
   |  || |  o /_.(_)._\ o  | ||  |
   |  || | o /(_) _ (_)\ o | ||  |
  =|  || | o( :_ (_) _: )o | ||  |=
   |  || | o \(_) _ (_)/ o | ||  |
   |  || |  o \ '(_)' / o  | ||  |
   |  || |   o '.....' o   | ||  |
   |  || '-----------------' ||  |
   \  |'====================='|  /
    '.|_______________________|.' `);
    

}

await beforeStart(); */

(
    async() => {
        const userInput : {userID: string, userPIN: number} = await inquirer.prompt([
            {
                name: "userID",
                message: "Enter your user ID",
                type: "input",
            },
            {
                name: "UserPIN",
                message: "Enter your PIN",
                type: "password"
            }
        ]) 
        // console.log("User ID", userInput.userID);
        // console.log("user PIN", userInput.userPIN);
        
        const userData = {
            userID: userInput.userID,
            userPIN: userInput.userPIN,
            amount: Math.floor(Math.random()*10000000 + 1)
        }
        // console.log(userData);

        const slectedOpt: {Options: "cash withdrawals" | "Balance Inquiry" | 
        "Fund Transfer" | "Fast Cash" | "Utlity bill" | "Exit"  } 
        = await inquirer.prompt([
            {
                name: "Options",
                message: "Please slect any option",
                type: "list",
                choices: ["cash withdrawals", "Balance Inquiry", "Fund Transfer", 
                "Fast Cash", "Utlity bill", "Exit"]
            },
        ])
       
        if (slectedOpt.Options === "cash withdrawals") {
            console.log("Your current Balance is: ", userData.amount);
            const enteredAmount: {amount: number} = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Please enter amount to withdrawls",
                    type: "number",
                    validate: (input) => {
                        if (input > userData.amount) {
                            return "Insufficient Funds";
                            
                        }else {
                            return true
                            
                        }

                    }
                },
            ])
            userData.amount -= enteredAmount.amount
            console.log(`An amount of ${enteredAmount.amount} 
            has been sucessfully withdrawls, now your current balance after withdrawls 
            is  ${userData.amount}`);

        }else if (slectedOpt.Options === "Balance Inquiry"){
            console.log("Your current Balance is: ", userData.amount);
            
        }else if (slectedOpt.Options === "Fund Transfer"){
            console.log("Your current Balance is: ", userData.amount);
            const fundTrns : {fundTransfer: number} = await inquirer.prompt([
                {
                    name: "fundTransfer",
                    message: "Please enter amount to transfer",
                    type: "number",
                    validate: (data) => {
                        if (data > userData.amount) {
                            return "Insuffcient Funds"
                        }else {
                            return true
                        }
                    }
                }
            ])
            userData.amount -= fundTrns.fundTransfer
            console.log(`An amount of ${fundTrns.fundTransfer} 
            has been successfully transfered, now your current balance is 
            ${userData.amount}`);
            
        }else if (slectedOpt.Options === "Fast Cash") {
            console.log("Your current Balance is: ", userData.amount);
            const fastCash: {Fcash: number} = await inquirer.prompt([
                {
                    name: "Fcash",
                    message: "Please select an amount for withdrawls",
                    type: "checkbox",
                    choices: [10000, 8000, 5000, 25000, 1000, 15000]
                }
            ])
           
            userData.amount -= 10000
            console.log(`An amount of ${fastCash.Fcash} 
            sucessfully withdrawan now your balance is ${userData.amount}`);
          
            
        }else if (slectedOpt.Options == "Utlity bill"){
            console.log("Your current Balance is: ", userData.amount);
            const utilityBill: {billOptions: "Electricity Bill" | "Sui Gas Bill"} 
            = await inquirer.prompt([
                {
                    name: "billOptions",
                    message: "Please select below to pay bill",
                    type: "list",
                    choices: ["Electricity Bill", "Sui Gas Bill"]

                }
            ])
            if (utilityBill.billOptions == "Electricity Bill") {
                const ElectricityBill = {
                    electBill: Math.floor(Math.random() * 10000)
                
                }
                console.log(`Your current Electricity bill is: 
                ${ElectricityBill.electBill}`)
                const payElectBill: {electBillPayment: number} = 
                await inquirer.prompt([
                    {
                        name: "electBillPayment",
                        message: "Do you want to Pay Electricity Bill?",
                        type: "confirm",
                    
                    }
                ])
                
                
                    ElectricityBill.electBill -= payElectBill.electBillPayment-1
                    console.log(`An amount of Rs: ${ElectricityBill.electBill} Electricity Bill successfully paid`);
            
                    
                    
                
                
                
                
            }else if (utilityBill.billOptions == "Sui Gas Bill"){
                const suiGasBill = {
                    suiGBill: Math.floor(Math.random() * 10000)
                }
                console.log(`Your current Sui Gas Bill is: ${suiGasBill.suiGBill}`);
                const paySuiGasBill: {paySbill: number} = await inquirer.prompt([
                    {
                        name: "paySbill",
                        message: "Do you want to pay Sui Gas Bill?",
                        type: "confirm"
                    }
                ])
                suiGasBill.suiGBill -= paySuiGasBill.paySbill -1
                console.log(`An amount of Rs: ${suiGasBill.suiGBill} Sui Gas Bill successfully paid`);
                
            }
        }
    
     const slectOptAgain = async() => {
        do {
            
            var startAgain:{restart: string} = await inquirer.prompt([
                {
                    name: "restart",
                    message: "Do you want to perform another Transaction?",
                    type: "string"
                }
            ]);
    
        }while (startAgain.restart == "Y" || startAgain.restart == "Yes" || 
        startAgain.restart == "y" || startAgain.restart == "yes" || 
        startAgain.restart == "YES");
        slectedOpt.Options
        
     }
     
    
    slectOptAgain();
    }
    

    
)()

