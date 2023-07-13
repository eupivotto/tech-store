interface AuthContextData {
    authenticated: boolean;
    user: IUserInfo | null;
    userLogin: (email: string, password: string) => void;
    userLogout: () => void;
  }

  type  IUserInfo = {
    email: string,
    password: string
  } 
 

type ZLoginForm = z.infer <typeof LoginFormSchema>

import {  useContext  } from 'react'
import { ButtonPrimary } from '../../components/Buttton'
import { AuthContext } from '../../contexts/Auth'
import { useNavigate, Link } from "react-router-dom"
import { registerNewUser } from '../../services/login.service'



//imports hook form 
import { useForm } from 'react-hook-form'

//imports zod
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormSchema } from './scehma';

// imports styles 
import { NavBar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import {
    ContainerHome,
    ContainerFormLogin,
    ContainerInputs,
    ContainerButtons,
    ContainerButtonscreate,
    ContainerHomeform,
    FormLogin
   
} from './styles';



export const Login =() => {

    const { handleSubmit,
         register,
         formState:{isSubmitting, errors, isValid} 
        } = useForm<ZLoginForm>({
        resolver: zodResolver(LoginFormSchema)
    })
    

    const { userLogin } = useContext<AuthContextData>(AuthContext)
    const navigate = useNavigate()
  
    const onSubmit = (data: ZLoginForm) => {
      
          registerNewUser(data.email, data.password)
    .then(() => {
          userLogin(data.email, data.password)
      if (isValid) {
        localStorage.setItem('@userInfo', JSON.stringify({ emailUser: data.email }));
        navigate('/');
      }

    })
      .catch((error) => {
        // Lógica para lidar com erros na chamada da API
        console.error(error)
      });

      console.log('Dados enviados para a API de postagem:', data)
}
    return(
        <>
        <NavBar/>
        <ContainerHome>
            <ContainerHomeform>
              <ContainerFormLogin>
                <FormLogin onSubmit={handleSubmit(onSubmit)}>
                 <h1>Faça o Login</h1>
                 <ContainerInputs>
                 <label>Email</label>
                 <input
                    placeholder='Digite seu email...' 
                    type="email" 
                    {...register('email')}
                 />
                 {errors.email && <p>{errors.email?.message}</p>}
                 </ContainerInputs>
                <ContainerInputs>
                    <label>Senha</label>
                    <input
                        placeholder='Digite sua senha...' 
                        type="password" 
                        {...register('password')}
                    />
                    {errors.password && <p>{errors.password.message}</p>} 
                </ContainerInputs>

                <ContainerButtons>
                    <ButtonPrimary type="submit" title={'Entrar'} disabled = {isSubmitting} isLoading = {false} />
                    <a>Esqueceu a senha?</a>
                </ContainerButtons>
                
                </FormLogin>
            </ContainerFormLogin>
 
                <ContainerButtonscreate>
                <p>Ainda não tem conta? <Link to='/Signup'><span>Crie uma conta</span></Link></p>
                </ContainerButtonscreate>

         </ContainerHomeform> 
        </ContainerHome>
        <Footer/>
        </>
    )
}