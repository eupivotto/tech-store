import  LogoPng from '../../assets/img/logotech.png'
import { NavLink } from 'react-router-dom'
import {HeaderNav, ContentLinks, CartUser, LogoTech} from './styles'
import { CartButton } from '../CartButton'

import { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth'


export const NavBar = () => {

    const { authenticated, user } = useContext(AuthContext);
    const isAdmin = user?.isAdmin || false;

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
                    {isAdmin && (
                    <NavLink to="/admin" title="Admin">
                        <span>Painel Administrativo</span>
                    </NavLink>
                    )}   
                </nav>
                
            </ContentLinks>
                <CartUser>
                    <CartButton/>
                    <NavLink to="/login" title='Login'>
                        <span>Login</span>
                        
                    </NavLink>                       
                </CartUser>                       
        </HeaderNav>
    )
}