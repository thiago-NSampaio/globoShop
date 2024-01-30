import axios from "axios";

// Obtém os dados da api Viacep.
export function getPostalCode(postalCode) {
    return axios.get(`https://viacep.com.br/ws/${postalCode}/json`)
}