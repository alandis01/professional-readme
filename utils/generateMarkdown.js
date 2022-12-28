const generateMarkdown = data => {
  return `# ${data.title}

  ## Description
    ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Tests](#tests)
  - [License](#license)
  - [Username](#username)

  ## Installation
    ${data.installation}

  ## Tests
    ${data.test}

  ## License 
[![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})
    
  ## Username
    ${data.username}
`
}
module.exports = generateMarkdown;