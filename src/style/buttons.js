import styled, { css } from "styled-components";

export const ThemeButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 700;

  border-radius: 255px;
  
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s;

  //Tamanhos
  ${(props) => {
    switch (props.buttonSize) {
      case "lg":
        return css`
          padding: 0 3rem;
          height: 58px;
        `;

      case "sm":
        return css`
          padding: 0 2rem;
          height: 31px;
          @media (min-width: 1024px){
            padding: 0 3rem;
            height: 42px;
          }
        `;

      default:
        return false;
    }
  }}

  //Estilos
  ${(props) => {
    switch (props.buttonStyle) {
      case "solid":
        return css`
          color: var(--White);
          background: var(--Blue);
          border: 1px solid var(--Blue);
          &:hover {
            filter: brightness(1.1);
          }
          &:disabled{
            cursor: not-allowed;
            opacity: .5;
            &:hover{
              filter: unset;
            }
          }
        `;
      case "outline":
        return css`
          color: var(--White);
          background: transparent;
          border: 1px solid var(--Blue);
          &:hover {
            background: var(--Blue);
          }
        `;
      default:
        return false;
    }
  }}
`;

export const ThemeLink = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    text-decoration: underline;
    font-weight: 700;
    color: var(--Blue);
    &:hover{
      filter: brightness(1.2);
    }
`
