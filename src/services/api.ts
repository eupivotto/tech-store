import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

export const signupapi = axios.create({
    baseURL: 'https://tech-store-8fff127c84e2.herokuapp.com/users/create'
}) 

/* export const signupapi = axios.create({
    baseURL: 'https://tech-store-8fff127c84e2.herokuapp.com',
  }); */
  