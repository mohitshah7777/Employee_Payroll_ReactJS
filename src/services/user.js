import Axios from 'axios';
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

class Service{
    loginAxios = (loginData) => {
        return Axios.post('/login', loginData)
    }

    registerAxios = (registerData) => {
        return Axios.post('/register', registerData)
    }
}

export default Service;