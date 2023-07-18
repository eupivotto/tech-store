import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://fakestoreapi.com/products'
})


export const userApi = axios.create({

    baseURL: 'https://tech-store-8fff127c84e2.herokuapp.com/users/login'
})

export const userApiAdmin = axios.create({

    baseURL: 'https://tech-store-8fff127c84e2.herokuapp.com/admin/login'
})

export const categoryApi = axios.create({

    baseURL: 'https://fakestoreapi.com/products/categories'
})

