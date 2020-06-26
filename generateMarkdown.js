// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

 ## Description
 ${data.description}


 ## Table Of Contents
 
${data.description}
${data.instructions}
${data.usage}
${data.guidelines}
${data.testInstructions}

${data.licenseLevel}

${data.githubAddress}
${data.emailAddress}


  
  
`;
}

module.exports = generateMarkdown;
