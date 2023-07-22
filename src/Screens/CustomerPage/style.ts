// Importando o styled-components
import styled from 'styled-components';
import BgBody from '../../assets/img/bg01.jpg';

// Estilização do ContainerHome, que é o contêiner principal da página
export const ContainerHome = styled.div`
  background: var(--background-primary, #eff2f6); /* Define a cor de fundo, com fallback caso a variável não esteja definida */
  min-height: 100vh; /* Altura mínima da página para ocupar toda a tela vertical */
  width: 100%; /* Largura ocupando toda a tela horizontal */
  display: flex; /* Define o elemento como flex container */
  align-items: center; /* Alinha os elementos verticalmente no centro */
  justify-content: center; /* Alinha os elementos horizontalmente no centro */
  background-image: url(${BgBody}); /* Define a imagem de fundo do ContainerHome */
`;

// Estilização do ContainerHomeform, que é o contêiner do formulário na página
export const ContainerHomeform = styled.div`
  border: 1px solid; /* Define uma borda com 1px de largura */
  width: 90%; /* Define a largura do contêiner em 90% */
  max-width: 2150px; /* Define a largura máxima do contêiner */
  height: auto; /* Define a altura automática */
  flex-shrink: 0; /* Impede o contêiner de diminuir em tamanho */
  border-radius: 10px; /* Define o raio de borda arredondado em 10px */
  padding-top: 30px; /* Define o espaçamento superior interno */
  box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.38); /* Adiciona uma sombra ao contêiner */
  -webkit-box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.38); /* Adiciona sombra para navegadores WebKit */
  -moz-box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.38); /* Adiciona sombra para navegadores Mozilla */
`;

// Estilização do ContainerFormLogin, que é o contêiner do formulário de login
export const ContainerFormLogin = styled.div`
  color: #fff; /* Define a cor do texto para branco */
  padding: 0 1.875rem; /* Adiciona espaçamento horizontal interno */
  display: flex; /* Define o elemento como flex container */
  align-items: center; /* Alinha os elementos verticalmente no centro */
  flex-direction: column; /* Define a direção dos elementos como coluna */
  justify-content: center; /* Alinha os elementos horizontalmente no centro */
`;

// Estilização do ContainerButtons, que é o contêiner dos botões de alternância entre usuários e pedidos
export const ContainerButtons = styled.div`
  display: flex; /* Define o elemento como flex container */
  justify-content: center; /* Alinha os elementos horizontalmente no centro */
  align-items: center; /* Alinha os elementos verticalmente no centro */
  margin-bottom: 20px; /* Adiciona margem inferior de 20px */
  
  button {
    cursor: pointer; /* Define o cursor como ponteiro ao passar o mouse sobre o botão */
    border-radius: 5px; /* Define o raio de borda arredondado em 5px */
    font-weight: 700; /* Define o peso da fonte como negrito */
    font-size: 1rem; /* Define o tamanho da fonte */
    line-height: 1.1875rem; /* Define a altura da linha da fonte */
    color: blue; /* Define a cor do texto como azul */
    border: 2px solid blue; /* Define a borda do botão com cor azul */
    padding: 8px 68px; /* Adiciona espaçamento interno nas bordas do botão */
    margin: 0 10px; /* Adiciona margem horizontal de 10px entre os botões */
    white-space: nowrap; /* Impede que o texto do botão quebre em várias linhas */
    transition: opacity 0.2s; /* Adiciona uma transição de opacidade ao passar o mouse sobre o botão */
    
    &:not(:disabled):hover {
      opacity: 0.9; /* Define a opacidade do botão ao passar o mouse */
    }
  }
`;

// Estilização do ProductContainer, que é o contêiner da lista de usuários ou pedidos
export const ProductContainer = styled.ul`
  list-style: none; /* Remove a estilização padrão das listas */
  padding: 0; /* Remove o espaçamento interno da lista */
  margin: 0; /* Remove as margens da lista */
  width: 100%; /* Largura ocupando toda a tela horizontal */
  max-width: 2100px; /* Define a largura máxima do contêiner */
`;

// Estilização do ProductHeader, que é o cabeçalho da lista de usuários ou pedidos
export const ProductHeader = styled.li`
  display: flex; /* Define o elemento como flex container */
  align-items: center; /* Alinha os elementos verticalmente no centro */
  justify-content: space-around; /* Distribui os elementos igualmente no espaço disponível */
  width: 100%; /* Largura ocupando toda a tela horizontal */
  padding: 10px 0; /* Adiciona espaçamento interno vertical de 10px */
  text-align: center; /* Centraliza o texto horizontalmente */
  font-weight: 700; /* Define o peso da fonte como negrito */
  margin-left: 80px; /* Adiciona margem esquerda para afastar os itens do cabeçalho */
`;

// Estilização do ProductItem, que é um item da lista de usuários ou pedidos
export const ProductItem = styled.li`
  display: flex; /* Define o elemento como flex container */
  align-items: center; /* Alinha os elementos verticalmente no centro */
  justify-content: space-between; /* Distribui os elementos igualmente no espaço disponível */
  padding: 8px 16px; /* Adiciona espaçamento interno vertical de 8px e horizontal de 16px */
  border-bottom: 1px solid #ddd; /* Adiciona uma borda inferior com 1px de largura e cor cinza */
`;

