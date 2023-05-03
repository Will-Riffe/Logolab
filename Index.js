// Establishing inquirer and fs... and our SVG ls code (SVGenerate)
const inquirer = require('inquirer');
const fs = require("fs");
const SVGenerate = require("./lib/SVGenerate");

// This is our array of objects used for user prompts
const questions = [
  {
    type: "input",
    message: "Please enter up to three characters for the logo:",
    name: "logotxt",
  },
  {
    type: "input",
    message: "Please enter a color name or hex code for the text color:",
    name: "txtcolor",
  },
  {
    type: "list",
    message: "What border shape would you like for your logo?",
    choices: ["Circle", "Square", "Triangle"],
    name: "shape",
  },
  {
    type: "input",
    message: "List a color name or hex code for the shape color:",
    name: "shapecolor",
  },
];

/* 
    Defines function to write data; goes to file using fs module
   Logs an error for the file if everything goes to $#!7.            
*/
function fileWrite(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`Generated ${fileName}`)
  );
}

/*  
    Defines func. "init," short for "initialize." This one prompts 
    the user with the "prompts" parameter I made earlier, then 
    logs them to the console.                                        
*/
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      console.log(response);

      // Here we write the JSON string to a file.
      const data = {
        shape: response.shape,
        shapecolor: response.shapecolor,
        textcolor: response.txtcolor,
        text: response.logotxt, // Updated to use user's input
      };
      fileWrite("logo-params.json", JSON.stringify(data, null, 1));

      /* 
            Here we reference the script which will convert the 
            JSON data into the SVG file, log it to the console,
            then, finally, we actually generate the SVG             
        */
      const svgCon = SVGenerate(data);
      console.log(svgCon);
      fileWrite(`./examples/logo.svg`, svgCon);
    })

    .catch((err) => {
      console.error(err);
    });
}

init();
