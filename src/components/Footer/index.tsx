import  LogoPng from '../../assets/img/logotech.png'
import { InstagramLogo, FacebookLogo, WhatsappLogo} from 'phosphor-react'
import { NavLink } from 'react-router-dom'




import {
    ContainerFooter,
    ContainerInputFooter,
    FormFooter,
    LogoTech,
    ContainerIccons,
    MenuFooter,
    CopyrigthDiv
} from './styles'


export const Footer = () => {
    return (
        <>
        <ContainerFooter>
        <ContainerInputFooter>
          <h1>Fique por Dentro!</h1>
          <p>Cadastre-se e receba nossas promoções.</p>
          <FormFooter>
            {/* <label>Digite seu Email...</label> */}
            <input type="text" value="Digite seu Email..." />
          </FormFooter>
          <LogoTech src={LogoPng} alt="" />
          <ContainerIccons>
            <InstagramLogo size={25} color="#3168c8" />
            <FacebookLogo size={25} color="#3168c8" />
            <WhatsappLogo size={25} color="#3168c8" />
          </ContainerIccons>
        </ContainerInputFooter>
        <MenuFooter>
          <nav>
          <h2>Loja</h2>
          <NavLink to="/" title='Home'>
                        <p>Notebboks</p>
                    </NavLink>
                    <NavLink to="/shop" title='Shop'>
                        <p>Acessórios</p>
                    </NavLink>
                    <NavLink to="/contact" title='Contact'>
                        <p>Placas de vídeo</p>
                    </NavLink>   
          </nav>
        </MenuFooter>
        <MenuFooter>
          <nav>
          <h2>Suporte</h2>
          <NavLink to="/" title='Home'>
                        <p>Págia de suporte</p>
                    </NavLink>
                    <NavLink to="/shop" title='Shop'>
                        <p>Entre e contato com o suporte</p>
                    </NavLink>
                    <NavLink to="/contact" title='Contact'>
                        <p>Perguntas Frequentes</p>
                    </NavLink>   
          </nav>
        </MenuFooter>
        <MenuFooter>
          <nav>
          <h2>Recursos</h2>
          <NavLink to="/" title='Home'>
                        <p>Meios de pagamento</p>
                    </NavLink>
                    <NavLink to="/shop" title='Shop'>
                        <p>Frete e prazo de entrega</p>
                    </NavLink>
                    <NavLink to="/contact" title='Contact'>
                        <p>Devoluções</p>
                    </NavLink>   
          </nav>
        </MenuFooter>
      </ContainerFooter>
      
      <CopyrigthDiv>
          <h4>Copyright ©2023 - Todos os direitos reservados - <span>Tech Store</span></h4>
      </CopyrigthDiv>

      </>
      
    )
  

}

