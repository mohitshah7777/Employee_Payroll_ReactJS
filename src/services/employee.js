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
        return Axios.get(`/read`, {
            headers: {
                'token': TOKEN
            }
        })
    }
    
    updateEmployee = (userData) => {
        return Axios.put('/update/'+userData._id, userData, {
            headers: {
                'token': TOKEN
            }
        })
    }
}

export default Service;