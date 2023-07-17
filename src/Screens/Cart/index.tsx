import { IDataProduct } from "../../services/types"
import { useCart } from '../../contexts/Cartcontext'



import { CartItems } from "../../components/CartItem"


import { 
         ContainerCart,
         CartItemsStyle,
         CartResume
} from "./styles"




export const Cart = () => {
    const { cartItems } = useCart()
    //Calculando total de itens do carrinho usando o reduce 
    const totalPrice = cartItems.reduce ((acc, item) => {
        return item.price + acc
    },0)


    return (
        <>
         
         
            <ContainerCart>

            <CartItemsStyle>
            {cartItems && cartItems.map((cartItems: IDataProduct) => (
              <CartItems key={cartItems.id} data={cartItems} />
            ))}
            </CartItemsStyle>
            <CartResume>
            {totalPrice}
            </CartResume>

            </ContainerCart>


      
        
        </>
    )
}