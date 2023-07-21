import { NavBar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { ContainerHome } from "./styles"


import { useLocation } from "react-router-dom"
// import { useContext } from "react";
// import { CartContext } from '../../contexts/Cartcontext'
import { IDataProduct } from "../../services/types";


// interface SuccessProps {
//     // Defina os tipos dos dados do pedido aqui, por exemplo:
//     orderId: string;
//     totalAmount: number;
//   }

export const Success = () => {
    const location = useLocation();
    const { orderId, cartItems, totalAmount } = location.state.orderData;
    

    // const totalPrice = cartItems.reduce((acc, item) => {
    //     return item.price + acc;
    //   }, 0);



    return (
        <>
         
         <NavBar/>
         <ContainerHome>
         <div>
              <h1>Sucesso!</h1>
              <p>Seu pedido foi finalizado com sucesso!</p>
              <h2>Número do Pedido: {orderId}</h2>
              <h1>Resumo do Pedido</h1>
            {cartItems.map((item: IDataProduct) => (
            <div key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: "100px" }} />
            <h2>{item.name}</h2>
            <p>Preço: {item.price}</p>               
        </div>
            ))}
            <h3>Total: R$ {totalAmount}</h3>
            {/* Implemente o restante da página, como o formulário de dados do cliente e o botão de finalizar compra */}
            </div>
         </ContainerHome>
         <Footer/>
        
        </>
    )
}