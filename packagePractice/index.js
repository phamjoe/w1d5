var chalk = require("chalk");

var message = chalk.red.bgWhite("Hello ") + chalk.yellow("World");
console.log(message);