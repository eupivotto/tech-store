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
    max-width:330px;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    top:0;
    Right:0;
    margin-top: 3.9375rem;
    padding: 20px 20px 26px;
    box-shadow: 4 2px 0px rgba(0, 0, 0, 0.1);
    /* transform: translate(110%,0);
    transition: all 400ms ease; */



`
export const CartActive = styled.div`



`



export const CartItemsStyle = styled.div` 
   display: flex;
   flex-direction: column;
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
   color: var(--blue-300);



`