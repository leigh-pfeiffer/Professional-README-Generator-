// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None') { return '';}
  else if (license == 'APACHE 2.0') {return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;}
  else if (license == 'BSD 3') {return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;}
  else if (license == 'GPL 3.0') {return `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;}
  else if (license == 'MIT') {return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;}
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {return '';}
  else if (license == 'APACHE 2.0') {return `https://opensource.org/licenses/Apache-2.0`;}
  else if (license == 'BSD 3') {return `https://opensource.org/licenses/BSD-3-Clause`;}
  else if (license == 'GPL 3.0') {return `https://www.gnu.org/licenses/gpl-3.0`;}
  else if (license == 'MIT') {return `https://opensource.org/licenses/MIT`;}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `[${renderLicenseBadge(data.license)}](${renderLicenseSection(data.license)})

  # ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  
  ### Installation
  
  
  ${data.installation}
  
  
  ### Usage
  
  ${data.usage}
  
  ### License
  
  This project is licensed under [${data.license}](${renderLicenseSection(data.license)})
  
  ### Contributing
  
  ${data.contribution}
  
  ### Tests
  
  
  ${data.test}
  
  
  ## Questions
  
  If you have any questions about the repo, please contact me at ${data.email}.
  
  You can find more of my work and projects at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;