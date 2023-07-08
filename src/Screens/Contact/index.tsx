/* eslint-disable @typescript-eslint/no-empty-function */

import  { NewModal }  from '../../components/Modal'
import { NavBar } from '../../components/Navbar'

import { ContainterContact } from './styles'


export function Contact () {
    return(

        <>

        <NavBar />

         <NewModal isOpen={true} 
                   contentLabelText='Modal Administrativo'
                   onRequestClose={() => {}} 
                   titleModal='Cadastrar Produto'
                   handleSubmitFormModal={() => console.log('teste handle form')}>

            <input type="text"
                   placeholder='Titulo' 
             />
            <input type="number"
                   placeholder='Valor' 
             />

             <button type="submit">Cadastrar</button>

         </NewModal>
        <ContainterContact>
         
         </ContainterContact>

         </>
    )
}