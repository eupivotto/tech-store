import styled from 'styled-components'
import BgBody from '../../assets/img/bg01.jpg'

export const ContainerHome = styled.div`
  background: var(--background-primary, #EFF2F6);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-image: url(${BgBody});    
`

export const ContainerHomeform = styled.div`
  background:  #fff 0.38;
  width: 500px;
  height: 389px;
  flex-shrink: 0;
  border-radius: 10px;
  padding-top: 30px;
  box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.38);
  -webkit-box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.38);
  -moz-box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.38);
  
  
`

export const ContainerFormLogin = styled.div`
  color: #fff;
  padding: 0 1.875rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
 


 

`

export const FormLogin = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 



`

export const ContainerInputs = styled.div`
    margin: 1.375rem 0;
    width: 455px;
    height: 40px;
    flex-shrink: 0;
    padding: 0 15px;
   

    label {
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.1875rem;
        color: #fff;
       
    }

    input {
        width: 100%;
        margin-top: 0.4375rem;
        background-color: transparent;
        border: 1px solid var(--blue-300);
        padding: 0.5rem 0.75rem;
        font-weight: 700; 
        border-radius: 6px;
        color: #fff;
        
        &::placeholder {
          color: var(--blue-200);
          font-weight: 200;
        }

        
    }

`;
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;

 
a {
  cursor: pointer;
}

`


export const ContainerButtonscreate = styled.div`
  display: flex;
  justify-content: center;
  color: var(--blue-200);

span {
  font-weight: 700;
  text-decoration: none;
}  

p { 
  margin-top: 80px;
  cursor: pointer;
}
a { 
  margin-top: 80px;
  cursor: pointer;
  text-decoration: none;
  color: var(--blue-200);
}

   
`
