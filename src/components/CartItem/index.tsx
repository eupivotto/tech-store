import { IDataProduct } from '../../services/types';


interface ICartItemProps {
    data: IDataProduct;
  }



import { Trash } from 'phosphor-react'


import { ContainerCartItems,
         CartItemImg,
         CartInfo,   


} from './styles'

export const CartItems: React.FC<ICartItemProps> = ({ data }) => {

    const {image, title, price} = data


    return (
        <>
        
        <ContainerCartItems>
            <CartItemImg src= {image} alt="" />

            
            <CartInfo>
                <h3> {title} </h3>
                <h2> {price} </h2>
                <button type="button">
                <Trash size={20} color="#3168c8" />
                </button>

            </CartInfo>
        </ContainerCartItems>
        
        </>
    )
}