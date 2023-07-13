import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

export const signupapi = axios.create({
    baseURL: ' http://localhost:3000/signup'
})