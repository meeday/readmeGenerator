// files and modules required for use on the index page
const inquirer = require("inquirer");
const api = require("./utils/axios")
const FS = require("fs");
const createMD = require("./utils/createMD");

// async function that awaits inquirer.prompt to run before saving users inputs into a const
// The prompt holds the questions that this application will use to generate your readme file
// questions was made an async function in order to utilise the await property later on 
async function questions() {
  try {
    const answers = await inquirer.prompt([{
        type: "input",
        message: "What is the title of your readme file?",
        name: "fileName",
      },
      {
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
        type: "checkbox",
        message: "What Technologies Have you used?",
        name: "technologies",
        choices: ["HTML", "JavaScript", "CSS", "Node", "Other"],
      },
      {
        type: "list",
        message: "What is the license of your repo?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "CC-0", "None"],
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
        type: "input",
        message: "What Test should be run?",
        name: "tests"
      },
      {
        type: "input",
        message: "Enter GitHub usernames of all contributors: ",
        name: "contributors"
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
    // const that holds the result of the api call made with axios in the axios.js file 
    const userAnswers = await api.userInfo(answers.user);
    // The full name as well as the profile picture of the user is taken from the api result and attached to the answers object  
    answers.name = userAnswers.name;
    answers.pic = userAnswers.avatar_url;
    // pass answers parameter through the createMD function and then thats put into a const for cleaner code thats easier to follow
    const markDown = createMD(answers);
    // WriteTo File function created with filename and data parameters that returns the written markdown file using file system module
    function writeToFile(fileName, data) {
      return FS.writeFileSync(fileName, data);
    };
    // Calls the WriteToFile function passing the md file and the createMD function through as parameters 
    writeToFile("GeneratedREADME.md", await markDown, )
    console.log("README successfully generated!")
    // catch used to catch any errors and console log it
  } catch (err) {
    console.log(err);
  }
}
// call the questions function to run
questions();