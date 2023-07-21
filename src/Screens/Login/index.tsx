interface AuthContextData {
    authenticated: boolean;
    user: IUserInfo | null;
    token: string | null;
    setToken: (token: string | null) => void;
    userLogin: (email: string, password: string) => void;
    userLogout: () => void;
    userAdmin: () =>  boolean;
  }

  type  IUserInfo = {
    email: string,
    password: string,
    isAdmin: boolean,
  } 
 

type ZLoginForm = z.infer <typeof LoginFormSchema>

import {  useContext, useEffect, useState  } from 'react'
import { ButtonPrimary } from '../../components/Buttton'
import { AuthContext } from '../../contexts/Auth'
import { useNavigate, Link } from "react-router-dom"
import { loginNewUser, loginAdmin } from '../../services/login.service'




//imports hook form 
import { useForm } from 'react-hook-form'

//imports zod
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { AdminLoginFormSchema, LoginFormSchema } from './scehma';

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
         formState:{isSubmitting, errors}
        } = useForm<ZLoginForm>({
          defaultValues: { isAdmin: true },
        resolver: zodResolver(LoginFormSchema)
    })
    
    
    

    const { userLogin, userAdmin, setToken } = useContext<AuthContextData>(AuthContext)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [ setResponse ] = useState<any>(null);
    const isAdmin =userAdmin()
    const navigate = useNavigate()

    useEffect(() => {
      if (isAdmin) {
        navigate('/')
      }
    },[isAdmin, navigate])
  
    const onSubmit = (data: ZLoginForm) => {

      const adminFormValidation = AdminLoginFormSchema.safeParse(data)
      if (!adminFormValidation.success) {
        console.error ('Dados inválidos para API de Administradores:', adminFormValidation.error)
        return
      } 

      // Verifique se o campo isAdmin está sendo capturado corretamente
      console.log('isAdmin:', adminFormValidation.data.isAdmin)

      if (adminFormValidation.data.isAdmin) {
        loginAdmin(data.email, data.password)
          .then((response) => {
            console.log('Resposta da API de administradores:', response.data);
            const token = response.data.token
            if (token) {
              userLogin(data.email, data.password)
              setToken(token)
              localStorage.setItem('@userInfo', JSON.stringify({ emailUser: data.email, token }));
               navigate('/');
        }
            console.log('Resposta da API de administradores:', response.data)
          })
          .catch((error) => {
            console.error('Erro na chamada da API de Administradores:', error)
          })
      }
      
      loginNewUser(data.email, data.password)
        .then((response) => {
          const token = response.data.token
          if (token) {
          userLogin(data.email, data.password)
          setToken(token)  
            localStorage.setItem('@userInfo', JSON.stringify({ emailUser: data.email, token }))
             navigate('/')
      }

      setResponse(response)
      
    })
    .catch((error) => {
      // Lógica para lidar com erros na chamada da API
      if (error.response) {
        if (error.response.status === 404) {
          console.error('Usuário não encontrado')
        }
      }
    });

      console.log('Dados enviados para a API de Usuarios', data)

      

     
      
     
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
                  
                 <input type="hidden" {...register('isAdmin')} value="true" />



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


