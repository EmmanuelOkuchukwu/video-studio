import axios from 'axios';

const API_URL = process.env.REACT_APP_FETCH_WORDPRESS_URL;
function onSignin(formData) {
    return axios.post(`${API_URL}/wp-json/jwt-auth/v1/token`, formData, {
        headers: {
            'content-type': 'application/json'
        }
    })
    .then((response) => {
        if(response.status === 200) {
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            return response.data;
        } else if(response.status === 403) {
            console.log('Data could not be be found!');
        }
    })
    .catch(error => console.log(error));
}

function onSignout() {
    localStorage.clear();
}

function getUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

export const AuthService = {
    onSignin,
    onSignout,
    getUser
}
