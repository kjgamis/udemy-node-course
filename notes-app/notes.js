const chalk = require('chalk')
const fs = require('fs') 

const getNotes = (notes) => {
  return 'Your notes... ' + notes
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

// loadNotes reads the json file
const loadNotes = () => {
  // error handling: read JSON file if it exists, if not then return empty array which is the value of the 'notes' array above. The array is stringified and added to notes.json
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch(e) {
    return []
  }
}

// Add Note
const addNote = (title, body) => {
  // json file is added to 'notes' array
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => {
    // if title already exists, duplicatedNotes will store the duplicate
    return note.title === title
  })

  // if there are no duplicated, save the note as normal
  let message
  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    })
    saveNotes(notes)
    message = chalk.green.inverse('New note added!')
  } else {
    message = chalk.red.inverse('Note title taken!')
  }
  console.log(message)
}

// Remove Note
const removeNote = (title) => {
  const notes = loadNotes()
  const newNotes = notes.filter((note) => {
    return note.title !== title
  })
  // if both arrays have the same lenght, no note was removed.
  // if arrays have different lenghts, a note is filtered out
  let message
  if (notes.length > newNotes.length) {
    saveNotes(newNotes)
    message = chalk.green.inverse('Note Removed!')
  } else {
    message = chalk.red.inverse('No note found!')
  } 
  console.log(message)
}

module.exports = {
  getNotes,
  addNote,
  removeNote
}