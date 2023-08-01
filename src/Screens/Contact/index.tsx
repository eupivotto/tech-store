/* eslint-disable @typescript-eslint/no-empty-function */

import { ContactFormData } from '../../services/types'
import { NavBar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

import { useState } from 'react'

import { ContainterContact, 
         ContainerContactform, 
         FormContact, 
         InputContact, 
         SubmitButtonContact, 
         TextArea,
         TitleContact
         
        } from './styles'


export function Contact () {

    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        password: '',
        message: '',
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aqui você pode enviar os dados do formulário para o servidor ou fazer outras ações necessárias.
        console.log(formData);
      };  



    return(

        <>

        <NavBar />

        
         <ContainterContact>

        <ContainerContactform>
            <TitleContact>
            <h1>Entre em contato!</h1>
            </TitleContact>

         <FormContact onSubmit={handleSubmit}>
         
      <InputContact
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <InputContact
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <InputContact
        type="password"
        name="password"
        placeholder="Senha"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <TextArea
        name="message"
        placeholder="Mensagem"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <SubmitButtonContact type="submit">Enviar</SubmitButtonContact>
    </FormContact>
    </ContainerContactform>

         </ContainterContact>

        <Footer />
         </>
    )
}