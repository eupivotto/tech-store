import { FormEvent, SetStateAction, useState, useEffect, useContext } from 'react';
import { ButtonPrimary } from '../../components/Buttton';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/Auth';


import { NavBar } from '../../components/Navbar';
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

    const { authenticated, userLogin} = useContext(AuthContext)

//hooks     
const[email, setEmail]= useState('')
const[password, setPassword]= useState('')

//Hook do Router Dom 
const navigate = useNavigate()

    //tratando os eventos onChange 
    const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(e.target.value)
    }

    const submitLogin =(event:FormEvent) => {
        event.preventDefault();
        console.log(email, password)
        userLogin(email, password) // integração com meu context 
        
        if (email.length && password.length) {
            localStorage.setItem('@userInfo', JSON.stringify({emailUser: email}))
            navigate('/login')
        }
    }

    useEffect(() => {
        
        const userData = localStorage.getItem('@userInfo')
        if (!userData) {
            navigate('/login')
        }

    }, [])

    return(
        <>
        <NavBar/>
        <ContainerHome>
            <ContainerHomeform>
              <ContainerFormLogin>
                <p>{String(authenticated)}</p>
                <FormLogin onSubmit={submitLogin}>
                 <h1>Faça o Login</h1>
                 <ContainerInputs>
                 <label>Email</label>
                 <input
                    placeholder='Digite seu email...' 
                    type="email" 
                    value={email}
                    onChange= {handleEmailChange}
                 />
                 </ContainerInputs>
                <ContainerInputs>
                    <label>Senha</label>
                    <input
                        placeholder='Digite sua senha...' 
                        type="password" 
                        value={password}
                        onChange={handlePasswordChange}
                    /> 
                </ContainerInputs>

                <ContainerButtons>
                    <ButtonPrimary type="submit" title={'Entrar'} isLoading={false} />
                    <a>Esqueceu a senha?</a>
                </ContainerButtons>
                
                </FormLogin>
            </ContainerFormLogin>

                
                <ContainerButtonscreate>
                <a>Ainda não tem conta? <span>Crie uma conta</span></a>
                </ContainerButtonscreate>

         </ContainerHomeform> 
        </ContainerHome>
        <Footer/>
        </>
    )
}