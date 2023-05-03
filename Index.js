// Establishing inquirer and fs... and our SVG ls code (SVGenerate)
const inquirer = await import('inquirer');
const fs = require('fs');
const SVGenerate = require('')

// This is our array of objects used for user prompts
function prompts(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter up to three characters for the logo:',
                name: 'logotxt',
            },
            {
                type: 'input',
                message: 'Please enter a color name or hex code for the text color:',
                name: 'txtcolor',
            },
            {
                type: 'list',
                message: 'What border shape would you like for your logo?',
                choices: ['Circle', 'Ellipse', 'Square', 'Triangle'],
                name: 'shape',
            },
            {
                type: 'input',
                message: 'List a color name or hex code for the shape color:',
                name: 'shapecolor',
            },
        ])

        //Reruns if user enters > 3 characters, or none
        .then((input) => {
            if (input.text.length > 3 || input.length == "" ) {
                console.log('Must ennter up to three characthers');
                promptUser();
            } else {
                writetoFile('logo.svg', answers);
            }
        })
}
promptUser();


/* 
    Defines function to write data; goes to file using fs module
   Logs an error for the file if everything goes to $#!7.            
*/
function fileWrite(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(`Generated ${fileName}`),
    );
};


/*  
    Defines func. "init," short for "initialize." This one prompts 
    the user with the "prompts" parameter I made earlier, then 
    logs them to the console.                                        
*/
function init() {
    inquirer.prompt(prompts).then(response => {
        console.log(response);


        // Here we write the JSON string to a file.
        const data = JSON.stringify(response, null, 1);
        fileWrite('logo-params.json', data);


        /* 
            Here we reference the script which will convert the 
            JSON data into the SVG file, log it to the console,
            then, finally, we actually generate the SVG             
        */
        const svgCon = SVGenerate(JSON.parse(data));
        console.log(svgCon);
        fileWrite(`./examples/logo.svg`, svgCon);
    })

        .catch((err) => {
            console.error(err);

        });
}




init();