import axios from "axios";


export const baseURL = 'https://rickandmortyapi.com/api'

export const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})