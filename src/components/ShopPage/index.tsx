interface IDataProduct {
    category: string;
    description: string;
    id: number;
    price: number;
    image: string;
    title: string;
    
    }

import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useCart } from '../../contexts/Cartcontext'
import { CaretDoubleRight } from 'phosphor-react'
import { ShoppingCart } from 'phosphor-react'
import { Loading } from '../Loading'

import { api } from "../../services/api"
import { Pagination } from "../../components/Pagination"
import { Category } from '../../components/Categories'

import OfferImg  from '../../assets/img/offer.jpg'


import { ContainerHome,
         ContainerProductsUl,
         LiProduct,
         TitleProduct,
         ImageProduct,
         PriceProduct,
         ContainerTitle,
         ContainerFilters,
         DivPagination,
         DivCategory,
         BoxIcon,
         ButtonCartCard

} from "./styles";





export const ShopPage = () => {

    //Variavel para link da API
    const linkGetProducts = 'https://fakestoreapi.com/products'
    
    
    //hooks 
    const [posts, setPosts] = useState<IDataProduct[]>([])
    const [ intensPerPage ] = useState(10) //useState para exibir 10 posts por pagina
    const [ currentPage, setCurrentPage] = useState(0) // comecando na pagina 0
    const [loading, setLoading] = useState (true)
    const { addToCart } = useCart()
    
   
  
  

    const pages =  Math.ceil(posts.length / intensPerPage) // usando o Math.ceil para nao deixar numreros quebrados 
    const startIndex = currentPage * intensPerPage
    const endIndex = startIndex + intensPerPage
    const currentItens = posts.slice (startIndex, endIndex)

    

    //Consumindo a API utilizando o Axios e resgatando os dados atrves do data 
    const handleGetProducts = (category: string): Promise<void> => {
           
        let url = linkGetProducts
        if (category) {
          url += `?category=${category}`
        }

        return api.get(url)
        .then(response => {
         const dataProduct: IDataProduct[] = response.data
    

        //filtrando os produtos baseado em categorias
        const filteredProducts = category && category !== "todos" ? dataProduct.filter(product => product.category === category) : dataProduct;
        setPosts(filteredProducts)       
        
      })
      
      .catch((error) => {
        console.log('Erro ao listar produtos:', error);
        throw error;
      });
    }

      

    useEffect(() => {
        handleGetProducts('')
        setLoading(false)
    }, [])



    return(
        <>

        <ContainerHome>
        
        <ContainerTitle>
            <BoxIcon src={OfferImg} alt="icon" />
        </ContainerTitle>
        

        <h1>Produtos em Oferta</h1>
        <ContainerFilters>
          <DivPagination>
            <CaretDoubleRight size={20} color="#fff" />
            <Pagination pages={pages} setCurrentPage={setCurrentPage}/>
          </DivPagination>
          <DivCategory>
          <Category handleGetProducts={handleGetProducts} />
          </DivCategory>
        </ContainerFilters>
        

        {loading ? (
        <Loading />
        ) : (
        posts.length > 0 && (
            <ContainerProductsUl>  
              {posts.map((product) => (
                <LiProduct key={product.id}>
                  
                  <div>
                  <Link to={`/product/${product.id}`}>
                    <TitleProduct>{product.title}</TitleProduct>
                    <ImageProduct src={product.image} alt={product.title} />
                  </Link>
                    <PriceProduct>R$ {product.price}</PriceProduct>
                    <ButtonCartCard>
                      <button type="button" onClick={() => addToCart(product)}>
                       <p>Adicionar ao Carrinho</p> 
                      <ShoppingCart size={25} color="#9cc0ff" />
                      </button>
                    </ButtonCartCard>
                  </div>
                  
                </LiProduct>
              ))}
            </ContainerProductsUl>
        )
     )}

        </ContainerHome>
 
        </>
    )
}