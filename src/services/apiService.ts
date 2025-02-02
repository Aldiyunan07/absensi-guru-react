import axios from 'axios';

const BASE_URL = import.meta.env.VITE_REACT_API_URL;
const token    = localStorage.getItem('token');
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization : `Bearer ${token}`,
        Accept: 'Application/json',
    },
});

export const isAxiosError = axios.isAxiosError;
export default apiClient;
