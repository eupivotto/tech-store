import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthContextData } from '../../contexts/Auth';
import { NavBar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { adminpanelproductapi } from '../../services/api';
import {
  ContainerHome,
  ContainerFormLogin,
  ContainerButtons,
  ContainerHomeform,
  ContainerTitulo,
  ContainerSubTitulo,
  ProductContainer,
  ProductHeader,
  ProductItem,
  ProductInfo,
  ProductActions,
  DeleteButton,
  EditButton,
} from './style';

type Product = {
  id: number;
  name: string;
  price: number;
  brand: string;
};

// ...imports

export const AdministrativePanel = () => {
  // ...rest of the code

  const [products, setProducts] = useState<Product[]>([]);
  const [showProductItems, setShowProductItems] = useState(false);

  useEffect(() => {
    const cachedValues = localStorage.getItem('@adminPanelValues');
    if (cachedValues) {
      const { name } = JSON.parse(cachedValues);
      setName(name);
    }
  }, []);

  const loadProducts = async () => {
    try {
      const response = await adminpanelproductapi.get('/');
      const productsData: Product[] = response.data.map((product: any) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        brand: product.brand,
      }));
      setProducts(productsData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDeleteProduct = async (productId: number) => {
    try {
      await adminpanelproductapi.delete(`delete/${productId}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductClick = () => {
    loadProducts();
    setShowProductItems(!showProductItems);
  };

  return (
    <>
      <NavBar />
      <ContainerHome>
        <ContainerHomeform>
          <ContainerFormLogin>
            <ContainerTitulo>Painel Administrativo</ContainerTitulo>
            <ContainerSubTitulo>Bem-vindo, admin!</ContainerSubTitulo>

            <ContainerButtons>
              <button type="button" onClick={handleProductClick}>Produto</button>
              <button type="button">Usuário</button>
              <button type="button">Pedidos</button>
              <button type="button">Adicionar Novo</button>
            </ContainerButtons>

            <ProductContainer>
              <ProductHeader>
                <p style={{ flexBasis: '25%' }}>Nome</p>
                <p style={{ flexBasis: '25%' }}>Preço</p>
                <p style={{ flexBasis: '25%' }}>Marca</p>
                <p style={{ flexBasis: '25%' }}>Ações</p>
              </ProductHeader>

              {showProductItems && products.map((product) => (
                <ProductItem key={product.id}>
                  <ProductInfo>
                    <p style={{ flexBasis: '25%' }}>{product.name}</p>
                    <p style={{ flexBasis: '25%' }}>{product.price}</p>
                    <p style={{ flexBasis: '25%' }}>{product.brand}</p>
                  </ProductInfo>
                  <ProductActions>
                    <EditButton type="button">Editar</EditButton>
                    <DeleteButton type="button" onClick={() => handleDeleteProduct(product.id)}>Excluir</DeleteButton>
                  </ProductActions>
                </ProductItem>
              ))}
            </ProductContainer>
          </ContainerFormLogin>
        </ContainerHomeform>
      </ContainerHome>
      <Footer />
    </>
  );
};
