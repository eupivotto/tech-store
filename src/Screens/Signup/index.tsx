// Importando os hooks e componentes necessários
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth'; // Importando o contexto de autenticação
import { AuthContextData } from '../../services/types';
import { NavBar } from '../../components/Navbar'; // Importando o componente da barra de navegação
import { Footer } from '../../components/Footer'; // Importando o componente do rodapé
import { ButtonPrimary } from '../../components/Buttton'; // Importando o componente do botão primário
import { useForm } from 'react-hook-form'; // Importando o hook do formulário
import { LoginFormSchema } from './schema.signup'; // Importando o schema de validação do formulário
import { zodResolver } from '@hookform/resolvers/zod'; // Importando o resolver do Zod para o react-hook-form
import * as z from 'zod'; // Importando a biblioteca Zod para validação de esquemas
import { resgisterSignup } from '../../services/signup.service'; // Importando o serviço de cadastro de usuário

import {
    ContainerHome,
    ContainerFormLogin,
    ContainerInputs,
    ContainerButtons,
    ContainerButtonscreate,
    ContainerHomeform,
    FormLogin,
  } from './styles';



  // Definindo o tipo para os dados do formulário
type ZLoginForm = z.infer<typeof LoginFormSchema>;

export const Signup = () => {

    // Obtendo as funções do contexto de autenticação
  const { userSignup } = useContext<AuthContextData>(AuthContext);
  // Hook de navegação
  const navigate = useNavigate();
    // Variáveis de estado para armazenar os dados do formulário
  const [,setName ] = useState('');
  const [, setContato ] = useState('');
  const [, setEmail] = useState('');
  const [, setRoad ] = useState('');
  const [, setAdress ] = useState('');
  const [, setZipcode ] = useState(''); 
  const [, setPassword ] = useState('');
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

   // Validação e gerenciamento do formulário usando o hook do react-hook-form
   const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm<ZLoginForm>({
    resolver: zodResolver(LoginFormSchema),
  });

  const submitCadastro = async (data: ZLoginForm) => {
    userSignup(data); // Chama a função de cadastro do usuário do contexto de autenticação

    try {
        await resgisterSignup(data); // Chama o serviço de cadastro de usuário com os dados do formulário
  
        
  
        if (isValid) {
          localStorage.setItem('@userInfo', JSON.stringify({ data })); // Armazena os dados do usuário em cache após o cadastro
          navigate('/'); // Redireciona para a página principal após o cadastro
          handleSalvarClick(); // Limpa os valores do formulário após salvar
          setCadastroSucesso(true); // Exibe a mensagem de sucesso de cadastro
        }
      } catch (error) {
        console.error(error); // Exibe um erro caso ocorra algum problema no cadastro
      }
    };

    // Carrega os valores armazenados em cache ao carregar a página
  useEffect(() => {
    const cachedValues = localStorage.getItem('@signupValues');
    if (cachedValues) {
      const { name, contato, email, road, Adress, Zipcode, password } = JSON.parse(cachedValues);
      setName(name);
      setContato(contato);
      setEmail(email);
      setRoad(road);
      setAdress(Adress);
      setZipcode(Zipcode);
      setPassword(password);
    }
  }, []);

   // Limpa os valores do formulário
   const handleSalvarClick = () => {
    setName('');
    setContato('');
    setEmail('');
    setRoad('');
    setAdress('');
    setZipcode('');
    setPassword('');
  };



    return (
        <>
         
         <NavBar/>
         <ContainerHome>
        <ContainerHomeform>
          <ContainerFormLogin>
            {cadastroSucesso ? ( // Verifica se o cadastro foi realizado com sucesso para exibir a mensagem
              <h2>Usuário cadastrado com sucesso!</h2>
            ) : (
              <>
                <FormLogin onSubmit={handleSubmit(submitCadastro)}>
                  <h1>Cadastro de Usuário</h1>

                  {/* Campos do formulário */}
                  <ContainerInputs>
                    <label>Nome</label>
                    <input
                      placeholder="Digite o name do usuário..."
                      type="text"
                      {...register('name')}
                    />
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>Telefone</label>
                    <input
                      placeholder="Digite o telefone..."
                      type="text"
                      {...register('contato')}
                    />
                    <p>{errors.contato?.message}</p>
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>Email</label>
                    <input
                      placeholder="Digite o email..."
                      type="email"
                      {...register('email')}
                    />
                    <p>{errors.email?.message}</p>
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>Bairro</label>
                    <input
                      placeholder="Digite o bairro..."
                      type="text"
                      {...register('road')}
                    />
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>Rua</label>
                    <input
                      placeholder="Digite a rua..."
                      type="text"
                      {...register('Adress')}
                    />
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>CEP</label>
                    <input
                      placeholder="Digite o CEP..."
                      type="text"
                      {...register('Zipcode')}
                    />
                    <p>{errors.Zipcode?.message}</p>
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>Senha</label>
                    <input
                      placeholder="Digite a senha..."
                      type="password"
                      {...register('password')}
                    />
                      <p>{errors.password?.message}</p>
                  </ContainerInputs>

                  <ContainerButtons>
                    <ButtonPrimary type="submit" title="Cadastrar" disabled={isSubmitting} isLoading={false} />
                  </ContainerButtons>
                </FormLogin>
              </>
            )}
          </ContainerFormLogin>

          <ContainerButtonscreate>
            <a href="/">Voltar</a>
          </ContainerButtonscreate>
        </ContainerHomeform>
      </ContainerHome>
         <Footer/>
        
        </>
    )
}