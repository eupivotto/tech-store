import { NavBar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { ContainerHome, ContainerResume, TotalPrice, PaymentFinally } from "./styles"
import { IOrderData } from '../../services/types'
import { NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from "react-router-dom"
import { IDataProduct } from "../../services/types";
import { useEffect } from "react"



export const Success = () => {
  
  const location = useLocation()
  const orderData = location.state as IOrderData | undefined
  const navigate = useNavigate()
  
  useEffect(() => {
    // Verificar se os itens do carrinho estão armazenados no localStorage
    const storedCartItems = localStorage.getItem("cartItems");

    if (storedCartItems) {
      // Se os itens do carrinho foram encontrados no localStorage,
      // converta a string JSON de volta para um array de objetos
      const cartItemsFromLocalStorage = JSON.parse(storedCartItems);
      
      // Faça o que quiser com os itens do carrinho recuperados do localStorage
      console.log("Itens do carrinho do localStorage:", cartItemsFromLocalStorage);
    }
  }, []); // Executa este efeito apenas uma vez no carregamento inicial da página


  if (!orderData) {
    navigate('/'); 
   
    return <p>Erro: Dados do pedido não encontrados.</p>;
  }


  const { cartItems, totalAmount } = orderData

  
    

    


    return (
        <>
         
         <NavBar/>
         <ContainerHome>
         <ContainerResume>
              <h1>Sucesso!</h1>
              <p>Seu pedido foi finalizado com sucesso!</p>
              <h1>Resumo do Pedido</h1>
            {cartItems.map((item: IDataProduct) => (
            <div key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: "100px" }} />
            <h2>{item.name}</h2>
            <p>Preço: {item.price}</p>
            </div>
            ))}
            <TotalPrice>
            <h3>Total: R$ {totalAmount}</h3>
            </TotalPrice>

            <PaymentFinally>
               <NavLink to="/login" title="Login">
               <a>Faça o Login e finalize seu pagamento</a>
               </NavLink>
            </PaymentFinally>
            
            </ContainerResume>
         </ContainerHome>
         <Footer/>
        
        </>
    )
}