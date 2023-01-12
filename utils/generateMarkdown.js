function renderLicenseBadge(license) {
  return `![GitHub license](https://shields.io/badge/license-${license})`;
}

function renderLicenseLink(license) {
  return `[${license}](https://opensource.org/licenses/${license})`;
}

function renderLicenseSection(license) {
  return `[${renderLicenseBadge(license)}](https://opensource.org/licenses/${license})`;
}

const generateMarkdown = data => {
  return `# ${data.projectTitle}

${renderLicenseSection(data.license)}

  ## Description
    ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Test](#test)

  * [Questions](#questions)

  ## Installation
    ${data.install}

  ## Usage 
    ${data.usage}

  ## License
  This project is licensed under the ${renderLicenseLink(data.license)} license. 

  // [![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})

  ## Contributing
    ${data.contributing}

  ## Test
    ${data.test}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.gitHub}](https://github.com/${data.gitHub}.

`
}
module.exports = generateMarkdown;