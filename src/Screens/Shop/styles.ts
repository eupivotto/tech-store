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
export const ContainerTitle = styled.div`
  
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: #fff;

    
    h1{
        margin: 34px 0px 0px 120px;
        color: var(--blue-300);
    }

    p{  
        margin-left: 120px;
        color: var(--blue-300);
    }
`

export const ContainerFilters = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    
`
export const DivPagination = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 40px;
  
    
`
export const DivCategory = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 145px;
 
    
`
export const ContainerProductsUl = styled.ul`
    width: 100%;
    height: 53rem;
    display: flex;
    align-items: center;
    padding: 0px 12px 0px 12px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;

  

    
`
export const LiProduct = styled.li`
    width: 275px;
    height: 275px;
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
