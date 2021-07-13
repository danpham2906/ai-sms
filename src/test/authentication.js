var axios = require('axios')

const Axios = axios.default
var token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGljZSIsImV4cCI6MTYyNTM1MTYxNCwidXNlcklkIjoxLCJpYXQiOjE2MjUzNDgwMTR9.B_UTXSTNhbz-n2XB54hHtS79SiCLhooDcTvSU1JJiNqhCfChv9sDGlFjXkUemSHlZPVzFZxWnei5nDibiFoS0g"

async function requests() {
    try {
        const res = await Axios.post('http://128.186.151.67:8080/api/nij/ai-sms/location/check?userId=1', { 'Authorization': token  })
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }

    // try {
    //     const res = await Axios.post('http://128.186.151.67:8080/api/nij/ai-sms/registration', { 
    //         "username":"alice",
    //         "password":"4567",
    //         "fullName":"Alice",
    //         "gender":"female"
    //       }
    //       )
    //     console.log(res.data)
    // } catch (error) {
    //     console.log(error)
    // }

    // try {
    //     const res = await Axios.post('http://128.186.151.67:8080/api/nij/ai-sms/authentication', { 
    //         "username":"alice",
    //         "password":"4567"
    //       }
    //       )
    //     console.log(res.data)
    // } catch (error) {
    //     console.log(error)
    // }

    // try {
    //     const res = await Axios.post('https://scheduling-api.nicholasdwest.com/auth/local', { 'identifier': 'developer@strapi.io', 'password': 'Pass123*' })
    //     console.log(res.data)
    // } catch (error) {
    //     console.log(error)
    // }

    // //Adding data
    // try {
    //     const res = await Axios.post('https://scheduling-api.nicholasdwest.com/heart-rates', { 'bpm': 63, 'timestamp': 1617462647, 'human_readable': 'text' }, { headers: { Authorization: token } })
    //     console.log(res.data)
    // } catch (error) {
    //     console.log(error)
    // }
}

requests()