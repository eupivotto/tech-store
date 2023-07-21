import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthContextData } from '../../contexts/Auth';
import { NavBar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { adminpanelproductapi } from '../../services/api'; // Importe a API correta para produtos
import {
  ContainerHome,
  ContainerFormLogin,
  ContainerButtons,
  ContainerHomeform,
  ContainerTitulo,
  ContainerSubTitulo
} from './style';

type Product = {
  id: number;
  name: string;
  // Adicione outras propriedades do produto aqui
};

export const AdministrativePanel = () => {
  const { userAdminPanel } = useContext<AuthContextData>(AuthContext);
  const navigate = useNavigate();

  

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const cachedValues = localStorage.getItem('@adminPanelValues');
    if (cachedValues) {
      const { name } = JSON.parse(cachedValues);
      setName(name);
    }
  }, []);

  // Função para carregar os produtos
  const loadProducts = async () => {
    try {
      const response = await adminpanelproductapi.get('/');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProductClick = () => {
    // Adicione a lógica para tratar o clique no botão "Produto"
    loadProducts(); // Carregar os produtos ao clicar no botão
  };

  return (
    <>
      <NavBar />
      <ContainerHome>
        <ContainerHomeform>
          <ContainerFormLogin>
          <ContainerTitulo>Painel Administrativo</ContainerTitulo>
          <ContainerSubTitulo>Bem vindo, admin!</ContainerSubTitulo>
        
            <ContainerButtons>
              <button type="button" onClick={handleProductClick}>Produto</button>
              <button type="button">Usuário</button>
              <button type="button">Pedidos</button>
              <button type="button">Adicionar Novo</button>
            </ContainerButtons>
            {/* Renderize a lista de produtos aqui */}
            <ul>
              {products.map((product) => (
                <li key={product.id}>{product.name}</li>
              ))}
            </ul>
          </ContainerFormLogin>
          {/* Resto do código */}
        </ContainerHomeform>
      </ContainerHome>
      <Footer />
    </>
  );
};

