// // WHEN I am prompted for information about my application repository
// // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// // // WHEN I enter my project title
// // // THEN this is displayed as the title of the README
// // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// switch case for each license
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `![License](https://img.shields.io/badge/license-MIT-lightgrey)`;
    case "Creative Commons":
      return `![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)`;
    case "GNU":
      return `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-lightgrey.svg)`;
    case "BSD":
      return `![License](https://img.shields.io/badge/License-BSD_3--Clause-lightgrey.svg)]`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `https://opensource.org/licenses/MIT`;
    case "Creative Commons":
      return `https://creativecommons.org/licenses/by/4.0/`;
    case "GNU":
      return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
    case "BSD":
      return `https://opensource.org/licenses/BSD-3-Clause`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `The license I have chosen for this application is the ${license} license`
  } else
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
- ${data.description}
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
- [Github Repo](https://github.com/${data.username}/${data.title})
- ${data.usage}
## Credits
- ${data.credits}
## License
- ${renderLicenseSection(data.license)}
## Badges 
- ${renderLicenseBadge(data.license)}
- ${renderLicenseLink(data.license)}
## Features
- ${data.features}
## How to Contribute
- ${data.contribute}
## Tests
- ${data.tests}
## Questions
- [Github jdomindev](https://github.com/${data.username})
- Any questions can be answered by emailing me at ${data.email}
`;
}

module.exports = generateMarkdown;
