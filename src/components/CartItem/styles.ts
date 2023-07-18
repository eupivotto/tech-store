import styled from "styled-components"


export const ContainerCartItems = styled.div`
display: flex;
align-items: flex-start;
border-bottom: 1px solid #000;
padding-bottom: 20px;
margin-bottom: 20px;


`
export const CartItemImg = styled.img`

width: 90px;



`
export const CartInfo = styled.div`

font-size: 12px;

h3{
    font-weight:600;
    color: var(--blue-400);
    margin-bottom: 5px;
}

h2{
        font-size: 15px;
        margin-bottom: 5px;
        

    }

button{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 3px;
    border: none;
   

    
}



`

