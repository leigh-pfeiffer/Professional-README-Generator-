// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None') { return ''; }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') { return ''; }

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