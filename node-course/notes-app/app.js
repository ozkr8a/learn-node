const getNotes = require('./notes');
const chalk = require('chalk');

const message = getNotes();

console.log(message);

console.log(chalk.bold.inverse.red("Error!"));

