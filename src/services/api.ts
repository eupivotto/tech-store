// api.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fakestoreapi.com'
});

export const signupapi = axios.create({
  baseURL: 'https://tech-store-8fff127c84e2.herokuapp.com/users/create'
});

export const adminpanelcrateprodutoapi = axios.create({
  baseURL: 'https://tech-store-8fff127c84e2.herokuapp.com/product/created'
});

export const adminpanelproductapi = axios.create({
  baseURL: 'https://tech-store-8fff127c84e2.herokuapp.com/product/'
});

export const adminpanelusersapi = axios.create({
  baseURL: 'https://tech-store-8fff127c84e2.herokuapp.com/users/'
});

export const adminpanelpedidoapi = axios.create({
  baseURL: 'https://tech-store-8fff127c84e2.herokuapp.com/sales/'
});

export const adminpanelapi = axios.create({
  baseURL: 'https://tech-store-8fff127c84e2.herokuapp.com/adminpanel'
});
export const CustomerPageclientapi = axios.create({
  baseURL: 'https://tech-store-8fff127c84e2.herokuapp.com/users/'
});

export const CustomerPagepageeditapi = axios.create({
  baseURL: 'https://tech-store-8fff127c84e2.herokuapp.com/user/update/:id'
});


export const CustomerPagepageorderapi = axios.create({
  baseURL: 'https://tech-store-8fff127c84e2.herokuapp.com/sales/'
});



  