// function to generate markdown for README
function generateMarkdown(data) {
  return `
 #Title 
 ${data.name}

 ## Description
 ${data.description}

 ## Table Of Contents
 [Installation](#installation)
 [Usage](#usage)
 [License](#license)
 [Contributing](#contributing)
 [Tests](#tests)
 [Questions](#contact)
 
 
 

 
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
