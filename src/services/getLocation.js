import axios from "axios"
const apiKey = 'AIzaSyD6PZyuQRcFcGpMQNZptnHLaE31CaIEkTM'

export const getUserLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( async(position) => {
            console.log(position)
            let response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=false"+"&key="+apiKey)
            console.log(response)
        })
    }
}