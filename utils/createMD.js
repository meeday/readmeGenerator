// Switch function used in order to change the badge used in the read me file based on the license the user selects 
function licenseChange(license) {
  switch (license) {
    case "MIT":
      return "[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-APACHE%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License](https://img.shields.io/badge/License-GPL%203.0-purple.svg)](https://opensource.org/licenses/GPL-3.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203-black.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "CC-0":
      return "[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)";
    case "None":
      return "[![License](https://img.shields.io/badge/License-None-Red.svg)](http://shields.io/)";
  }
};

// This Switch changes the badge based on whether the user states that the application is deployed or not
function deploymentChange(deployment) {
  switch (deployment) {
    case "Yes":
      return "[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)";
    case "No":
      return "[![Website cv.lbesson.qc.to](https://img.shields.io/website-up-down-green-red/http/cv.lbesson.qc.to.svg)](http://cv.lbesson.qc.to/)"
  }
}

// This Switch changes the badge based on whether the user states that the application is maintained or not
function maintenanceChange(maintenance) {
  switch (maintenance) {
    case "Yes":
      return "[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://shields.io/)";
    case "No":
      return "[![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://shields.io/)"
  }
}

// This Switch changes the badge based on whether the user states that the contribution to their repo is allowed or not
function permissionChange(permission) {
  switch (permission) {
    case "Allowed":
      return "[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)";
    case "Not Allowed":
      return "[![Contributions](https://img.shields.io/badge/contributions-Not%20Allowed-red.svg)](https://shields.io/)"
  }
}
// technologies function uses a for loop to create different badges based on the technologies user selected and feeds it into the tech string variable
 function technologies(arr) {
   let tech = "";
   for(i = 0; i < arr.length; i++) {
   tech += `[![made-with-tech](https://img.shields.io/badge/Made%20with-${arr[i]}-1f425f.svg)](https://shields.io/)\n `;
   }
  return tech;
 }

// create MD function takes the answers from the prompts and returns the content of the readme file in markdown syntax
function createMD(answers) {
  const Techbadges = technologies(answers.technologies);
  return `
  # **${answers.fileName}**

  ## Name of Repo: ${answers.title}
  ${Techbadges}
  ${deploymentChange(answers.deployment)} ${maintenanceChange(answers.maintenance)}
  [![GitHub issues](https://img.shields.io/github/issues/${answers.user}/${answers.title}.svg)](https://GitHub.com/${answers.user}/${answers.title}/issues/)\n
  [![GitHub followers](https://img.shields.io/github/followers/${answers.user}.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/${answers.user}?tab=followers)
  [![GitHub watchers](https://img.shields.io/github/watchers/${answers.user}/${answers.title}.svg?style=social&label=Watch&maxAge=2592000)](https://GitHub.com/${answers.user}/${answers.title}/watchers/)
  [![GitHub stars](https://img.shields.io/github/stars/${answers.user}/${answers.title}.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/${answers.user}/${answers.title}/stargazers/)
  [![GitHub forks](https://img.shields.io/github/forks/${answers.user}/${answers.title}.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/${answers.user}/${answers.title}/network/)
  ![Tweeting](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)

  ## __Description__
  ${answers.description}
  
  ## __Table of Contents__
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
    *   [Github Profile Picture](#githubprofile)
    *   [Email](#email)

  ## __Installation__
  ${answers.installation}
  
  ## __Usage__
  ${answers.usage}
  
  ## __License__
  ${licenseChange(answers.license)} 
  
  ## __Contributions__
  ${permissionChange(answers.permission)}
  - Current Contributors: ${answers.contributors}
  - ${answers.contribution}
  
  ## __Tests__
  ${answers.tests}

  ## __Questions__

  [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com"/${answers.user})

 ${answers.name}:    ${answers.email}  
 ![alt text](${answers.pic} "Profile pic")     
  `;
}
// createMD function exported for use in the index.js file
module.exports = createMD;