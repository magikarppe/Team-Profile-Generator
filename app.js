const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const path = require("path");
const fs = require("fs");





const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



const teamMembers = [];


 async function prompt() {
    let response1 = "";
    // prompt to collect input and use with while
    do {
         try {
              response = await inquirer.prompt([

                   {
                        type: "input",
                        name: "name",
                        message: "Enter the employee's name: "
                   },
                   {
                        type: "input",
                        name: "id",
                        message: "Enter the employee's ID: "
                   },
                   {
                        type: "input",
                        name: "email",
                        message: "Enter the employee's email address: "
                   },
                   {
                        type: "list",
                        name: "role",
                        message: "Select employee's role:",
                        choices: [
                             "Engineer",
                             "Intern",
                             "Manager"
                        ]
                   }
              ]);

              let response2 = ""
              // if else statement

              if (response.role === "Engineer") {
                   response2 = await inquirer.prompt([{
                        type: "input",
                        name: "github",
                        message: "Enter Employee's Github Username:",
                   }, ]);
                   //store obj and push
                   const engineer = new Engineer(response.name, response.id, response.email, response2.github);
                   teamMembers.push(engineer);

              }
              
              else if (response.role === "Intern") {
                   response2 = await inquirer.prompt([{
                        type: "input",
                        name: "school",
                        message: "Enter employee's current school:",
                   }, ]);
                   //store obj and push
                   const intern = new Intern(response.name, response.id, response.email, response2.school);
                   teamMembers.push(intern);
              } 
              
              else if (response.role === "Manager") {
                   response2 = await inquirer.prompt([{
                        type: "input",
                        name: "number",
                        message: "Enter employee's office number:",
                   }, ]);
                   //store obj and push
                   const manager = new Manager(response.name, response.id, response.email, response2.number);
                   teamMembers.push(manager);
              }
         } catch (err) {
              return console.log(err);
         }
         console.log(teamMembers)
         

         response1 = await inquirer.prompt([{
              type: "list",
              name: "finish",
              message: "Continue?: ",
              choices: [
                   "Yes",
                   "No"
              ]
         }, ]);

         // console.log(response1.choices);
         //continue running code if "yes"
    } while (response1.finish === "Yes");

function htmlRenderer(){
     if(!fs.existsSync("./output")){
         fs.mkdirSync("./output")
     }
     fs.writeFile(outputPath, render(teamMembers) , (err)=>{
     if (err) throw err;
     console.log("The file was saved!");
 })
 }

htmlRenderer();

}
prompt();
