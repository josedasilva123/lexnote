import styled from "styled-components";

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
