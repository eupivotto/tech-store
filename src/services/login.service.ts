// Importando a API para realizar a requisição de signup
import {signupapi} from './api'


// Definindo a interface que representa os dados do registro
interface INewregister{
     email:string,
     name:string,
     contato:string,
     road:string,
     Adress:string,
     Zipcode:string,
     password:string,
}
// Função responsável por realizar o signup
export const resgisterSignup = async (InfoRegister:INewregister) =>{
const response = await signupapi.post('/', InfoRegister)

return response.data
};


