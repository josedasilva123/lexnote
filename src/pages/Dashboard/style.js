import styled from "styled-components";



export const StyledMain = styled.main`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media (min-width: 900px){
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: row;
        aside{
            width: 100%;
            max-width: 420px;
        }
    }

`