const chalk = require('chalk');
const rl = require('readline-sync');

var nombre = rl.question("como te llamas?")

console.log(chalk.blue("Hola"), (chalk.red(nombre)));