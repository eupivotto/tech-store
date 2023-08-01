import { AuthContextData } from '../../services/types'
 

type ZLoginForm = z.infer <typeof LoginFormSchema>

import {  useContext, useEffect } from 'react'
import { ButtonPrimary } from '../../components/Buttton'
import { AuthContext } from '../../contexts/Auth'
import { useNavigate, Link } from "react-router-dom"
import { loginNewUser, loginAdmin } from '../../services/login.service'




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
         formState:{isSubmitting, errors}
        } = useForm<ZLoginForm>({
          defaultValues: { isAdmin: true },
        resolver: zodResolver(LoginFormSchema)
    })
    
    
    

    const { userLogin, setToken, setAuthenticated, authenticated } = useContext<AuthContextData>(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
      if (authenticated) {
        navigate('/')
      }
    },[authenticated, navigate])
  
    const onSubmit = async (data: ZLoginForm) => {
      const adminResponse = await loginAdmin(data.email, data.password)

      if (adminResponse?.admin) {
        // Usuário é administrador, chamar a API de administradores
        
          

                const { token, admin } = adminResponse
                setToken(token);
                setAuthenticated(true)
                localStorage.setItem('@userInfo', JSON.stringify(admin));
                console.log('Redirecionando para a página principal');
                navigate('/admin');
              
    
      } else {

        const userResponse = await loginNewUser(data.email, data.password)

          if (userResponse.token) {
          console.log('Token definido:', userResponse.token)
          userLogin(data.email, data.password)
          setToken(userResponse.token)
          setAuthenticated(true)  
          
          localStorage.setItem('@userInfo', JSON.stringify({ email: data.email }))
             navigate('/')
      } else {
        console.error ('Token não encontrado na resposta da API de usuários')
      }
  
    }
    
     
}
    return(
        <>
        <NavBar/>
        <ContainerHome>
            <ContainerHomeform>
              <ContainerFormLogin>
                <FormLogin onSubmit={handleSubmit(async (data) => onSubmit(data))}>
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


