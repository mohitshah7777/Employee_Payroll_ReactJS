import Axios from 'axios';
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export const loginAxios = (loginData) => {
    Axios.post('/login', loginData)
        .then((res) => {
            alert(res.data.message)
            localStorage.setItem('token', res.data.token)
        }).catch((error) => {
            alert(error)
        })
}

export const registerAxios = (registerData) => {
    Axios.post('/register', registerData)
        .then((res) => {
            alert(res.data.message)
        }).catch((error) => {
            alert(error)
        })
}
