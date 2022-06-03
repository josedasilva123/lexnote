import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --Black: #0D0D0D;
        --Black2: #1F1F1F;
        --White: #fff; 
        --Blue: #1882FF;
        --Yellow: #D7FA00;
    }

    button{
        cursor: pointer;
        border: 0;
        background: transparent;
    }

    ul, ol, li{
        list-style: none;
    }
    
    img{
        max-width: 100%;
    }

    section, aside, div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
    body{
        background: var(--Black);
    }

`

export const Container = styled.div`
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 1rem;
`