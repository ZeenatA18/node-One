//import the greet module that is in the current folder
// const greet = require('./greet');

// console.log(greet('Xola'))


const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

const figlet = require('figlet')

let message = greet('Nooi')

let me = chalk.yellow(
    figlet.textSync( message ,{horizontalLayout:'full'})
)
console.log(me)
// const styledMessage = chalk.bgWhite.black(greet('Xola'));
// console.log(styledMessage)

// import chalk from 'chalk';
// //import the greet module that is in the current folder
// import greet from './greet.js'

// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage)