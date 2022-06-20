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

    form {
      width: 100%;
      & > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .buttonGrid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          button {
            width: 100%;
          }
        }
      }
      .error{
        font-family: Montserrat;
        margin-top: .4rem;
        color: red;
      }
    }

    @media (max-width: 420px){
        padding: 2rem 1rem;
    }
  }
  
`;
