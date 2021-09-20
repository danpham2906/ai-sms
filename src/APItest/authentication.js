var axios = require('axios')

const Axios = axios.default
var token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGljZSIsImV4cCI6MTYyNjM3MTMxOCwidXNlcklkIjoxLCJpYXQiOjE2MjYzNjc3MTh9.QWRrD7m0AA7s8kosY6RPkSpPwogiqh_V4M2PNPj63ilj43T2drvCNs8WzuTBAyo4EOGpPQcXev1r925zv3iLNQ"

async function requests() {
    try {
        const res = await Axios.post('http://128.186.151.67:8080/api/nij/ai-sms/authentication', {
            "username": "MarciaCarillo",
            "password": "4567"
        }
        )
        token = res.data.jwtToken;
    } catch (error) {
        console.log(error)
    }

    try {
        const res = await Axios.post('http://128.186.151.67:8080/api/nij/ai-sms/location/gps-data?lon=-86.9232&lat=40.45', {
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

requests()