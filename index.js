const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
// array of questions for user
// "What is your project title?" **title of ReadMe
// "What is the description of your project?" #Description
// "Please enter your installation instructions" #Installation Instructions
// "Enter any usage information" #Usage
// "What are your guidelines for contributing to this project?" #Contributing
// "Do you have test instructions?" #Tests
// "What level of license? - https://choosealicense.com/licenses/" https://gist.github.com/artem-solovev/e1602722f84835f35daef4dfb3df5500#license
// "What is your github username?" enter under ##Questions
// "What is your email address?" enter under ##Questions
const questions = [
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
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU GPLv3",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "MIT License",
            "Boost Software License 1.0",
            "The Unlicense",
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
]

//function to write README file
function writeToFile() {
    fs.appendeFile(generateMarkdown(data), function (err) {

        if (err) {
            console.log("There was an error writing the file");
        } else {
            console.log("File has been written")
        }
    });
};


// function to initialize program


function init() {
    inquirer.prompt(questions)
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
        }).then(function writeToFile() {
            if (err) {
                console.log("Something went wrong");
            } else {
                console.log("Its done");
            }
        })
        .catch(error => {
            console.error("rejected function");
        });

};

// function call to initialize program
init();
