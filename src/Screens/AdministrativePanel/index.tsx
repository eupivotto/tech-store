import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthContextData } from '../../contexts/Auth';
import { NavBar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { adminpanelproductapi, adminpanelusersapi, adminpanelpedidoapi } from '../../services/api';
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

type Order = {
  id: number;
  user_id: string;
  amount: string;
};

export const AdministrativePanel = () => {
  const { userAdminPanel } = useContext<AuthContextData>(AuthContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [showProducts, setShowProducts] = useState(true);
  const [showUsers, setShowUsers] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  useEffect(() => {
    handleReset();
  }, []);

  const handleReset = () => {
    setShowProducts(false);
    setShowUsers(false);
    setShowOrders(false);
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

  const loadOrders = async () => {
    try {
      const response = await adminpanelpedidoapi.get('/');
      const ordersData: Order[] = response.data.map((order: any) => ({
        id: order.id,
        user_id: order.user_id,
        amount: order.amount,
      }));
      setOrders(ordersData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (showOrders) {
      loadOrders();
    }
  }, [showOrders]);

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

  const handleDeleteOrder = async (orderId: number) => {
    try {
      await adminpanelpedidoapi.delete(`delete/${orderId}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditProduct = async (productId: number, updatedProduct: Partial<Product>) => {
    try {
      await adminpanelproductapi.put(`update/${productId}`, updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) => (product.id === productId ? { ...product, ...updatedProduct } : product))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditUser = async (userId: number, updatedUser: Partial<User>) => {
    try {
      await adminpanelusersapi.put(`update/${userId}`, updatedUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === userId ? { ...user, ...updatedUser } : user))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditOrder = async (orderId: number, updatedOrder: Partial<Order>) => {
    try {
      await adminpanelpedidoapi.put(`update/${orderId}`, updatedOrder);
      setOrders((prevOrders) =>
        prevOrders.map((order) => (order.id === orderId ? { ...order, ...updatedOrder } : order))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductClick = () => {
    setShowProducts(true);
    setShowUsers(false);
    setShowOrders(false);
  };

  const handleUserClick = () => {
    setShowProducts(false);
    setShowUsers(true);
    setShowOrders(false);
  };

  const handleOrderClick = () => {
    setShowProducts(false);
    setShowUsers(false);
    setShowOrders(true);
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
              <button type="button" onClick={handleOrderClick}>Pedidos</button>
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
                      <EditButton
                        type="button"
                        onClick={() => handleEditProduct(product.id, {
                          name: 'Novo nome',
                          price: 99.99,
                          brand: 'Nova marca',
                        })}
                      >
                        Editar
                      </EditButton>
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
                      <EditButton
                        type="button"
                        onClick={() => handleEditUser(user.id, {
                          name: 'Novo nome',
                          email: 'novoemail@example.com',
                          contato: 'Novo contato',
                        })}
                      >
                        Editar
                      </EditButton>
                      <DeleteButton type="button" onClick={() => handleDeleteUser(user.id)}>Excluir</DeleteButton>
                    </ProductActions>
                  </ProductItem>
                ))}
              </ProductContainer>
            )}

            {showOrders && (
              <ProductContainer>
                <ProductHeader>
                  <p style={{ flexBasis: '25%' }}>Id usuario</p>
                  <p style={{ flexBasis: '25%' }}>Quantia</p>
                  <p style={{ flexBasis: '25%' }}>Ações</p>
                </ProductHeader>
                {orders.map((order) => (
                  <ProductItem key={order.id}>
                    <ProductInfo>
                      <p style={{ flexBasis: '25%' }}>{order.user_id}</p>
                      <p style={{ flexBasis: '25%' }}>{order.amount}</p>
                    </ProductInfo>
                    <ProductActions>
                      <EditButton
                        type="button"
                        onClick={() => handleEditOrder(order.id, {
                          user_id: 'Novo ID de usuário',
                          amount: 'Nova quantia',
                        })}
                      >
                        Editar
                      </EditButton>
                      <DeleteButton type="button" onClick={() => handleDeleteOrder(order.id)}>Excluir</DeleteButton>
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
