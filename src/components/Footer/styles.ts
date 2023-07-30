import styled from "styled-components";


export const ContainerFooter = styled.div`
    width: 100%;
    height: 320px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 30px 0px 30px;
    
   
   
    @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
    

    


`
export const ContainerInputFooter = styled.div`
    width: 80%;
    /* height: 100px; */
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left: 60px;
    

    h1{
        color: var(--blue-300);
    }

    p{
        color: var(--blue-300);
    }

    @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }   

`
export const FormFooter = styled.form`
    width: 100%;
    margin-top: 20px;


    input {
        width: 80%;
        margin-top: 0.4375rem;
        background-color: transparent;
        border: 1px solid var(--blue-300);
        border-radius: 6px;
        padding: 0.5rem 0.75rem;
        font-weight: 200;
        color: var(--blue-300);
        
        
    }
   

`
export const LogoTech = styled.img`
width: 10.5625rem;
height: 1.375rem;
margin-top: 1.4375rem;



`
export const ContainerIccons = styled.div`
width: 10.5625rem;
height: 1.375rem;
margin-top: 1.4375rem;
display: flex;
gap:10px;
cursor: pointer;
transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

&:after{
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
&:hover{
    transform:scale(1.25,1.25);
    color: #fff;
}

`
        
export const MenuFooter = styled.div`
width: 80%;
display: flex;
align-items: center;
flex-direction: column;
gap: 3.5rem;

h2{
    color: var(--blue-300);
}

nav{
    display: flex;
    align-items: center;
    flex-direction: column;
    
    @media (max-width: 768px) {
      width: 100%;
    }
}

a {
    display: flex;
    align-items: center;
    font-weight: 200;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    color: var(--blue-300);
    text-decoration: none;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

    @media (max-width: 768px) {
      width: 100%;
    }

}

a:after {
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    
}

a:hover{
    transform:scale(1.25,1.25);

}

@media (max-width: 768px) {
      width: 100%;
    }



`
    
export const CopyrigthDiv = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
background-color: #000;

h4{
    color: var(--blue-400);
    font-weight: 200;
}


`
    




