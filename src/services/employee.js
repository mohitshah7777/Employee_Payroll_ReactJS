import Axios from 'axios';
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

class Service {
    addEmployee = (userData) => {
        const TOKEN = localStorage.getItem('token') ;
        return Axios.post(`/create`, userData, {
            headers: {
                'token': TOKEN
            }
        })
    }
}

export default Service;