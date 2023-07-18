import { ShoppingCart } from 'phosphor-react'
import { ContainerButtonCart } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Cartcontext'
import { Cart } from '../../Screens/Cart'




export const CartButton = () => {

    const {cartItems, isCartVisible, toggleCartVisibility } = useContext(CartContext)

    const handleCartButtonClick = () => {
        toggleCartVisibility()
      }

    return (
        <>
        
        <ContainerButtonCart >
        <button onClick={handleCartButtonClick}>
        <ShoppingCart size={27} color="#9cc0ff" />
        {cartItems.length > 0 && <span>{cartItems.length}</span>}
        </button>
        {isCartVisible && <Cart />}
        </ContainerButtonCart>

        
        
        
        </>


    )
}