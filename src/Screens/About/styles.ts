import styled from 'styled-components'
import BgBody from '../../assets/img/bg01.jpg'


export const ContainerBody = styled.div`
width: 100%;
height: 700px;
display:flex;
align-items:center;
flex-direction: column;
padding-top: 100px;

color: #fff;
background-image: url(${BgBody});

p {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

`

export const ContainerInfo = styled.div`

margin-top: 100px;
display:flex;
align-items:center;
flex-direction: column;
gap: 40px;



`