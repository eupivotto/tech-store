interface IDataProduct {
    category: string;
    description: string;
    id: number;
    price: number;
    image: string;
    title: string;
    
    }


import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/Navbar";
import { Pagination } from "../../components/Pagination";
import { Category } from '../../components/Categories';
import { CaretDoubleRight } from 'phosphor-react'

import { ContainerHome,
         ContainerProductsUl,
         LiProduct,
         TitleProduct,
         ImageProduct,
         PriceProduct,
         ContainerTitle,
         ContainerFilters,
         DivPagination,
         DivCategory

} from "./styles";




export const Shop = () => {

    //Variavel para link da API
    const linkGetProducts = 'https://fakestoreapi.com/products'
    
    //hooks 
    const [posts, setPosts] = useState<IDataProduct[]>([])
    const [ intensPerPage ] = useState(10) //useState para exibir 10 posts por pagina
    const [ currentPage, setCurrentPage] = useState(0) // comecando na pagina 0
    const [selectedCategory, setSelectedCategory] = useState<string>("")
  
  

    const pages =  Math.ceil(posts.length / intensPerPage) // usando o Math.ceil para nao deixar numreros quebrados 
    const startIndex = currentPage * intensPerPage
    const endIndex = startIndex + intensPerPage
    const currentItens = posts.slice (startIndex, endIndex)

    

    //Consumindo a API utilizando o Axios e resgatando os dados atrves do data 
    const handleGetProducts = async (category: string) => {
      try {
        let url = linkGetProducts
        if (category) {
          url += `?category=${category}`
        }

        const response = await api.get(url)
        const dataProduct: IDataProduct[] = response.data

        //filtrando os produtos baseado em categorias
        const filteredProducts = category && category !== "todos" ? dataProduct.filter(product => product.category === category) : dataProduct;
        setPosts(filteredProducts)

      } catch (error) {
        console.log('Erro ao listar produtos:', error)
      }
    }

    
    console.log('Current Items:', currentItens);


    useEffect(() => {
        handleGetProducts('')
    }, [])



    return(
        <>
        <NavBar/>
        <ContainerHome>
        
        <ContainerTitle>
            <h1>Nossos Produtos</h1>
            <p>Confira nesta seção, todos os nosso produtos</p>
        </ContainerTitle>
        

        <h1>Todos os Produtos</h1>
        <ContainerFilters>
          <DivPagination>
            <CaretDoubleRight size={20} color="#fff" />
            <Pagination pages={pages} setCurrentPage={setCurrentPage}/>
          </DivPagination>
          <DivCategory>
          <Category handleGetProducts={handleGetProducts} />
          </DivCategory>
        </ContainerFilters>
        

      {posts.length > 0 && (
          <ContainerProductsUl>
            {currentItens.map((product) => (
              <LiProduct key={product.id}>
                <div>
                  <TitleProduct>{product.title}</TitleProduct>
                  <ImageProduct src={product.image} alt={product.title} />
                  <PriceProduct>R$ {product.price}</PriceProduct>
                </div>
              </LiProduct>
            ))}
          </ContainerProductsUl>
        )}

        </ContainerHome>
        <Footer/>
        </>
    )
}