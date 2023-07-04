import  LogoPng from '../../assets/img/logotech.png'
import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {HeaderNav, ContentLinks, CartUser, LogoTech} from './styles'


export const NavBar = () => {
    return (
        <HeaderNav>
            <ContentLinks>
                <LogoTech src= {LogoPng} alt="" />

                <nav> 
                    <NavLink to="/" title='Home'>
                        <span>Home</span>
                    </NavLink>
                    <NavLink to="/shop" title='Shop'>
                        <span>Loja</span>
                    </NavLink>
                    <NavLink to="/contact" title='Contact'>
                        <span>Contato</span>
                    </NavLink>   
                </nav>
            </ContentLinks>
                <CartUser>
                    <ShoppingCart size={20} color="#3168c8" />
                    <NavLink to="/login" title='Login'>
                        <span>Login</span>
                    </NavLink>                       
                </CartUser>                       
        </HeaderNav>
    )
}