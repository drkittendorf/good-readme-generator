const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user

// const questions = [

//     // "What is your project title?" **title of ReadMe
//     // "What is the description of your project?" #Description
//     // "Please enter your installation instructions" #Installation Instructions
//     // "Enter any usage information" #Usage
//     // "What are your guidelines for contributing to this project?" #Contributing
//     // "Do you have test instructions?" #Tests
//     // "What level of license? - https://choosealicense.com/licenses/" https://gist.github.com/artem-solovev/e1602722f84835f35daef4dfb3df5500#license
//     // "What is your github username?" enter under ##Questions
//     // "What is your email address?" enter under ##Questions
// ];
// function to write README file

function writeToFile(fileName, data) {

}

// function to initialize program


function init() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your project title?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the description of your project?",
            name: "description",
        },
        {
            type: "input",
            message: "Please enter your installation instructions:",
            name: "instructions",
        },
        {
            type: "input",
            message: 'Enter any usage information',
            name: "usage",
        },
        {
            type: "input",
            message: "What are your guidelines for contributing to this project?",
            name: "guideLines",
        },
        {
            type: "input",
            message: "Do you have test instructions?",
            name: "testInstructions",
        },
        {
            type: "list",
            message: "What level of license?",
            name: "licenseLevel",
            choices: [
                "HTML",
                "CSS",
                "JavaScript",
                "MySQL"
            ]
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "githubAddress",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "emailAddress",
        }
    ])
        .then(function (data) {
            const fileName = data.name.toUpperCase().split(' ').join('') + ".md";

            fs.appendFile(fileName, JSON.stringify(data, null, '\t'), function (err) {

                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Its run");

                }

            });
        });

}

// function call to initialize program
init();
