import styled from 'styled-components';
import BgBody from '../../assets/img/bg01.jpg';

export const ContainerHome = styled.div`
  background: var(--background-primary, #EFF2F6);
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BgBody});
`;

export const ContainerHomeform = styled.div`
 
  border: 1px solid;
  width: 90%;
  max-width: 1150px;
  height: auto;
  flex-shrink: 0;
  border-radius: 10px;
  padding-top: 30px;
  box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.38);
  -webkit-box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.38);
  -moz-box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.38);
`;

export const ContainerFormLogin = styled.div`
  color: #fff;
  padding: 0 1.875rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  button {
    cursor: pointer;
    border-radius: 5px;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: blue;
    border: 2px solid blue;
    padding: 8px 68px;
    margin: 0 10px;
    white-space: nowrap;
    transition: opacity 0.2s;

    &:not(:disabled):hover {
      opacity: 0.9;
    }
  }
`;

export const ProductContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 1100px;
 
`;

export const ProductHeader = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 10px 0;
  
  text-align: center;
  font-weight: 700;
  margin-left: 50px; /* Adiciona margem esquerda para afastar os itens do cabeçalho */
`;

export const ProductItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  p {
    flex-basis: 33.33%;
    text-align: center;
  }
`;

export const ProductActions = styled.div`
  display: flex;
`;

export const EditButton = styled.button`
  cursor: pointer;
  background: blue;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: white;
  border: 2px solid blue;
  padding: 8px 16px;
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  background: red;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: white;
  border: 2px solid red;
  padding: 8px 16px;
`;

export const ContainerTitulo = styled.h1`
  font-family: 'Public Sans', sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -1.5px;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
`;

export const ContainerSubTitulo = styled.p`
  font-family: 'Public Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.2px;
  text-align: center;
  color: #fff;
  margin-bottom: 40px;
`;
