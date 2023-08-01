import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
:root{

    --blue-200: #8bb5fe;
    --blue-300: #3168c8;
    --blue-400: #313ea0;
    --white:#fff;
    --black:#000;



}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
}





.react-modal-panel {
  color: var(--blue-300);
  padding: 0px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

    h2 {
        color: var(--blue-300);
    }

    
}

.react-modal-iputs {
    margin: 1.375rem 0;
    width: 455px;
    flex-shrink: 0;
    padding: 0 15px;
}

.button-modal-add{

  width: 120px;
  height: 30px;  
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background-color: #000;
  border-radius: 6px;
  border:none;

}
.button-modal-cancel{

  width: 120px;
  height: 30px;  
  margin-top: 10px;
  margin-bottom: 6px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background-color: red;
  border-radius: 6px;
  border:none;

}

.react-modal-content {

    width: 100%;
    max-width: 600px;
    background-color: #fff;
    padding: 10px;
    position: relative;
    border-radius: 0.25rem;


    input {
    margin: 10px 0;
    width: 355px;
    height: 25px;
    /* flex-shrink: 0; */
    padding: 0 15px;
    }
}

.react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }
}

`