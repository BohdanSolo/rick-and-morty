import axios from "axios";


export const BASE_URL = 'https://rickandmortyapi.com/api'
export const ALL_CHARACTERS_URL = `${BASE_URL}/character`

export const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})