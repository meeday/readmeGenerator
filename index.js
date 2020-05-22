const inquirer = require("inquirer");
const axios = require("./utils/axios")
const FS = require("fs");
const createMD = require("./utils/createMD");

    async function questions() {
      try{
        const answers = await inquirer.prompt([
          {
            type:"input",
            message: "What is the name of your repo?",
            name:"title",
          },
          {
            type:"input",
            message: "provide a short description of your repo",
            name:"description",
          },
          {
            type:"input",
            message: "provide Installation instructions",
            name:"installation",
          },
          {
            type:"input",
            message: "How do you use your app?",
            name:"usage",
          },
          {
          type: "list",
          message: "What is the license of your repo?",
          name: "license",
          choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
          },
          {
            type:"input",
            message: "How can someone contribute to your repo?",
            name:"contribution",
          },
          {
            type:"input",
            message: "what is your github username?",
            name:"user",
          },
          {
            type:"input",
            message: "What is your email address?",
            name:"email",
          },
        ]);
        console.log(answers);
        const user = await axios.userInfo(answers.user);
        answers.email = user.email;
        const markDown = createMD(answers);
        FS.writeFile("GeneratedREADME.md", markDown, function(){
          console.log("README successfully generated!")
        })
      } catch (err) {
        console.log(err);
      }
    }
questions();
    