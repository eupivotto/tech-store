// Importando a API para realizar a requisição de signup
import {signupapi} from './api'

// Definindo a interface que representa os dados do registro
interface INewregister{
     email:string,
     nome:string,
     telefone:string,
     bairro:string,
     rua:string,
     cep:string,
     complemento:string,
}
// Função responsável por realizar o signup
export const resgisterSignup = async (InfoRegister:INewregister) =>{
const response = await signupapi.post('/', InfoRegister)

return response.data
}



