const fs = require('fs')

const getNotes = (notes) => {
  return 'Your notes... ' + notes
}

const addNote = (title, body) => {
  // json file is added to 'notes' array
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => {
    // if title already exists, duplicatedNotes will store the duplicate
    return note.title === title
  })

  // if there are no duplicated, save the note as normal
  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    })
    saveNotes(notes)
    console.log('New note added!')
  } else {
    console.log('Note title taken!')
  }
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

module.exports = {
  getNotes,
  addNote
}