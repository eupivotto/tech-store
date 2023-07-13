interface IDataProduct {
category: string;
description: string;
id: number;
price: number;
image: string;
title: string;
rating: unknown;

}


import { NavBar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { useState, useEffect} from 'react'

import {Slider} from '../../components/Slider'
import Brands from '../../assets/img/brands.png'


import {
         ContainerBody,
         ContainerBrands,
         ContainerSlider,
         ImageProduct,
         PriceProduct,
         TextDescription,
         TitleProduct,
         ContainerProductsUl,
         LiProduct,
         
         
         } 
         from './styles'


    


export const Home = () => {

    //Variavel para link da API
    const linkGetProducts = 'https://fakestoreapi.com/products?limit=10'
    const [posts, setPosts] = useState<IDataProduct[]>([])
    

    //Consumindo a API utilizando o Axios e resgatando os dados atrves do data 
    const handleGetProducts = (): void => {
      api.get(linkGetProducts)
        .then((response) => {
          const dataProduct: IDataProduct[] = response.data;
          setPosts(dataProduct)
        })
        .catch((error) => {
          console.log('Erro ao listar produtos:', error)
        })
    }



    useEffect(() => {
        handleGetProducts()
    }, [])

    return(
        <>
        
        <NavBar />
        <ContainerBody>
      <h1>Os Melhores Produtos com Ofertas Imbatíveis!</h1>
      <p>Entregamos para todo o Brasil, com pagamento facilitado, atendimento especializado e compra 100% segura!</p>
      
      
      <ContainerSlider>
        <Slider />
      </ContainerSlider>

     
      <ContainerBrands>
        <img src={Brands} alt="brands" />
      </ContainerBrands>

      
      <h1>Os Mais Vendidos</h1>
      {posts.length > 0 && (
          <ContainerProductsUl>
            {posts.map((product) => (
              <LiProduct key={product.id}>
                <Link to={`/product/${product.id}`}>
                <div>
                  <TitleProduct>{product.title}</TitleProduct>
                  <TextDescription>{product.description}</TextDescription>
                  <ImageProduct src={product.image} alt={product.title} />
                  <PriceProduct>R$ {product.price}</PriceProduct>
                </div>
                </Link>
              </LiProduct>
            ))}
          </ContainerProductsUl>
        )}

      

    </ContainerBody>

    <Footer/>
        </>
    )

    }

