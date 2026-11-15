import axios from 'axios';

const api = axios.create({

    baseURL: 'https://6af898669bdd097c326f04a3.mockapi.io/users',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        // You can modify the request config here if needed
        const token = localStorage.getItem('token'); // Example: Get token from local storage

        if(token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

//runs after each successfull responses, or when  a response error
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response && error.response.status === 401) {

        }
        return Promise.reject(error);
    }
);

export default api;