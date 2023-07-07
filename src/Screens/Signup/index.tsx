import { useEffect, FormEvent, SetStateAction, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth';
import { NavBar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ButtonPrimary } from '../../components/Buttton';

import {
  ContainerHome,
  ContainerFormLogin,
  ContainerInputs,
  ContainerButtons,
  ContainerButtonscreate,
  ContainerHomeform,
  FormLogin,

} from './styles';

export const Signup = () => {
  const { authenticated, userSignup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [cep, setCep] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const submitCadastro = (event: FormEvent) => {
    event.preventDefault();
    console.log(email, nome, telefone, bairro, rua, cep, complemento);
    userSignup(email, nome, telefone, bairro, rua, cep, complemento);
    if (email.length && nome.length) {
      localStorage.setItem('@userInfo', JSON.stringify({ emailUser: email }));
      navigate('/Signup');
      handleSalvarClick(); // Limpar os valores após salvar
      setCadastroSucesso(true); // Exibir mensagem de sucesso
    }
  };

  useEffect(() => {
    localStorage.setItem('@signupValues', JSON.stringify({ nome, telefone, email, bairro, rua, cep, complemento }));
  }, [nome, telefone, email, bairro, rua, cep, complemento]);

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

  const handleNomeChange = (e: { target: { value: SetStateAction<string> } }) => {
    setNome(e.target.value);
  };

  const handleTelefoneChange = (e: { target: { value: SetStateAction<string> } }) => {
    setTelefone(e.target.value);
  };

  const handleEmailChange = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
  };

  const handleBairroChange = (e: { target: { value: SetStateAction<string> } }) => {
    setBairro(e.target.value);
  };

  const handleRuaChange = (e: { target: { value: SetStateAction<string> } }) => {
    setRua(e.target.value);
  };

  const handleCepChange = (e: { target: { value: SetStateAction<string> } }) => {
    setCep(e.target.value);
  };

  const handleComplementoChange = (e: { target: { value: SetStateAction<string> } }) => {
    setComplemento(e.target.value);
  };

  const handleSalvarClick = () => {
    setNome('');
    setTelefone('');
    setEmail('');
    setBairro('');
    setRua('');
    setCep('');
    setComplemento('');
  };

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
                <FormLogin onSubmit={submitCadastro}>
                  <h1>Cadastro de Usuário</h1>

                  <ContainerInputs>
                    <label>Nome</label>
                    <input
                      placeholder="Digite o nome do produto..."
                      type="text"
                      value={nome}
                      onChange={handleNomeChange}
                    />
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>Telefone</label>
                    <input
                      placeholder="Digite o telefone..."
                      type="text"
                      value={telefone}
                      onChange={handleTelefoneChange}
                    />
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>Email</label>
                    <input
                      placeholder="Digite o email..."
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>Bairro</label>
                    <input
                      placeholder="Digite o bairro..."
                      type="text"
                      value={bairro}
                      onChange={handleBairroChange}
                    />
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>Rua</label>
                    <input
                      placeholder="Digite a rua..."
                      type="text"
                      value={rua}
                      onChange={handleRuaChange}
                    />
                  </ContainerInputs>

                  <ContainerInputs>
                    <label>CEP</label>
                    <input
                      placeholder="Digite o CEP..."                
                      type="text"
                      value={cep}
                      onChange={handleCepChange}
                    />
                  </ContainerInputs>
    
                  <ContainerInputs>
                    <label>Complemento</label>
                    <input
                      placeholder="Digite o complemento..."
                      type="text"
                      value={complemento}
                      onChange={handleComplementoChange}
                    />
                  </ContainerInputs>
    
                  <ContainerButtons>
                  
                  <ButtonPrimary type="submit" title={'Salvar'} isLoading={false} />
                  
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
      <Footer />
    </>
    );
  };
