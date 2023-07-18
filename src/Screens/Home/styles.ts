import styled from 'styled-components'
import BgBody from '../../assets/img/bg01.jpg'



export const ContainerBody = styled.div`
width: 100%;
height: 231.25rem;
display:flex;
align-items:center;
flex-direction:column;
padding-top: 100px;
gap:20px;
color: #fff;
background-image: url(${BgBody});



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
    height: 25rem;
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
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