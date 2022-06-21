import styled from "styled-components";

export const StyledFormBox = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  .formContainer {
    max-width: 600px;
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid var(--White);

    @media (max-width: 420px){
        padding: 2rem 1rem;
    }
  }

  .topGrid{
    align-items: flex-end;
    justify-content: flex-end;
    margin-bottom: .6rem;
  }
  
`;
