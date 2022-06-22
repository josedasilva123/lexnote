/* eslint-disable default-case */
import styled, {css} from "styled-components";
import BaseAlert from "./components/BaseAlert";

export const ThemeInput = styled.input`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;
  height: 52px;

  background: var(--Black2);
  border: 1px solid var(--White);
  color: var(--White);

  &:focus,
  &:active {
    outline: none;
    border-color: var(--Blue);
  }
`;

export const ThemeSelect = styled.select`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;
  height: 52px;

  background: var(--Black2);
  border: 1px solid var(--White);
  color: var(--White);

  &:focus,
  &:active {
    outline: none;
    border-color: var(--Blue);
  }
`;

export const ThemeInputLabel = styled.label`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--White);
`;

export const ThemeTextarea = styled.textarea`
  padding: 1rem;

  font-family: Roboto;

  width: 100%;
  min-width: 100%;
  max-width: 100%;

  min-height: 140px;
  max-height: 200px;

  color: var(--White);
  background: var(--Black2);
  border: 1px solid var(--White);

  &:focus,
  &:active {
    outline: none;
    border-color: var(--Blue);
  }
`;

export const ThemeForm = styled.form`
  width: 100%;  

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .error {
    font-family: Roboto;
    margin-top: 0.4rem;
    color: red;
  }

  button {
    width: 100%;
  }
`;

export const ThemeAlert = styled(BaseAlert)`
  font-family: Roboto;
  width: ${(props) => props.fullWidth && "100%"};

  .message {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 0.6rem;

    padding: 1rem 1.5rem;  

    color: var(--colorBlack);

    ${(props) => {
      switch (props.alertType) {
        case "sucess":
          return css`
            border-left: 3px solid #477D62;
            background: #90FCC6;
          `;
        case "alert":
          return css`
            border-left: 3px solid #73702C;
            background: #F3F1A5;
          `;

        case "error":
          return css`
            border-left: 3px solid #F46E5F;
            background: #F3AFA8;
          `;
      }
    }}
  }
  .progressBar{
    width: 100%;
    height: 4px;

    span{
      display: flex;
      height: 4px;
      animation: barAnimation ${(props) => props.alertDuration || 3000}ms forwards;
    }

    ${(props) => {
      switch (props.alertType) {
        case "sucess":
          return css`
            background: #90FCC6;
            span{
              background: #477D62;
            }
          `;

        case "alert":
          return css`            
            background: #F3F1A5;
            span{
              background: #73702C;
            }
          `;

        case "error":
          return css`
            background: #F3AFA8;
            span{
              background: #F46E5F;
            }
          `;
      }
    }}

    @keyframes barAnimation{
      from{
        width: 100%;
      } to {
        width: 0;
      }
    }
  }
`;
