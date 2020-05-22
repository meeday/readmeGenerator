const inquirer = require("inquirer");
const api = require("./utils/axios")
const FS = require("fs");
const createMD = require("./utils/createMD");

async function questions() {
  try {
    const answers = await inquirer.prompt([{
        type: "input",
        message: "What is the name of your repo?",
        name: "title",
      },
      {
        type: "input",
        message: "provide a short description of your repo",
        name: "description",
      },
      {
        type: "input",
        message: "provide Installation instructions",
        name: "installation",
      },
      {
        type: "input",
        message: "How do you use your app?",
        name: "usage",
      },
      {
        type: "list",
        message: "What is the license of your repo?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      },
      {
        type: "list",
        message: "Has the site been deployed?",
        name: "deployment",
        choices: ["Yes", "No"],
      },
      {
        type: "list",
        message: "Is the site maintained?",
        name: "maintenance",
        choices: ["Yes", "No"],
      },
      {
        type: "list",
        message: "Are contributions allowed?",
        name: "permission",
        choices: ["Allowed", "Not Allowed"],
      },
      {
        type: "input",
        message: "How can someone contribute to your repo?",
        name: "contribution",
      },
      {
        type: "input",
        message: "what is your github username?",
        name: "user",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
    ]);
    
    const userAnswers = await api.userInfo(answers.user);
    // console.log(userAnswer)
    answers.name = userAnswers.name;
    answers.pic = userAnswers.avatar_url;
    console.log(answers.pic);
    const markDown = createMD(answers);
    function writeToFile(fileName, data) {
      return FS.writeFileSync(fileName, data);
  };
    
    writeToFile("GeneratedREADME.md", await markDown,)
      console.log("README successfully generated!")
    
  } catch (err) {
    console.log(err);
  }
}
questions();