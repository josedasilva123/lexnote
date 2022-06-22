import styled from "styled-components";

export const StyledLogin = styled.section`
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 0;

  & > div {
    gap: 3rem;
    @media (min-width: 1024px) {
      align-items: center;
      flex-direction: row;
    }
  }

  .content {
    align-items: center;
    max-width: 400px;
    gap: 3rem;
    @media (max-width: 1024px){
        display: flex;
        max-width: unset;   
    }    
  }

  .formBox {    
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    gap: 1rem;

    @media (max-width: 1024px){
        max-width: 480px;   
    }
  }

  .registerBox{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    p{
        width: 100%;
        text-align: center;
    }
  }

  .image-grid {
    align-items: center;
  }
`;
