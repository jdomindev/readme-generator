// // WHEN I am prompted for information about my application repository
// // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// // // WHEN I enter my project title
// // // THEN this is displayed as the title of the README
// // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// // WHEN I enter my GitHub username
// // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// // WHEN I enter my email address
// // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// // WHEN I click on the links in the Table of Contents
// // THEN I am taken to the corresponding section of the README
// Need to create video showing functionality
// Need to generate a sample readme to submit
// Fill in README for this project
// Submit Repo Link, video, and sample README

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// switch case for each license
function renderLicenseBadge(data) {
  if (data.license === "") {
    return "";
  } else
    switch (data.license) {
      case "MIT":
        return `
      - [![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://opensource.org/licenses/MIT)`;
      case "Creative Commons":
        return `- [![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`;
      case "GNU":
        return `- [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-lightgrey.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      case "BSD":
        return `- [![License](https://img.shields.io/badge/License-BSD_3--Clause-lightgrey.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      case "None":
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "") {
    return "";
  } else
    return `- [License](#license)
- [Badges](#badges)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === "") {
    return "";
  } else 
    switch (data.license) {
    case "MIT":
      return `- Copyright 2022 ${data.username}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    case "Creative Commons":
      return `- ${data.title} (c) by 2022 ${data.username}

      ${data.title} is licensed under a
      Creative Commons Attribution 4.0 International License.
      
      You should have received a copy of the license along with this
      work. If not, see <http://creativecommons.org/licenses/by/4.0/>.`;
    case "GNU":
      return `- Copyright (C) 2022 ${data.username}

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
  
      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
    case "BSD":
      return `- Copyright 2022 ${data.username}

      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
  }
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
${renderLicenseLink(data)}
- [Features](#features)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
## Installation
- ${data.installation}
## Usage
- [Github Repo](https://github.com/${data.username}/${data.title})
- ${data.usage}
## Credits
- ${data.credits}
## License
${renderLicenseSection(data)}
## Badges 
${renderLicenseBadge(data)}
## Features
- ${data.features}
## How to Contribute
- ${data.contribute}
## Tests
- ${data.tests}
## Questions
- Github: [jdomindev](https://github.com/${data.username})
- Any questions can be answered by emailing me at: [${data.email}](mailto:${data.email}?subject=Question)
`;
}

module.exports = generateMarkdown;
