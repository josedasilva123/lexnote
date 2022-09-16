import React, { useState } from "react";

import { ThemeButton } from "../../style/buttons";
import { ThemeAlert, ThemeForm, ThemeInput } from "../../style/form";
import { Container } from "../../style/global";
import { ThemeLabel, ThemeTitle } from "../../style/typography";

import { StyledFormBox } from "./style";

import { MdArrowBack } from "react-icons/md";

import { Link } from "react-router-dom";

import { useForm, useInput } from "lx-react-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { useNavigate } from "react-router-dom";
 
const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);

  const { userCreate } = useContext(UserContext);

  const navigate = useNavigate(); 


  const name = useInput({
    name: "name",
  });

  const email = useInput({
    name: "email",
    validation: "email",
  });

  const password = useInput({
    name: "password",
    customValidations: [
      {
        regex: /^(?=.*?[a-z])/,
        error: "deve conter pelo menos 01 letra minúscula (a-z)",
      },
      {
        regex: /^(?=.*?[A-Z])/,
        error: "deve conter pelo menos 01 letra maúscula (A-Z)",
      },
      {
        regex: /^(?=.*?[0-9])/,
        error: "deve conter pelo menos 01 numero (0-9)",
      }
    ],
  });

  const confirm = useInput({
    name: "confirm",    
  });

  // Função envio de formulário em submitCallback
  const form = useForm({
    formFields: [name, email, password, confirm],
    submitCallback: (formData) => {
        userCreate(formData, setLoading, setError, 
          (response) => {
          setSucess(response.message); 
          setTimeout(() => {
            setSucess(false);
            navigate('/');
          }, 3000)
        });
    },
  });

  return (
    <Container>
      <StyledFormBox>
        <div className="formContainer">
          <div className="topGrid">
            <Link to="/">
              <ThemeButton buttonStyle="outline" buttonSize="sm">
                <MdArrowBack size={21} />
                Voltar
              </ThemeButton>
            </Link>
          </div>

          <ThemeForm onSubmit={form.handleSubmit}>
            <ThemeTitle tag="h2" titleSize="title2">
              Dados cadastrais
            </ThemeTitle>
            <div className="inputBox">
              <ThemeLabel color="--White" htmlFor={name.inputProps.name}>Nome</ThemeLabel>
              <ThemeInput type="text" {...name.inputProps} />
              {name.error && <p className="error">{name.error}</p>}
            </div>
            <div className="inputBox">
              <ThemeLabel color="--White" htmlFor={email.inputProps.name}>E-mail</ThemeLabel>
              <ThemeInput type="email" {...email.inputProps} />
              {email.error && <p className="error">{email.error}</p>}
            </div>

            <div className="inputBox">
              <ThemeLabel color="--White" htmlFor={password.inputProps.name}>Senha</ThemeLabel>
              <ThemeInput type="password" {...password.inputProps} />
              {password.error && <p className="error">{password.error}</p>}
            </div>

            <div className="inputBox">
              <ThemeLabel color="--White" htmlFor={confirm.inputProps.name}>Confirmar Senha</ThemeLabel>
              <ThemeInput type="password" {...confirm.inputProps} />
              {confirm.error && <p className="error">{confirm.error}</p>}
            </div>

            {sucess && <ThemeAlert alertType="sucess">Cadastro efetuado com sucesso!</ThemeAlert>}
            {error && <ThemeAlert alertType="error">{error}</ThemeAlert>}

            <div className="buttonGrid">
              <ThemeButton disabled={loading} buttonStyle="solid" buttonSize="lg" type="submit">
                {loading ? 'Enviando...' : 'Enviar'}
              </ThemeButton>
            </div>
          </ThemeForm>
        </div>
      </StyledFormBox>
    </Container>
  );
};

export default Register;
