const inquirer = require('inquirer');
const fs = require('fs');



const prompts = [
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
        message: 'What border shape would you like for your logo?'
        choices: ['Square', 'Circle', 'Triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'List a color name or hex code for the border shape color:',
        name: 'bordershapecolor',
    },
    {
        type: 'list',
        message: 'What inner shape would you like for your logo?'
        choices: ['Square', 'Circle', 'Triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'List a color name or hex code for the inner shape color:',
        name: 'innershapecolor',
    },
];