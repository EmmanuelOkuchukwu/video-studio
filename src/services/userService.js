import axios from 'axios';
import { AuthService } from './authService';

const user = AuthService.getUser();
const { token } = user;
const API_URL = process.env.REACT_APP_FETCH_WORDPRESS_URL;
function getAllUsers() {
    return axios.get(`${API_URL}/wp-json/wp/v2/users/?context=edit`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
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

function getUser() {}

export const UserService = {
    getAllUsers,
    getUser
}
