const request = require('request')

const forecast = (long, lat, callback) => {
    const url = `https://api.darksky.net/forecast/53c4d3a3640305700d173ff2a37b3b49/${lat},${long}?units=si`

    request({ url, json:true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const { temperature, precipProbability } = body.currently
            const { summary, precipType, temperatureHigh, temperatureLow, icon } = body.daily.data[0]
            callback(undefined, `${summary} It is currently ${temperature} degrees out. The high today is ${temperatureHigh}deg and a low of ${temperatureLow}deg. There is a ${precipProbability*100}% chance of ${precipType}.`)
        }
    })
}

module.exports = forecast