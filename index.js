const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const path = require("path");
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
//   {
//     type: "input",
//     message: "What is the description of your project?",
//     name: "description",
//   },
//   {
//     type: "input",
//     message: "Please enter your installation instructions:",
//     name: "installation",
//   },
//   {
//     type: "input",
//     message: "Enter any usage information",
//     name: "usage",
//   },
//   {
//     type: "input",
//     message: "What are your guidelines for contributing to this project?",
//     name: "contributing",
//   },
//   {
//     type: "input",
//     message: "Do you have test instructions?",
//     name: "testInstructions",
//   },
  {
    type: "list",
    message: "What level of license?",
    name: "licenseLevel",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "GNU FDL v1.3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "Unlicense",
    ],
  },
//   {
//     type: "input",
//     message: "What is your github username?",
//     name: "githubAddress",
//   },
//   {
//     type: "input",
//     message: "What is your email address?",
//     name: "emailAddress",
//   },
];

function licenseBadge(data) {
  switch (data.licenseLevel) {
    case "GNU AGPLv3":
      data.licenseLevel +=` [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      return data;

    case "GNU GPLv3":
      data.licenseLevel += ` [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      return data;

    case "GNU LGPLv3":
     data.licenseLevel +=` [![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
      return data;

    case "GNU FDL v1.3":
      data.licenseLevel +=` [![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)`;
      return data;

    case "Mozilla Public License 2.0":
      data.licenseLevel +=` [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      return data;

    case "Apache License 2.0":
      data.licenseLevel +=` [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      return data;

    case "MIT License":
      data.licenseLevel +=` [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      return data;

    case "Boost Software License 1.0":
      data.licenseLevel +=` [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      return data;

    case "Unlicense":
      data.licenseLevel +=` [![License:](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      return data;
    
    default:
      return ` No license selected, default exclusive copyright in place`;
  }
}

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then(function (data) {
    //   console.log("Here's the MD so far ... \n", data);

      const licensedJSON = licenseBadge(data);

    //   console.log(" MD after ... \n", licensedJSON);
      writeToFile("READM3.md", generateMarkdown(licensedJSON));
    })

    .catch((error) => {
      console.error("ERROR CAUGHT");
    });
}

// function call to initialize program
init();
