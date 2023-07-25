// api.ts
import axios from 'axios';

const BASE_URL = 'https://tech-store-8fff127c84e2.herokuapp.com';

export const api = axios.create({
  baseURL: `${BASE_URL}/product`,
});

export const apitest = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
});

export const userApi = axios.create({
  baseURL: `${BASE_URL}/users/login`,
});

export const userApiAdmin = axios.create({
  baseURL: `${BASE_URL}/admin/login`,
});

export const categoryApi = axios.create({
  baseURL: 'https://fakestoreapi.com/products/categories',
});

export const signupapi = axios.create({
  baseURL: `${BASE_URL}/users/create`,
});
