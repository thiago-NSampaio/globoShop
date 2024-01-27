import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
})

export const api = {
    // Inclui o endpoint passado junto com a baseURL.
    get(endpoint) {
        return axiosInstance.get(endpoint);
    },

    // Retorna o endpoint passado junto com a baseURL mais o que estiver no body da requisição do servidor.
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body)
    }
}