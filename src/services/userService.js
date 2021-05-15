import axios from 'axios';
import { AuthHeader } from '../config/AuthHeader';

const API_URL = process.env.REACT_APP_FETCH_WORDPRESS_URL;
function getAllUsers() {
    return axios.get(`${API_URL}/wp-json/wp/v2/users/?context=edit`, {
        headers: AuthHeader()
    })
    .then((response) => {
        if(response.status === 200) {
            return response.data;
        } else if(response.status === 404) {
            console.log('Data could not be be found!');
        }
    })
    .catch(error => console.log(error));
}

function getUser() {
    return axios.get(`${API_URL}/wp-json/wp/v2/users/me/?context=edit`, {
        headers: AuthHeader()
    })
    .then((response) => {
        if(response.status === 200) {
            return response.data;
        } else if(response.status === 404) {
            console.log('Data could not be be found!');
        }
    })
    .catch(error => console.log(error));
}

export const UserService = {
    getAllUsers,
    getUser
}
