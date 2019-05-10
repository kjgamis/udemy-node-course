const chalk = require('chalk')

const getNotes = require('./notes.js')
console.log(getNotes('Hello'))

console.log(chalk.green.bold.inverse('SUCCESS!'))