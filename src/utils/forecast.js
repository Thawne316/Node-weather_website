const request = require('postman-request')

const forecast = (lat, long, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=b99de0168e3358fd4cf9d1e83fcba527&query=' + lat + ',' + long 

request({ url, json:true }, (error,{body}) => {
    if(error){
        callback('Unable to connect to weather service!', undefined)
    } else if(body.error) {
        callback('Unable to find location', undefined)
    } else {
        callback(undefined,body.current.weather_descriptions[0]+'. Its currently '+body.current.temperature+' degrees out, but it feels like '+body.current.feelslike+' degrees. The humidity is '+body.current.humidity+'%, UV index is '+body.current.uv_index+' and visibility is '+body.current.visibility+'.')
    }  
})
}

module.exports = forecast