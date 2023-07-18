import { IDataProduct } from '../../services/types';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cartcontext';


interface ICartItemProps {
    data: IDataProduct;
  }



import { Trash } from 'phosphor-react'


import { ContainerCartItems,
         CartItemImg,
         CartInfo,
      


} from './styles'


export const CartItems: React.FC<ICartItemProps> = ({ data }) => {

    const {id, image, title, price} = data

    const { cartItems, setCartItems } = useContext(CartContext)
    const handleRemoveItem = () =>{

     const updateCartItems = cartItems.filter((item) => item.id != id)
     setCartItems(updateCartItems)
        
    }
    
   
    return (
        <>
        
        <ContainerCartItems>
            <CartItemImg src= {image} alt="" />

            
            <CartInfo> 

                <h3> {title} </h3>
                <h2> {price} </h2>
                <button type="button" onClick={handleRemoveItem}>
                <Trash size={20} color="#ffffff" />
                </button>
               
            </CartInfo>
        </ContainerCartItems>
        
        </>
    )
}