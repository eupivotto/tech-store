import { userApi } from './api'


export const registerNewUser = async (email: string, password: string) => {
    
    const response = await userApi.post('/', {email, password})
    
    return response.data 
}