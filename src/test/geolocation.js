var axios = require('axios')

const Axios = axios.default
var token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGljZSIsImV4cCI6MTYyNjM3MTMxOCwidXNlcklkIjoxLCJpYXQiOjE2MjYzNjc3MTh9.QWRrD7m0AA7s8kosY6RPkSpPwogiqh_V4M2PNPj63ilj43T2drvCNs8WzuTBAyo4EOGpPQcXev1r925zv3iLNQ"

async function requests() {
    // try {
    //     const res = await Axios.post('http://128.186.151.67:8080/api/nij/ai-sms/authentication', {
    //         "username": "MarciaCarillo",
    //         "password": "4567"
    //     }
    //     )
    //     // console.log(res.data.jwtToken)
    //     token = res.data.jwtToken;
    // } catch (error) {
    //     console.log(error)
    // }

    // try {
    //     // console.log(token)
    //     const res = await Axios.post('http://128.186.151.67:8080/api/nij/ai-sms/location/gps-data?lon=-86.9232&lat=40.45', {
    //     }, {
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })
    //     console.log(res.data)
    // } catch (error) {
    //     console.log(error)
    // }

    // try {
    //     const res = await Axios.get('http://128.186.151.67:8080/api/nij/ai-sms/user-info/all', { 'Authorization': token  })
    //     console.log(res)
    // } catch (error) {
    //     console.log(error)
    // }

    try {
        const res = await Axios.get('http://128.186.151.67:8080/api/nij/ai-sms/location/violation-check?gpslogId=16', { 'Authorization': token  })
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }

    // try {
    //     const res = await Axios.get('http://128.186.151.67:8080/api/nij/ai-sms/userids', { 'Authorization': token  })
    //     console.log(res.data)
    // } catch (error) {
    //     console.log(error)
    // }

    // try {
    //     const res = await Axios.post('http://128.186.151.67:8080/api/nij/ai-sms/location/check?userId=1', { 'Authorization': token  })
    //     console.log(res.data)
    // } catch (error) {
    //     console.log(error)
    // }

    // try {
    //     const res = await Axios.post('http://128.186.151.67:8080/api/nij/ai-sms/registration', { 
    //         "username":"TomMullaney",
    //         "password":"4567",
    //         "fullName":"Tom Mullaney",
    //         "gender":"male"
    //       })
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
}

requests()