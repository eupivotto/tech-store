import { IDataProduct } from "../../services/types"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { CartContext } from '../../contexts/Cartcontext'
import { CartItems } from "../../components/CartItem"
import { Trash } from 'phosphor-react'
import { X } from 'phosphor-react'


interface IOrderData {
  cartItems: IDataProduct[];
  totalAmount: number;
}

import { 
         ContainerCart,
         CartItemsStyle,
         CartResume,
         RemoveAllItems,
         CartCheckout,
         ButtonCheckout,
         ButtonCloseCart
         
   
} from "./styles"



export const Cart = () => {
    
    const { cartItems, setCartItems, toggleCartVisibility } = useContext(CartContext)
    const navigate = useNavigate()
    const [totalAmount, setTotalAmount] = useState(0)

    // Estado para armazenar os dados do pedido
    const [ orderData, setOrderData ] = useState<IOrderData | undefined>()


    useEffect(() => {
      //Calculando total de itens do carrinho usando o reduce
      const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);
      setTotalAmount(totalPrice);
    }, [cartItems]);
    
    const handleContinueToPayment = () => {
    

      setOrderData({
        cartItems,
        totalAmount,
      });

      toggleCartVisibility()

      navigate("/success")
    

    }

    
    const handleCartButtonClick = () => {
      toggleCartVisibility()
    }

    const handleRemoveAllItems = () => {
        setCartItems([]);
      };

      

    return (

        <>        
         
        <ContainerCart>
                 <X cursor="pointer" onClick={handleCartButtonClick} size={20} color="#3168c8" weight="bold" />
            <CartItemsStyle>
                <ButtonCloseCart>
                </ButtonCloseCart> 
                {cartItems && cartItems.map((cartItems: IDataProduct) => (
                  <CartItems key={cartItems.id} data={cartItems} />
                   ))}
            </CartItemsStyle>

            <CartResume>
                <h3>Total dos Produtos R$ <span>{totalAmount}</span></h3>
                 <RemoveAllItems onClick={handleRemoveAllItems}>
                  Remover todos produtos
                  <Trash size={20} color="#ffffff" />
                </RemoveAllItems>
            </CartResume>

            <CartCheckout>
              <ButtonCheckout onClick={handleContinueToPayment}>
              Finalizar Compra
              </ButtonCheckout>
            </CartCheckout>
            
        </ContainerCart>
                   
        </>
    )
}