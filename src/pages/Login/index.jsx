import React from "react";

import { Link } from "react-router-dom";

import LoginImage from "../../assets/VectorLogin.svg";

import { ThemeButton, ThemeLink } from "../../style/buttons";
import { Container } from "../../style/global";
import { ThemeLabel, ThemeParagraph, ThemeTitle } from "../../style/typography";
import { ThemeInput, ThemeForm } from "../../style/form";

import { StyledLogin } from "./style";

import { useInput, useForm } from "lx-react-form";


const Login = () => {
  const email = useInput({
    name: "email",
  });

  const password = useInput({
    name: "password",
  });

  const form = useForm({
    formFields: [email, password],
    submitCallback: (formData) => {
      console.log(formData);
    },
  });

  return (
    <StyledLogin>
      <Container>
        <div className="content">
          <div className="formBox">
            <ThemeTitle titleSize="title2" tag="h1">
              Login LexNote
            </ThemeTitle>

            <ThemeForm onSubmit={form.handleSubmit}>
              <div className="inputBox">
                <ThemeLabel color="--White" htmlFor={email.inputProps.name}>E-mail</ThemeLabel>
                <ThemeInput
                  placeholder="E-mail"
                  type="email"
                  {...email.inputProps}
                />
                {email.error && (
                  <p aria-label="error" className="error">
                    {email.error}
                  </p>
                )}
              </div>

              <div className="inputBox">
                <ThemeLabel color="--White" htmlFor={password.inputProps.name}>Senha</ThemeLabel>
                <ThemeInput
                  placeholder="Senha"
                  type="password"
                  {...password.inputProps}
                />
                {password.error && (
                  <p aria-label="error" className="error">
                    {password.error}
                  </p>
                )}
              </div>

              <div className="buttonGrid">
                <ThemeButton type="submit" buttonSize="lg" buttonStyle="solid">
                  Entrar
                </ThemeButton>
              </div>
            </ThemeForm>

            <div className="registerBox">
              <ThemeParagraph>Ainda não tem uma conta?</ThemeParagraph>
              <Link to="/register">
                <ThemeLink>Cadastre-se</ThemeLink>
              </Link>
            </div>
          </div>
        </div>
        <div className="image-grid">
          <img src={LoginImage} alt="Imagem de Login" />
        </div>
      </Container>
    </StyledLogin>
  );
};

export default Login;
