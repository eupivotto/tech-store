import { IDataProduct } from "../../services/types"
import { useContext } from "react"
import { useCart, CartContext } from '../../contexts/Cartcontext'
import { CartItems } from "../../components/CartItem"
import { Trash } from 'phosphor-react'



import { 
         ContainerCart,
         CartItemsStyle,
         CartResume,
         RemoveAllItems,
         CartCheckout,
         ButtonCheckout
   
} from "./styles"




export const Cart = () => {
    // const { cartItems } = useCart()
    const { cartItems, setCartItems } = useContext(CartContext)
  

    //Calculando total de itens do carrinho usando o reduce 
    const totalPrice = cartItems.reduce ((acc, item) => {
        return item.price + acc
    },0)

    const handleRemoveAllItems = () => {
        setCartItems([]);
      };

      const handleContinueToPayment = () => {
        // Lógica para continuar para a página de pagamento
      }



    return (
        <>
         
         
            <ContainerCart>

            <CartItemsStyle>
            {cartItems && cartItems.map((cartItems: IDataProduct) => (
              <CartItems key={cartItems.id} data={cartItems} />
            ))}
            </CartItemsStyle>
            <CartResume>
            <h3>Total dos Produtos R$ <span>{totalPrice}</span></h3>
            <RemoveAllItems onClick={handleRemoveAllItems}>
            Remover todos produtos
            <Trash size={20} color="#ffffff" />
            </RemoveAllItems>
            </CartResume>
            <CartCheckout>
            <ButtonCheckout>Finalizar Compra</ButtonCheckout>
            </CartCheckout>
               
            </ContainerCart>


      
        
        </>
    )
}