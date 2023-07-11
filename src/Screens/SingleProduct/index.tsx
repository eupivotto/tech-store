interface RouteParams {
    id: string;
    [key: string]: string | undefined
  }

  interface IDataProduct {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  }

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'

import { Footer } from "../../components/Footer"
import { NavBar } from "../../components/Navbar"

import { ContainerHome, 
         ContainerProduct,
         TitleProduct,
         ImageProduct,
         PriceProduct,
         DescriptionProduct,
         CategoryProduct,
         ContainerButtons

} from "./styles"
import { ButtonPrimary } from '../../components/Buttton';




export const SingleProduct:  React.FC = () => {

    const { id } = useParams<RouteParams>();
    const [product, setProduct] = useState<IDataProduct | null>(null)

    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await api.get(`/${id}`)
            const dataProduct: IDataProduct = response.data
            setProduct(dataProduct)
          } catch (error) {
            console.log('Erro ao obter detalhes do produto:', error)
          }
        };
    
        fetchProduct()
      }, [id])
    
      if (!product) {
        return <div>Carregando...</div> //  outra forma de indicar o carregamento
      }

    return(
        <>
        <NavBar/>
        <ContainerHome>
            <ContainerProduct>

                <div>
            <ImageProduct src={product.image} alt={product.title} />
                </div>

                <div>
            <TitleProduct>{product.title}</TitleProduct>
            <DescriptionProduct>{product.description}</DescriptionProduct>
            <CategoryProduct>Categoria: {product.category}</CategoryProduct>
            <PriceProduct>Preço: R$ {product.price}</PriceProduct>
            <ContainerButtons>
                    <ButtonPrimary type="submit" title={'Comprar'} disabled = {false} isLoading = {false} />
            </ContainerButtons>
               </div>
            
               
                
            </ContainerProduct>
        </ContainerHome>
        <Footer/>
        </>
    )


}