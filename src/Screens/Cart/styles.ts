import styled from "styled-components"
import BgBody from '../../assets/img/bg01.jpg'



export const ContainerHome = styled.div`
  
    height: 1090px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-image: url(${BgBody}); 
    
    h1{
        color: #fff;
        margin-top: 40px;
    }
`

export const ContainerCart = styled.div`
    width: 100%;
    max-width:530px;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    top:0;
    Right:0;
    margin-top: 3.9375rem;
    padding: 20px 20px 26px;
    box-shadow: 4 2px 0px rgba(0, 0, 0, 0.1);
    



`



export const CartItemsStyle = styled.div` 
   display: grid;
   grid-template-columns: 1fr;
   gap: 10px;
   color: var(--blue-300);
   margin-left:20px;


   h3{
    font-weight: bold;
   }

   img{
    margin-right: 15px;
   }
   


`
export const CartResume = styled.div`
   
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction:column;
   
   
   
   color: var(--blue-300);
   

   h3{
    font-weight: 500;
    font-size: 16px;
   }

   span{
    font-weight: bold;
   }


`

export const RemoveAllItems = styled.button`

display: flex;
align-items: center;
justify-content: center;
width:200px;
height: 30px;
margin-top: 20px;
background-color: red;
border: none;
border-radius: 6px;
color: #fff;
cursor: pointer;




`

export const CartCheckout = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;





`
export const ButtonCheckout = styled.button`

display: flex;
align-items: center;
justify-content: center;
width:300px;
height: 40px;
margin-top: 20px;
background-color: var(--blue-300);
border: none;
border-radius: 6px;
color: #fff;
cursor: pointer;

`
export const ButtonCloseCart = styled.div`
position: relative;
cursor: pointer;



`