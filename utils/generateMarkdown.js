const generateMarkdown = data => {
  return `# ${data.projectTitle}

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
  [![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})

  ## Contributing
    ${data.contributing}

  ## Test
    ${data.test}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.gitHub}](https://github.com/${data.gitHub}.

`
}
module.exports = generateMarkdown;