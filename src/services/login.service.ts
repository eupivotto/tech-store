import { api} from './api'


export const registerNewUser = async (email: string, password: string) => {
    return api.post('/login', {email, password})
}