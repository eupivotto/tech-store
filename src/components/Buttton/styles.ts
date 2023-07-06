import styled from 'styled-components';

export const Button = styled.button`
 
   
 background: #000;
    border-radius: 5px;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #FFFFFF;
    border: none;
    padding: 8px 68px;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }

    &:not(:disabled):hover {
        opacity: 0.9;
    }
`