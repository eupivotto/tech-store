import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthContextData } from '../../contexts/Auth';
import { NavBar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { adminpanelproductapi, adminpanelusersapi } from '../../services/api';
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

type User = {
  id: number;
  name: string;
  email: string;
  contato: string;
};

export const AdministrativePanel = () => {
  const { userAdminPanel } = useContext<AuthContextData>(AuthContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [showProducts, setShowProducts] = useState(true);
  const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    handleReset();
  }, []);

  const handleReset = () => {
    setShowProducts(false);
    setShowUsers(false);
  };

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
    if (showProducts) {
      loadProducts();
    }
  }, [showProducts]);

  const loadUsers = async () => {
    try {
      const response = await adminpanelusersapi.get('/');
      const usersData: User[] = response.data.map((user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        contato: user.contato,
      }));
      setUsers(usersData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (showUsers) {
      loadUsers();
    }
  }, [showUsers]);

  const handleDeleteProduct = async (productId: number) => {
    try {
      await adminpanelproductapi.delete(`delete/${productId}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (userId: number) => {
    try {
      await adminpanelusersapi.delete(`delete/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductClick = () => {
    setShowProducts(true);
    setShowUsers(false);
  };

  const handleUserClick = () => {
    setShowProducts(false);
    setShowUsers(true);
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
              <button type="button" onClick={handleUserClick}>Usuário</button>
              <button type="button">Pedidos</button>
              <button type="button">Adicionar Novo</button>
            </ContainerButtons>

            {showProducts && (
              <ProductContainer>
                <ProductHeader>
                  <p style={{ flexBasis: '25%' }}>Nome</p>
                  <p style={{ flexBasis: '25%' }}>Preço</p>
                  <p style={{ flexBasis: '25%' }}>Marca</p>
                  <p style={{ flexBasis: '25%' }}>Ações</p>
                </ProductHeader>
                {products.map((product) => (
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
            )}

            {showUsers && (
              <ProductContainer>
                <ProductHeader>
                  <p style={{ flexBasis: '33.33%' }}>Nome</p>
                  <p style={{ flexBasis: '33.33%' }}>E-mail</p>
                  <p style={{ flexBasis: '33.33%' }}>Contato</p>
                  <p style={{ flexBasis: '33.33%' }}>Ações</p>
                </ProductHeader>
                {users.map((user) => (
                  <ProductItem key={user.id}>
                    <ProductInfo>
                      <p style={{ flexBasis: '33.33%' }}>{user.name}</p>
                      <p style={{ flexBasis: '33.33%' }}>{user.email}</p>
                      <p style={{ flexBasis: '33.33%' }}>{user.contato}</p>
                    </ProductInfo>
                    <ProductActions>
                      <EditButton type="button">Editar</EditButton>
                      <DeleteButton type="button" onClick={() => handleDeleteUser(user.id)}>Excluir</DeleteButton>
                    </ProductActions>
                  </ProductItem>
                ))}
              </ProductContainer>
            )}
          </ContainerFormLogin>
        </ContainerHomeform>
      </ContainerHome>
      <Footer />
    </>
  );
};

