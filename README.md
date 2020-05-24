# readmeGenerator
week 9 assignment

# ReadMe Generator

## Summary
This application is a node application that asks the user a series of questions and creates a readme.md file based on the users answers. The file is then saved to the working directory. It also requests the users github username inorder to make an api call to the github api and get additional data about the user to display that on the generated readme file.

## Usage
The package.json file contains a npm start script that runs node index.js so the user only has to enter npm start into a terminal in order to run the app. The user will then be presented with a series of prompts that the user is required to provide a reply for. When the user finishes the prompts the readme.md file is created and success message is logged on the console. if there are any errors that the app catches then the error will be logged to the console.


## Technologies
The app utilises various npm modules in order to work. The user might be required to install these npm modules on their device in order for the app to work. The modules are as follows:
- fs ( file system) : needed to write the readme file 
- inquirer : used to create the questions that the user is required to provide answers to. Specifically inquirer.prompt
- axios : used to make the api request to the github api 

The javaScript utilises the ES6 features like async functions, template literals etc. Switch functions were used to change badges based on user inputs. The entire app is spread across three javaScript files so module.export and node require were used to ensure that each file had access to functions and methods they needed.

ScreenCastify chrome extension was used to record a demo of the app. A gif is provided in the assets folder as well as a more detailed video of the demo.
https://hnet.com/video-to-gif/ was used to convert the video demo into two gif files

![Alt Text](Assets/App-Demo.gif)
![Alt Text](Assets/App-Demo2.gif)

## Links
github repo link : https://github.com/meeday/readmeGenerator

