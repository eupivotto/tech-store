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





.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    /* overlay occupying all screen  */
    /* Ocupando tela toda o overlay */
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    /* White box of the modal stay always in the middle */
    /* Box branco do modal ficar sempre no meio */
    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--blue-300);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
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