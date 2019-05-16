const request = require('request')

const url = 'https://api.darksky.net/forecast/53c4d3a3640305700d173ff2a37b3b49/37.8267,-122.4233'

request({
    url,
    json: true
}, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.currently)
    // console.log(response.body.currently)

    const { temperature, precipProbability, precipType } = response.body.currently
    console.log(`It is currently ${temperature} degrees out. There is a ${precipProbability*100}% of ${precipType}.`)
})