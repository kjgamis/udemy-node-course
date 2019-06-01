const https = require('https')
const url = `https://api.darksky.net/forecast/53c4d3a3640305700d173ff2a37b3b49/44.1545,-75.7088?units=si`

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const parsedData = JSON.parse(data)
        console.log(parsedData)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()