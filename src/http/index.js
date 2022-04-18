import axios from "axios";

// export const API_URL = `http://localhost:5091/api`;
export const API_URL = `https://aqueous-fjord-78834.herokuapp.com/`;

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
});

export default $api;