console.log('Client side JavaScript code loaded.')

const url = 'http://puzzle.mead.io/puzzle'

fetch(url).then(response => {
    response.json().then(data => {
      console.log(data)
    })
  })

fetch('/weather?address=toronto').then(response => {
  response.json().then(data => {
    if (data.error) {
       console.log(data.error)
    } else {
      console.log(data.address)
      console.log(data.forecast)
      console.log(data.location)
    }
  })
})