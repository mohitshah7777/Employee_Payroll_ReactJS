import Axios from 'axios';
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
const TOKEN = localStorage.getItem('token') ;

class Service {
    addEmployee = (userData) => {

        return Axios.post(`/create`, userData, {
            headers: {
                'token': TOKEN
            }
        })
    }

    getEmployee = () => {
        // const TOKEN = localStorage.getItem('token') ;
        return Axios.get(`/read`, {
            headers: {
                'token': TOKEN
            }
        })
    }
}

export default Service;