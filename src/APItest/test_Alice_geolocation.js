var axios = require('axios')

const Axios = axios.default
var React = require('react')
var token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGljZSIsImV4cCI6MTYyNjM3MTMxOCwidXNlcklkIjoxLCJpYXQiOjE2MjYzNjc3MTh9.QWRrD7m0AA7s8kosY6RPkSpPwogiqh_V4M2PNPj63ilj43T2drvCNs8WzuTBAyo4EOGpPQcXev1r925zv3iLNQ"

export const test_Alice_geolocation = ({ children }) => {
    async function requests() {
        try {
            const res = await Axios.post('http://128.186.151.67:8080/api/nij/ai-sms/authentication', {
                "username": "alice",
                "password": "4567"
            }
            )
            token = res.data.jwtToken;
        } catch (error) {
            console.log(error)
        }

        try {
            const res = await Axios.post('http://128.186.151.67:8080/api/nij/ai-sms/location/gps-data?lon=-86.90&lat=40.45', {
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

    async function requests1() {
        try {
            const res = await Axios.post('http://128.186.151.67:8080/api/nij/ai-sms/authentication', {
                "username": "alice",
                "password": "4567"
            }
            )
            token = res.data.jwtToken;
        } catch (error) {
            console.log(error)
        }

        try {
            const res = await Axios.post('http://128.186.151.67:8080/api/nij/ai-sms/location/gps-data?lon=-86.89&lat=40.46', {
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

    React.useEffect(() => {
        getParticipantAPI();

        const intervalId = setInterval(() => {
            console.log("request");
            requests();
        }, 2000);

        const intervalId1 = setInterval(() => {
            console.log("request 1");
            requests1();
        }, 2000);
    }, []);
}

test_Alice_geolocation()