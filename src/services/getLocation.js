import axios from "axios"
const API_URL = 'https://ipinfo.io/json?token=f53f388a4598a2';
export const getUserLocation = async() => {
    try {
        let { data } = await axios.get(API_URL);
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}