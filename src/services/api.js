import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bethehero.herokuapp.com',
})

export default api;