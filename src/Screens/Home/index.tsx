
  import { IDataProduct } from '../../services/types'
  import { useCart } from '../../contexts/Cartcontext'
  


  import { NavBar } from '../../components/Navbar'
  import { Footer } from '../../components/Footer'
  import { Loading } from '../../components/Loading'
  import OfferImg  from '../../assets/img/offer.jpg'
  import { Cart } from '../../Screens/Cart'
  
  import { Link } from 'react-router-dom'
  import { api } from '../../services/api'
  import { useState, useEffect, useContext} from 'react'
  
  import {Slider} from '../../components/Slider'
  import { ShoppingCart } from 'phosphor-react'
  import Brands from '../../assets/img/brands.png'
  import { CartContext } from '../../contexts/Cartcontext'
  
  
  import {
           ContainerBody,
           ContainerBrands,
           ContainerSlider,
           ImageProduct,
           PriceProduct,
           TitleProduct,
           ContainerProductsUl,
           LiProduct,
           ButtonCartCard,
           ContainerCartHome,
           ContainerTitle,
           BoxIcon

           
           
           
           
           } 
           from './styles'
// import { ShopPage } from '../../components/ShopPage';
  
  
      
  
  
  export const Home = () => {
  
      //Variavel para link da API
      const url = 'https://fakestoreapi.com/products'
      const { addToCart } = useCart()
      const [posts, setPosts] = useState<IDataProduct[]>([])
      const [loading, setLoading] = useState (true)
      const { isCartVisible } = useContext(CartContext)
      
      
  
      //Consumindo a API utilizando o Axios e resgatando os dados atrves do data 
      const handleGetProducts = (): void => {
        api.get(url)
          .then((response) => {
            const dataProduct: IDataProduct[] = response.data;
            setPosts(dataProduct)
            setLoading(false)
          })
          .catch((error) => {
            console.log('Erro ao listar produtos:', error)
          })

      }
      
    
  
      useEffect(() => {
          handleGetProducts()
          setLoading(false)
      }, [])
  
      return(
          <>
          
          <NavBar />
         
          <ContainerBody>
        <h1>Os Melhores Produtos com Ofertas Imbatíveis!</h1>
        <p>Entregamos para todo o Brasil, com pagamento facilitado, atendimento especializado e compra 100% segura!</p>
        
        {isCartVisible && <ContainerCartHome><Cart /></ContainerCartHome>}
        
        <ContainerSlider>
          <Slider />
        </ContainerSlider>
  
       
        <ContainerBrands>
          <img src={Brands} alt="brands" />
        </ContainerBrands>
  
        
        <h1>Os Mais Vendidos</h1>
        {loading ? (
        <Loading />
        ) : (
        posts.length > 0 && (
            <ContainerProductsUl>  
              {posts.map((product) => (
                <LiProduct key={product.id}>
                  
                  <div>
                  <Link to={`/products/${product?.id}`}>
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
     
        <ContainerTitle>
            <BoxIcon src={OfferImg} alt="icon" />
        </ContainerTitle>

        <h1>Produtos em Oferta!</h1>
        {loading ? (
        <Loading />
        ) : (
        posts.length > 0 && (
            <ContainerProductsUl>  
              {posts.map((product) => (
                <LiProduct key={product.id}>
                  
                  <div>
                  <Link to={`/product/${product?.id}`}>
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
          
      </ContainerBody>
      

      
      <Footer/>
      
      
          </>
      )
  
  }
  
  