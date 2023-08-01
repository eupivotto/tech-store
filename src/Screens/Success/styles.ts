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

export const ContainerResume = styled.div`


h2 {
    color: var(--blue-200);
}

p {
    color: #fff;
    margin-bottom: 30px;
}


h3{
    color: #fff

}

`

export const TotalPrice = styled.div`

width: 200px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
background-color: #46a446;
border-radius: 10px;




`
export const PaymentFinally = styled.div`

width: 350px;
height: 50px;
margin-top: 40px;
display: flex;
align-items: center;
justify-content: center;
background-color: #fff;
border-radius: 10px;
transition: transform 0.3s ease;

  &:hover {
    transform: translate(5px, -5px);
  }

a{ 
    text-decoration: none;
    color: var(--blue-300);
}



`