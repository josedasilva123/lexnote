import styled from 'styled-components';

export const StyledLogin = styled.section`
    justify-content: center;
    min-height: 100vh;
    padding: 4rem 0;

    & > div{
        gap: 3rem;
        @media (min-width: 1024px){
            align-items: center;
            flex-direction: row;
        }
    }

    .content{
        gap: 3rem;
    }

    .text{
        gap: .8rem;
    }

    .button-grid{
        button{
            width: 100%;
            @media (min-width: 420px){
                width: unset;
            }
        }
    }
    
    .image-grid{
        align-items: center;
    }
`