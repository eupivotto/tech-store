interface RouteParams {
  id: string;
  [key: string]: string | undefined
}

import { IDataProductId } from '../../services/types';

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
       ContainerButtons,
       CategoryProduct

} from "./styles"
import { ButtonPrimary } from '../../components/Buttton';




export const SingleProduct:  React.FC = () => {

  const { id } = useParams<RouteParams>();
  const [product, setProduct] = useState<IDataProductId | null>(null)
  

  useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await api.get(`/${id}`)
          
          const dataProduct: IDataProductId = response.data
          setProduct(dataProduct)       
          console.log(dataProduct)
        } catch (error) {
          console.log('Erro ao obter detalhes do produto:', error)
        }
      };
      
      fetchProduct()
    }, [id])
  
    

  return(
    <>
    <NavBar />
    <ContainerHome>
      <ContainerProduct>
        <div>
          
          <ImageProduct src={product?.image} alt={product?.title} />
        </div>
        <div>
          
          <TitleProduct>{product?.title}</TitleProduct>
          <DescriptionProduct>{product?.description}</DescriptionProduct>
          <PriceProduct>Preço: R$ {product?.price}</PriceProduct>
          <CategoryProduct>Categoria: {product?.category}</CategoryProduct>
          <ContainerButtons>
            <ButtonPrimary type="submit" title={'Comprar'} disabled={false} isLoading={false} />
          </ContainerButtons>
        </div>
      </ContainerProduct>
    </ContainerHome>
    <Footer />
  </>
  )


}