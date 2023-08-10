// imports/requires dependancies 
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

// questions to be prompted to user for logo creation
const questions = [
    {
        type: "list",
        message: "What shape is your logo?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
    },
    {
        type: "input",
        message: "What color is your logo? (Color keyword or hexadecimal number)",
        name: "shapeColor",
    },
    {
        type: "input",
        message: "What three letters is the text for your logo?",
        name: "text",
    },
    {
        type: "input",
        message: "What color is the text for your logo? (Color keyword or hexadecimal number)",
        name: "textColor",
    },
]

// write file function and logs when svg file is generated
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.error(err);
        } else {
            console.log("Generated logo.svg");
        }
    });
};

// function that takes the user response and selected the users selected shape
function userShape(response) {
    if (response.shape === "Triangle") {
        let userChoice = new Triangle (response.shapeColor, response.text, response.textColor)
        return userChoice.render()
    }

    if (response.shape === "Square") {
        let userChoice = new Square (response.shapeColor, response.text, response.textColor)
        return userChoice.render()
    }

    if (response.shape === "Circle") {
        let userChoice = new Circle (response.shapeColor, response.text, response.textColor)
        return userChoice.render()
    }
};

// function that creates logo and uses the writeToFile function to write the svg file
function createLogo(response) {
    const logo = userShape(response);
    writeToFile("./examples/logo.svg", logo);
}

// initialize function that takes the users input to generate the svg logo
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log("Generating...");
            createLogo({ ...answers });
        })
}

init();