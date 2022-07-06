import axios from 'axios';

const api = axios.create({
    baseURL: ' https://pokeapi.co/api/v2/pokemon',
    params: {
        limit: 18
    },
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

export const apiType = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/type/3',
    params: {
        limit: 18
    },
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
})
export default api;
