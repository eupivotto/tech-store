import styled from "styled-components"


export const ContainerModal = styled.div`
  h2 {
        color: var(--blue-400);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 0.25rem;
        background:var(--blue-300);

        border: 1px solid #d7d7d7;
        background: var(--bue400);

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--blue-300);
        }

        /* All input before, have margin-top */
        /* Todo input que tiver antes dele, tenha margin-top */
        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        background: var(--blue-300);
        color: #FFF;
        font-weight: 600;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`
  
  
