import styled from "styled-components"
import BgBody from '../../assets/img/bg01.jpg'



export const ContainerHome = styled.div`
  
    height: 800px;
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

export const ContainerProduct = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    padding: 0px 12px 0px 12px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;

  

    
`

export const TitleProduct = styled.p`
   
    height:100px;
    font-size:40px;
    color: #fff;
    margin-bottom:10px;
    


`
export const DescriptionProduct = styled.p`
   
   width: 500px;
    font-size:14px;
    color: #fff;
    margin-bottom:10px;
    


`
export const BrandProduct = styled.p`
   
   
    font-size:14px;
    color: #fff;
    font-weight: 200;
    margin-bottom:10px;


`


export const ImageProduct = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 10px;
    flex-shrink: 0;
    box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.38);
    -webkit-box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.38);
    -moz-box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.38);

    
`
export const PriceProduct = styled.p`
    
    font-size: 18px;
    color: var(--blue-200);
    font-weight:bold;

    
`
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  

 
a {
  cursor: pointer;
}

`