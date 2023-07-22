// Importações das bibliotecas e componentes
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthContextData } from '../../contexts/Auth';
import { NavBar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { CustomerPageclientapi, CustomerPagepageorderapi, CustomerPagepageeditapi } from '../../services/api';
import Modal from 'react-modal';
import axios from 'axios';

// Importação dos estilos
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
  customModalStyles,
} from './style';

// Definição dos tipos de dados
type User = {
  id: number;
  name: string;
  email: string;
  contato: string;
  Adress: string;
  road: string;
  Zipcode: string;
  password: string;
};

type Order = {
  id: number;
  user_id: number;
  amount: number;
};

// Página do cliente
export const CustomerPage = () => {
  // Obtendo os dados do usuário logado do contexto de autenticação
  const { userCustomerPage } = useContext<AuthContextData>(AuthContext);
  const navigate = useNavigate();

  // Estados para guardar os dados dos usuários, pedidos e controle de exibição
  const [users, setUsers] = useState<User[]>([]);
  const [showUsers, setShowUsers] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState<User>({
    id: 0,
    name: '',
    email: '',
    contato: '',
    Adress: '',
    road: '',
    Zipcode: '',
    password: '',
  });
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [orders, setOrders] = useState<Order[]>([]);
  const [showOrders, setShowOrders] = useState(false);
  const [loading, setLoading] = useState(false);

  // Função para redefinir o estado e carregar os usuários quando o componente é montado
  useEffect(() => {
    handleReset();
  }, []);

  // Função para abrir o modal de edição do usuário
  const handleOpenModal = (user: User) => {
    setSelectedUser(user);
    setNewUser(user);
    setShowModal(true);
  };

  // Função para fechar o modal de edição do usuário
  const handleCloseModal = () => {
    setShowModal(false);
    setNewUser({
      id: 0,
      name: '',
      email: '',
      contato: '',
      Adress: '',
      road: '',
      Zipcode: '',
      password: '',
    });
    setSelectedUser(null);
  };

  // Função para atualizar os estados dos campos do formulário
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Função para redefinir o estado de exibição dos usuários
  const handleReset = () => {
    setShowUsers(false);
  };

  // Função para carregar os usuários a partir da API
  const loadUsers = async () => {
    try {
      const response = await CustomerPageclientapi.get('/');
      const usersData: User[] = response.data.map((user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        contato: user.contato,
        Adress: user.Adress,
        road: user.road,
        Zipcode: user.Zipcode,
        password: user.password,
      }));
      setUsers(usersData);
    } catch (error) {
      console.error(error);
    }
  };

  // Efeito para carregar os usuários quando o estado showUsers é atualizado
  useEffect(() => {
    if (showUsers) {
      loadUsers();
    }
  }, [showUsers]);

  // Função para excluir um usuário a partir do ID
  const handleDeleteUser = async (userId: number) => {
    try {
      await CustomerPageclientapi.delete(`delete/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error(error);
    }
  };

  // Função para criar um novo usuário
  const handleCreateUser = async () => {
    try {
      await CustomerPageclientapi.post('/', newUser);
      loadUsers();
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  // Função para editar um usuário existente
  const handleEditUser = async (updatedUser: Partial<User>) => {
    try {
      if (!selectedUser) return;

      setLoading(true);
      await CustomerPagepageeditapi.put(`/${selectedUser.id}`, updatedUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === selectedUser.id ? { ...user, ...updatedUser } : user))
      );
      setLoading(false);
      handleCloseModal();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // Função para exibir a lista de usuários
  const handleUserClick = () => {
    setShowUsers(true);
    setShowOrders(false);
  };

  // Função para carregar os pedidos a partir do ID do usuário
  const loadOrders = async (userId: number) => {
    try {
      const response = await CustomerPagepageorderapi.get(`?user_id=${userId}`);
      const ordersData: Order[] = response.data;
      setOrders(ordersData);
    } catch (error) {
      console.error(error);
    }
  };

  // Função para exibir a lista de pedidos
  const handleOrdersClick = async (userId: number) => {
    await loadOrders(userId);
    setShowUsers(false);
    setShowOrders(true);
  };

  return (
    <>
      {/* Componentes da interface */}
      <NavBar />
      <ContainerHome>
        <ContainerHomeform>
          <ContainerFormLogin>
            <ContainerTitulo>Página do cliente</ContainerTitulo>
            <ContainerSubTitulo>Bem-vindo, usuário!</ContainerSubTitulo>

            <ContainerButtons>
              <button type="button" onClick={handleUserClick}>
                Usuário
              </button>
              <button type="button" onClick={() => handleOrdersClick(userCustomerPage.id)}>
                Página de Pedidos
              </button>
            </ContainerButtons>

            {showUsers && (
              <ProductContainer>
                <ProductHeader>
                  <p>Nome</p>
                  <p>Email</p>
                  <p>Contato</p>
                  <p>Endereço</p>
                  <p>Rua</p>
                  <p>CEP</p>
                  <p>Senha</p>
                  <p>Ações</p>
                </ProductHeader>
                {users.map((user) => (
                  <ProductItem key={user.id}>
                    <ProductInfo>
                      <p>{user.name}</p>
                      <p>{user.email}</p>
                      <p>{user.contato}</p>
                      <p>{user.Adress}</p>
                      <p>{user.road}</p>
                      <p>{user.Zipcode}</p>
                      <p>{user.password}</p>
                    </ProductInfo>
                    <ProductActions>
                      <EditButton type="button" onClick={() => handleOpenModal(user)}>
                        Editar
                      </EditButton>
                      <DeleteButton type="button" onClick={() => handleDeleteUser(user.id)}>
                        Excluir
                      </DeleteButton>
                    </ProductActions>
                  </ProductItem>
                ))}
              </ProductContainer>
            )}

            {showOrders && (
              <ProductContainer>
                <ProductHeader>
                  <p>ID Usuário</p>
                  <p>Quantidade</p>
                  <p>Ações</p>
                </ProductHeader>
                {orders.map((order) => (
                  <ProductItem key={order.id}>
                    <ProductInfo>
                      <p>{order.user_id}</p>
                      <p>{order.amount}</p>
                    </ProductInfo>
                    <ProductActions>
                      {/* Ações para os pedidos, se necessário */}
                    </ProductActions>
                  </ProductItem>
                ))}
              </ProductContainer>
            )}
          </ContainerFormLogin>
        </ContainerHomeform>
      </ContainerHome>
      <Footer />

      {/* Modal de edição do usuário */}
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={customModalStyles}
        contentLabel="Editar Usuário"
      >
        <h2>Editar Usuário</h2>
        <form>
          <div>
            <label>Nome:</label>
            <input type="text" name="name" value={newUser.name} onChange={handleInputChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={newUser.email} onChange={handleInputChange} />
          </div>
          <div>
            <label>Contato:</label>
            <input type="text" name="contato" value={newUser.contato} onChange={handleInputChange} />
          </div>
          <div>
            <label>Endereço:</label>
            <input type="text" name="Adress" value={newUser.Adress} onChange={handleInputChange} />
          </div>
          <div>
            <label>Rua:</label>
            <input type="text" name="road" value={newUser.road} onChange={handleInputChange} />
          </div>
          <div>
            <label>CEP:</label>
            <input type="text" name="Zipcode" value={newUser.Zipcode} onChange={handleInputChange} />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <button type="button" onClick={() => handleEditUser(newUser)} disabled={loading}>
          Salvar
        </button>
        <button type="button" onClick={handleCloseModal}>
          Cancelar
        </button>
      </Modal>
    </>
  );
};
