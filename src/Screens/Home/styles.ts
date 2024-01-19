import styled from 'styled-components'
import BgBody from '../../assets/img/bg01.jpg'



export const ContainerBody = styled.div`
width: 100%;
/* height: 3400px; */
min-height: 100vh;
display:flex;
align-items:center;
flex-direction:column;
padding-top: 100px;
gap:20px;
color: #fff;
background-image: url(${BgBody});



@media screen and (max-width: 768px) {
    padding-left: 30px; 
    padding-right: 30px;
    min-height: auto; 
    
  }

  


`
export const ContainerButton = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;

    p{
        margin-top: 0.625rem;
        font-size: 0.75rem;
        color: var(--blue-400);

        a {
            font-weight: 700;
        }
    }
`
export const ContainerProductsUl = styled.ul`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    margin: 0px 20px 40px 20px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;

   
    
`
export const LiProduct = styled.li`
    width: 275px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 35px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;

  &:hover {
    transform: translate(5px, -5px);
  }

  @media screen and (max-width: 768px) {
    width: 100%; 
    max-width: 275px; 
    height: auto; /* A altura será ajustada automaticamente para manter a proporção */
    margin-bottom: 20px; 
  }
    
`
export const TitleProduct = styled.p`
   
    font-size:18px;
    color: var(--blue-300);
    margin-bottom:10px;


`

export const ImageProduct = styled.img`
    width: 100px;
    height: 100px;

    
`
export const PriceProduct = styled.p`
    
    font-size: 14px;
    color: var(--blue-400);
    font-weight:bold;

    
`





export const ContainerSlider = styled.div`
width:75rem;
height: 18.75rem;
position: relative;
z-index: 1; 

@media screen and (max-width: 768px) {
    display: none; /* Faz a div desaparecer em telas menores */
  }


`
export const ContainerCartHome = styled.div`

position: relative;
z-index: 2; 




`
export const ContainerBrands = styled.div`
width:43.75rem;
height: 4.75rem;
margin-top: 30px;
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: center;



@media screen and (max-width: 768px) {
    width: 100%; 
  }





`

export const ButtonCartCard = styled.div`

    margin-top:1.25rem;

    

button{
    width:200px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: var(--blue-400);
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    
    
}

button:hover {
    background-color: var(--blue-300);
    
}

`

export const ContainerTitle = styled.div`
    
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 100px;
    

    background-color: #fff;

    @media screen and (max-width: 768px) {
    height: 80px;
  }


`

export const BoxIcon = styled.img`
    width: 43.875rem;
    height: 6.25rem;
   

    @media screen and (max-width: 768px) {
    width: 100%; 
    height: auto; /
  }

`
