function licenseChange(license){
  switch (license) {
    case "MIT":
      return "[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
    case "APACHE 2.0":
      return "[![License](https://img.shields.io/badge/License-APACHE%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License](https://img.shields.io/badge/License-GPL%203.0-purple.svg)](https://opensource.org/licenses/GPL-3.0)";
    case "BSD 3":
      return "[![License](https://img.shields.io/badge/License-BSD%203-black.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "[![License](https://img.shields.io/badge/License-None-Red.svg)]";
  }
};

function deploymentChange(deployment){
  switch (deployment) {
    case "Yes":
      return "[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)";
    case "No":
      return "[![Website cv.lbesson.qc.to](https://img.shields.io/website-up-down-green-red/http/cv.lbesson.qc.to.svg)](http://cv.lbesson.qc.to/)"
  }
}
function maintenanceChange(maintenance){
  switch (maintenance) {
    case "Yes":
      return "[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://shields.io/)";
    case "No":
      return "[![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://shields.io/)"
  }
}

function permissionChange(permission){
  switch (permission) {
    case "Allowed":
      return "[![Contributions](https://img.shields.io/badge/contributions-Allowed-green.svg)](https://shields.io/)";
    case "Not Allowed":
      return "[![Contributions](https://img.shields.io/badge/contributions-Not%20Allowed-red.svg)](https://shields.io/)"
  }
}

function createMD(answers) {
  return `
  # **${answers.title}**
 
  ${deploymentChange(answers.deployment)}  ${maintenanceChange(answers.maintenance)}  ${licenseChange(answers.license)} ${permissionChange(answers.permission)}
  
  ## __Description__
  ${answers.description}
  
  ## __Installation__
  ${answers.installation}
  
  ## __Usage__
  ${answers.usage}
  
  ## __Contributions__
  
  
  ${answers.contribution}
  

  ### Ask me
  
  [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com"/${answers.user})
  
  #### ${answers.name}, ${answers.email}

  ![alt text](${answers.pic} "Profile pic")  
  `;
}

module.exports = createMD;
