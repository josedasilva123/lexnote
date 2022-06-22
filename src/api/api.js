import axios from "axios"

export const api = axios.create({
    baseURL: 'https://lx-note-api.herokuapp.com/',
})