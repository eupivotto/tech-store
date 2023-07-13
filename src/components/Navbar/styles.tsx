import styled from 'styled-components'



export const HeaderNav = styled.header`
width: 100%;
height: 3.75rem;
display: flex;
align-items: center;
justify-content: space-between;
background-color:#000;
padding: 0px 7.5rem;

@media (max-width: 768px) {
    padding: 0 1rem;

}
`
export const LogoTech = styled.img`
width: 10.5625rem;
height: 1.375rem;

@media (max-width: 768px) {
    width: 8rem; 
  }


`
export const ContentLinks = styled.div`
display: flex;
align-items: center;
gap: 3.5rem;

nav{
    display: flex;
    align-items: center;
    gap: 3.125rem;
}

a {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    color: var(--blue-300);
    text-decoration: none;
    gap: 4px;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

    @media (max-width: 768px) {
      display: none;
    }


}

a:after {
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    
}

a:hover{
    transform:scale(1.25,1.25);
}


`
export const CartUser = styled.div`
display: flex;
align-items: center;
gap: 40px;

a {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    color: var(--blue-300);
    text-decoration: none;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    
    @media (max-width: 768px) {
      display: none; /* Oculta o link "Login" em telas menores */
    }

    }
    


a:hover{
transform:scale(1.25,1.25);
}

`