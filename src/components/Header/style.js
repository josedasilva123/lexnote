import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    border-bottom: 1px solid rgba(217, 217, 217, 0.5);

    & > div{
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      padding: 1rem; 
      gap: 2rem;
    }
`