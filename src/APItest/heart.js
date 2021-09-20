var axios = require('axios')

const Axios = axios.default
var token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZDIzOTVjN2Q4NmE5MGFmMzA4OTk3MiIsImlhdCI6MTYyMzQxNjQ0OCwiZXhwIjoxNjI2MDA4NDQ4fQ.vuu1eDi98zNmFb-BuKKs0nGOyV0iqSm7wvFs7WSaWFg"

async function requests() {
    //Getting data
    try {
        const res = await Axios.get('https://scheduling-api.nicholasdwest.com/heart-rates', { headers: { Authorization: token } })
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

requests()