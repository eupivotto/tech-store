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