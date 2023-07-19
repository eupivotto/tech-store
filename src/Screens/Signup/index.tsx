interface AuthContextData {
  authenticated: boolean;
  user: IUserSignup | null,
  userLogin: (email: string, password: string) => void,
  userSignup:(
    email:string,
    name:string,
    telephone:string,
    road:string,
    Adress:string,
    Zipcode:string,
    password:string)=> void
  userLogout: () => void
}

type IUserSignup = {
  name: string;
  road: string;
  Adress: string;
  Zipcode: string;
  password: string;
  contato: string;
  email: string;
};

import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth';
import { NavBar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ButtonPrimary } from '../../components/Buttton';
import { useForm } from 'react-hook-form';
import { LoginFormSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { resgisterSignup } from '../../services/login.service';


/* import {NewModal} from '../../components/NewModal' */
import {
  ContainerHome,
  ContainerFormLogin,
  ContainerInputs,
  ContainerButtons,
  ContainerButtonscreate,
  ContainerHomeform,
  FormLogin,
} from './styles';


type ZLoginForm = z.infer<typeof LoginFormSchema>;

  // Contexto e Navegação

export const Signup = () => {
  const { userSignup } = useContext <AuthContextData>(AuthContext);
  const navigate = useNavigate();

// Variáveis de estado

  const [name, setName] = useState('');
  const [contato, setContato] = useState('');
  const [email, setEmail] = useState('');
  const [road, setRoad] = useState('');
  const [Adress, setAdress] = useState('');
  const [Zipcode, setZipcode] = useState('');
  const [password, setPassword] = useState('');
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  // Validação do formulário

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm<ZLoginForm>({
    resolver: zodResolver(LoginFormSchema),
  });

   // Envio do formulário

  const submitCadastro = async (data: ZLoginForm) => {
    userSignup(data);
try {
  await resgisterSignup(data);
  
  userSignup(data)

  if (isValid) {
    localStorage.setItem('@userInfo', JSON.stringify({ data }));
    navigate('/');
    handleSalvarClick(); // Limpar os valores após salvar
    setCadastroSucesso(true); // Exibir mensagem de sucesso
  }
} catch (error) {
  
  console.error(error);
}
   
  };

  
   // Carregar valores armazenados em cache ao carregar a página

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

    // Limpar valores do formulário

  const handleSalvarClick = () => {
    setName('');
    setContato('');
    setEmail('');
    setRoad('');
    setAdress('');
    setZipcode('');
    setPassword('');
  };

    // formulario TSX
    
  return (
    <>
      <NavBar />
      <ContainerHome>
        <ContainerHomeform>
          <ContainerFormLogin>
            {cadastroSucesso ? (
              <h2>Usuário cadastrado com sucesso!</h2>
            ) : (
              <>
                <FormLogin onSubmit={handleSubmit(submitCadastro)}>
                  <h1>Cadastro de Usuário</h1>

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
                    <ButtonPrimary type="submit" title="Salvar" disabled={isSubmitting} isLoading={false} />
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

{/*       <NewModal isOpen={true} contentLabelText='modal new Sales' onRequestClose={() => {}} titleModal='Cadastrar Usuário' handleSubmitFormModal={() => console.log('teste')}>
                   
                
</NewModal>
 */}
     
      <Footer />

    </>
     
  );
};
