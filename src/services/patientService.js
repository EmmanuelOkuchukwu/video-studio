import axios from 'axios';

const API_URL = process.env.REACT_APP_FETCH_URL;

function getPatients() {
    return axios.get(`${API_URL}/patients`)
    .then((response) => {
        if(response.status === 200) {
            return response.data
        } else if (response.status === 404) {
            console.log('Data could not be retrieved!');
        } else if (response.status === 401) {
            console.log('Data could not be retrieved!');
        }
    })
    .catch(error => console.log(error));
}

function getOnePatient(id) {
    return axios.get(`${API_URL}/patients/${id}`)
    .then((response) => {
        if(response.status === 200) {
            return response.data
        } else if(response.status === 401) {
            console.log('Subscribers not found!');
        } else if(response.status === 404) {
            console.log('Subscribers not found!');
        }
    })
    .catch(error => console.log(error));
}

export const PatientService = {
    getPatients,
    getOnePatient
}
