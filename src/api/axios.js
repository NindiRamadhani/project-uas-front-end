import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api',          // ← relatif, akan diproxy
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default axiosInstance;