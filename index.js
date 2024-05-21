const { Shapes, Circle, Square, Triangle } = require("./lib/shapes");
const fileSystem = require("fs");

import("inquirer").then((inquirer) => {
  inquirer = inquirer.default;
  const questions = [
    {
      type: "list",
      name: "shape",
      message: "What shape should the new logo be?",
      choices: ["Circle", "Square", "Triangle"],
    },
    {
      type: "input",
      name: "color",
      message: "What color should the shape be?",
    },
    {
      type: "input",
      name: "text",
      message: "What text should appear on the logo?",
      validate: function (response) {
        if (response.length === 3) {
          return true;
        } else if (response.length !== 3) {
          return "Only 3 letter answers will be accepted.";
        }
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "What color should the text of the logo be?",
    },
  ];

  inquirer.prompt(questions).then((response) => {
    let chosenShape;
    if (response.shape === "Circle") {
      chosenShape = new Circle(
        response.color,
        response.text,
        response.textColor
      );
    } else if (response.shape === "Square") {
      chosenShape = new Square(
        response.color,
        response.text,
        response.textColor
      );
    } else if (response.shape === "Triangle") {
      chosenShape = new Triangle(
        response.color,
        response.text,
        response.textColor
      );
    }

    const newLogo = `
${chosenShape.renderShape()}
            `;
    fileSystem.writeFile("logo.svg", newLogo, (err) => {
      if (err) throw err;
      console.log("Generated logo.svg");
      console.log("LOGO-MATIC!");
    });
  });
});