// Estilização do ProductInfo, que é o contêiner das informações do usuário ou pedido
export const ProductInfo = styled.div`
  display: flex; /* Define o elemento como flex container */
  align-items: center; /* Alinha os elementos verticalmente no centro */
  justify-content: space-between; /* Distribui os elementos igualmente no espaço disponível */
  flex: 1; /* Define o contêiner como ocupando o espaço disponível */
  
  p {
    flex-basis: 33,33%; /* Define a base flexível para os elementos de 33,33% */
    text-align: center; /* Centraliza o texto horizontalmente */
  }
`;

// Estilização do ProductActions, que é o contêiner dos botões de ação do usuário ou pedido
export const ProductActions = styled.div`
  /* Adiciona uma margem para separar os botões das informações do usuário ou pedido */
  grid-column: span 3; /* Usa 3 colunas para as ações do usuário ou pedido */
  display: flex; /* Define o elemento como flex container */
  justify-content: center; /* Alinha os elementos horizontalmente no centro */
`;

// Estilização do EditButton, que é o botão de edição
export const EditButton = styled.button`
  cursor: pointer; /* Define o cursor como ponteiro ao passar o mouse sobre o botão */
  background: blue; /* Define a cor de fundo como azul */
  border-radius: 5px; /* Define o raio de borda arredondado em 5px */
  font-weight: 700; /* Define o peso da fonte como negrito */
  font-size: 1rem; /* Define o tamanho da fonte */
  line-height: 1.1875rem; /* Define a altura da linha da fonte */
  color: white; /* Define a cor do texto como branco */
  border: 2px solid blue; /* Define a borda do botão com cor azul */
  padding: 8px 16px; /* Adiciona espaçamento interno nas bordas do botão */
  margin-right: 10px; /* Adiciona margem à direita para separar o botão de outros elementos */
`;

// Estilização do DeleteButton, que é o botão de exclusão
export const DeleteButton = styled.button`
  cursor: pointer; /* Define o cursor como ponteiro ao passar o mouse sobre o botão */
  background: red; /* Define a cor de fundo como vermelho */
  border-radius: 5px; /* Define o raio de borda arredondado em 5px */
  font-weight: 700; /* Define o peso da fonte como negrito */
  font-size: 1rem; /* Define o tamanho da fonte */
  line-height: 1.1875rem; /* Define a altura da linha da fonte */
  color: white; /* Define a cor do texto como branco */
  border: 2px solid red; /* Define a borda do botão com cor vermelha */
  padding: 8px 16px; /* Adiciona espaçamento interno nas bordas do botão */
`;

// Estilização do ContainerTitulo, que é o título principal da página
export const ContainerTitulo = styled.h1`
  font-family: 'Public Sans', sans-serif; /* Define a fonte do título */
  font-size: 36px; /* Define o tamanho da fonte do título */
  font-weight: 600; /* Define o peso da fonte como negrito */
  line-height: 44px; /* Define a altura da linha da fonte */
  letter-spacing: -1.5px; /* Define o espaçamento entre as letras */
  text-align: center; /* Centraliza o texto horizontalmente */
  color: #fff; /* Define a cor do texto como branco */
  margin-bottom: 20px; /* Adiciona margem inferior de 20px */
`;

// Estilização do ContainerSubTitulo, que é o subtítulo da página
export const ContainerSubTitulo = styled.p`
  font-family: 'Public Sans', sans-serif; /* Define a fonte do subtítulo */
  font-size: 16px; /* Define o tamanho da fonte do subtítulo */
  font-weight: 500; /* Define o peso da fonte como médio */
  line-height: 26px; /* Define a altura da linha da fonte */
  letter-spacing: -0.2px; /* Define o espaçamento entre as letras */
  text-align: center; /* Centraliza o texto horizontalmente */
  color: #fff; /* Define a cor do texto como branco */
  margin-bottom: 40px; /* Adiciona margem inferior de 40px */
`;

// Estilização do Modal
export const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Define a cor de fundo do overlay (fundo do modal) com transparência */
  },
  content: {
    top: '50%', /* Posiciona o conteúdo verticalmente no meio */
    left: '50%', /* Posiciona o conteúdo horizontalmente no meio */
    right: 'auto', /* Remove a posição à direita */
    bottom: 'auto', /* Remove a posição inferior */
    marginRight: '-50%', /* Posiciona o conteúdo horizontalmente de volta à esquerda */
    transform: 'translate(-50%, -50%)', /* Define o posicionamento como centralizado */
    border: 'none', /* Remove a borda do modal */
    borderRadius: '10px', /* Define o raio de borda arredondado em 10px */
    boxShadow: '0px 0px 28px 0px rgba(0, 0, 0, 0.38)', /* Adiciona uma sombra ao modal */
    padding: '30px', /* Adiciona espaçamento interno */
    maxWidth: '400px', /* Define a largura máxima do modal */
    width: '100%', /* Define a largura do modal como 100% */
  },
};
