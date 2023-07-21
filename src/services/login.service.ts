import { userApi } from './api'
import { userApiAdmin } from './api'


export const loginNewUser = async (email: string, password: string) => {
    
    const response = await userApi.post('/', {email, password})
    return response.data 
}


export const loginAdmin = async (email: string, password: string) => {

    const response = await userApiAdmin.post('/', { email, password })
    return response.data;
  };