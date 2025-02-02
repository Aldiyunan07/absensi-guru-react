import axios from 'axios';

const BASE_URL = import.meta.env.VITE_REACT_API_URL;
const token    = localStorage.getItem('token');
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'Application/json',
        Authorization: `Bearer ${token}`,
    },
});

export const isAxiosError = axios.isAxiosError;
export default apiClient;
