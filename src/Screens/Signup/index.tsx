interface AuthContextData {
  authenticated: boolean;
  user: IUserSignup | null,
  userLogin: (email: string, password: string) => void,
  userSignup:(
    email:string,
    nome:string,
    telefone:string,
    bairro:string,
    rua:string,
    cep:string,
    complemento:string)=> void
  userLogout: () => void
}

type IUserSignup = {
  nome: string;
  bairro: string;
  rua: string;
  cep: string;
  complemento: string;
  telefone: string;
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

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [cep, setCep] = useState('');
  const [complemento, setComplemento] = useState('');
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
    localStorage.setItem('@userInfo', JSON.stringify({ emailUser: data.email,nomeUser:data.nome,telefoneUser:data.telefone,bairroUser:data.bairro,ruaUser:data.rua,cepUser:data.cep,complementoUser:data.complemento}));
    navigate('/Signup');
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
      const { nome, telefone, email, bairro, rua, cep, complemento } = JSON.parse(cachedValues);
      setNome(nome);
      setTelefone(telefone);
      setEmail(email);
      setBairro(bairro);
      setRua(rua);
      setCep(cep);
      setComplemento(complemento);
    }
  }, []);

    // Limpar valores do formulário

  const handleSalvarClick = () => {
    setNome('');
    setTelefone('');
    setEmail('');
    setBairro('');
    setRua('');
    setCep('');
    setComplemento('');
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
                      placeholder="Digite o nome do usuário..."
                      type="text"
                      {...register('nome')}
                    />
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>Telefone</label>
                    <input
                      placeholder="Digite o telefone..."
                      type="text"
                      {...register('telefone')}
                    />
                    <p>{errors.telefone?.message}</p>
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
                      {...register('bairro')}
                    />
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>Rua</label>
                    <input
                      placeholder="Digite a rua..."
                      type="text"
                      {...register('rua')}
                    />
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>CEP</label>
                    <input
                      placeholder="Digite o CEP..."
                      type="text"
                      {...register('cep')}
                    />
                    <p>{errors.cep?.message}</p>
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>Complemento</label>
                    <input
                      placeholder="Digite o complemento..."
                      type="text"
                      {...register('complemento')}
                    />
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
