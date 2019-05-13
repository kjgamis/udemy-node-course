const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            // demand option = true makes it required
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    } 
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Removing a note!')
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading a note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'Show list of notes',
    handler() {
        console.log('List of notes!!')
    }
})



// add, remove, read, list

// console.log(yargs.argv)
yargs.parse()