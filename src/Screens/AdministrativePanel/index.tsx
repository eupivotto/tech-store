// Importando os módulos e componentes necessários
import { useEffect, useState } from 'react';
import { IDataProduct } from '../../services/types';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../contexts/Auth'; // Importando o contexto de autenticação
// import { AuthContextData } from '../../services/types';
import { NavBar } from '../../components/Navbar'; // Importando o componente de barra de navegação
import { Footer } from '../../components/Footer'; // Importando o componente do rodapé
import { adminpanelproductapi, adminpanelusersapi, adminpanelpedidoapi, adminpanelcrateprodutoapi } from '../../services/api'; // Importando as APIs para ações no painel administrativo
import Modal from 'react-modal'; // Importando o componente do modal

// Importando os estilos do componente
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
  EditButton,
  DeleteButton,
  customModalStyles, // Importando a estilização do modal
} from './styles';


// Definindo os tipos de dados utilizados no componente
type Product = {
  id: number;
  name: string;
  price: number;
  brand: string;
  model: string;
  description: string;
  image: string;
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

// Definindo o componente do Painel Administrativo
export const AdministrativePanel = () => {
  // const { userAdminPanel } = useContext<AuthContextData>(AuthContext); // Obtendo os dados do usuário administrador do contexto
  // const navigate = useNavigate(); // Utilizando a função de navegação

  // Definindo os estados do componente
  
  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [showProducts, setShowProducts] = useState(true);
  const [showUsers, setShowUsers] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  // Efeito para executar a função de reinicialização ao montar o componente
  useEffect(() => {
    handleReset();
  }, []);

  // Definindo os estados e funções para controle do modal de adição de produtos
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    name: '',
    price: 0,
    brand: '',
    model: '',
    description: '',
    image: '',
  });

  // Função para abrir o modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Função para fechar o modal e limpar o estado do novo produto
  const handleCloseModal = () => {
    setShowModal(false);
    setNewProduct({
      id: 0,
      name: '',
      price: 0,
      brand: '',
      model: '',
      description: '',
      image: '',
    });
  };

  // Função para atualizar o estado do novo produto de acordo com os campos do formulário
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === 'price' ? parseFloat(value) : value,
    }));
  };

  // Função para redefinir a visualização de produtos, usuários e pedidos
  const handleReset = () => {
    setShowProducts(false);
    setShowUsers(false);
    setShowOrders(false);
  };

  // Função para carregar os produtos da API
  const loadProducts = async () => {
    try {
      const response = await adminpanelproductapi.get('/');
      const productsData: Product[] = response.data.map((product: IDataProduct) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        brand: product.brand,
        model: product.model,
        description: product.description,
        image: product.image,
      }));
      setProducts(productsData);
    } catch (error) {
      console.error(error);
    }
  };

  // Efeito para carregar os produtos ao mostrar a visualização de produtos
  useEffect(() => {
    if (showProducts) {
      loadProducts();
    }
  }, [showProducts]);

  // Função para carregar os usuários da API
  const loadUsers = async () => {
    try {
      const response = await adminpanelusersapi.get('/');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const usersData: User[] = response.data.map((user:any) => ({
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

  // Efeito para carregar os usuários ao mostrar a visualização de usuários
  useEffect(() => {
    if (showUsers) {
      loadUsers();
    }
  }, [showUsers]);

  // Função para carregar os pedidos da API
  const loadOrders = async () => {
    try {
      const response = await adminpanelpedidoapi.get('/');
      const ordersData: Order[] = response.data.map((order: Order) => ({
        id: order.id,
        user_id: order.user_id,
        amount: order.amount,
      }));
      setOrders(ordersData);
    } catch (error) {
      console.error(error);
    }
  };

  // Efeito para carregar os pedidos ao mostrar a visualização de pedidos
  useEffect(() => {
    if (showOrders) {
      loadOrders();
    }
  }, [showOrders]);

  // Função para excluir um produto
  const handleDeleteProduct = async (productId: number) => {
    try {
      await adminpanelproductapi.delete(`delete/${productId}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    } catch (error) {
      console.error(error);
    }
  };

  // Função para excluir um usuário
  const handleDeleteUser = async (userId: number) => {
    try {
      await adminpanelusersapi.delete(`delete/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  // Função para excluir um pedido
  const handleDeleteOrder = async (orderId: number) => {
    try {
      await adminpanelpedidoapi.delete(`delete/${orderId}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
    } catch (error) {
      console.error(error);
    }
  };

  // Função para criar um novo produto
  const handleCreateProduct = async () => {
    try {
      await adminpanelcrateprodutoapi.post('/', newProduct);
      // Recarregar os produtos para atualizar a lista na tela
      loadProducts();
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  // Função para editar um produto
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

  // Função para editar um usuário
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

  // Função para editar um pedido
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

  // Funções para alterar a visualização de produtos, usuários e pedidos
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
              <button type="button" onClick={handleOpenModal}>Adicionar Novo</button>
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
                          model: 'Novo modelo',
                          description: 'Nova descrição',
                          image: 'Nova imagem',
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
      {/* Modal para adicionar novo produto */}
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={customModalStyles} // Estilo do modal
        contentLabel="Adicionar Novo Produto"
      >
        <div className='react-modal-panel'>
        <h2>Adicionar Novo Produto</h2>
        <form className='react-modal-content'>
          <div>
            <label> Nome:  </label>
            <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
          </div>
          <div>
            <label>Preço:  </label>
            <input type="number" step="0.01" name="price" value={newProduct.price} onChange={handleInputChange} />
          </div>
          <div>
            <label>Marca:  </label>
            <input type="text" name="brand" value={newProduct.brand} onChange={handleInputChange} />
          </div>
          <div>
            <label>Modelo: </label>
            <input type="text" name="model" value={newProduct.model} onChange={handleInputChange} />
          </div>
          <div>
            <label>Descrição:   </label>
            <input type="text" name="description" value={newProduct.description} onChange={handleInputChange} />
          </div>
          <div>
            <label>Imagem:</label>
            <input type="text" name="image" value={newProduct.image} onChange={handleInputChange} />
          </div>
        </form>
        <button className='button-modal-add' type="button" onClick={handleCreateProduct}>Adicionar</button>
        <button  className='button-modal-cancel' type="button" onClick={handleCloseModal}>Cancelar</button>
        </div>              
      </Modal>
    </>
  );
};
