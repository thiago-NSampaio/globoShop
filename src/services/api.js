import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://globloshop.test/wp-json/api"
})

// Adicionando o token do usuário.
axiosInstance.interceptors.request.use(
    function (config) {
        const token = window.localStorage.token;
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    function error() {
        return Promise.reject(error);
    }
);

export const api = {
    // Inclui o endpoint passado junto com a baseURL.
    get(endpoint) {
        return axiosInstance.get(endpoint);
    },

    // Retorna o endpoint passado junto com a baseURL mais o que estiver no body da requisição do servidor.
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body)
    },
    
    delete(endpoint) {
        return axiosInstance.delete(endpoint)
    },
    
    put(endpoint, body) {
        return axiosInstance.put(endpoint, body)
    },
    login(body) {
        // Rota para logar
        return axios.post("http://globloshop.test/wp-json/jwt-auth/v1/token", body);
    },
    validateToke() {
        return axios.post("http://globloshop.test/wp-json/jwt-auth/v1/token");

    }
}