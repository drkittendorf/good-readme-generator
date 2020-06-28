// function to generate markdown for README
function generateMarkdown(data) {
  return `
 ## Title
 ${data.name}

 ## Description<br>
 ${data.description}

 ## Table Of Contents
 [Installation](#installation)<br>
 [Usage](#usage)<br>
 [License](#license)<br>
 [Contributing](#contributing)<br>
 [Tests](#tests)<br>
 [Questions](#contact)<br>
 
 
 

 
## Installation
${data.installation}


## Usage
${data.usage}

## License
${data.licenseLevel}
 

## Contributing
${data.contributing}



## Tests 
${data.testInstructions}




## Questions
${data.githubAddress}
${data.emailAddress}

`;
}

module.exports = generateMarkdown; // What does this do?
