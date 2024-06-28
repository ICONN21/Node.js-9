// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
}

const badges = {
    'MIT': '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPLv3': '![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache 2.0': '![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-green.svg)',
    'BSD 3-Clause': '![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)',
    'MPL 2.0': '![MPL 2.0 License](https://img.shields.io/badge/License-MPL%202.0-red.svg)'
};

return badges[license] || '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
}

const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'MPL 2.0': 'https://opensource.org/licenses/MPL-2.0'
};

return licenseLinks[license] || '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
}

const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'MPL 2.0': 'https://opensource.org/licenses/MPL-2.0'
};

if (!licenseLinks[license]) {
    return '';
}

return `
## License

This project is licensed under the [${license} License](${licenseLinks[license]}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the repo, open an issue or contact [${data.github}](https://github.com/${data.github}) directly at ${data.email}.
`;
}

// Example usage:
const data = {
    title: 'Project Title',
    description: 'Project Description',
    installation: 'Installation Instructions',
    usage: 'Usage Information',
    license: 'MIT',
    contributing: 'Contribution Guidelines',
    tests: 'Test Instructions',
    github: 'your-github-username',
    email: 'your-email@example.com'
};


module.exports = generateMarkdown;
