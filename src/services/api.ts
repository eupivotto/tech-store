import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://fakestoreapi.com/product'
})


export const userApi = axios.create({

    baseURL: 'http://localhost:3000/login'
})

export const categoryApi = axios.create({

    baseURL: 'https://fakestoreapi.com/products/categories'
})

