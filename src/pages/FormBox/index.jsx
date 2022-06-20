import React from "react";
import { ThemeButton } from "../../style/buttons";
import { ThemeInput, ThemeSelect } from "../../style/form";
import { Container } from "../../style/global";
import { ThemeLabel, ThemeTitle } from "../../style/typography";
import { StyledFormBox } from "./style";
import { useForm, useInput, useSelect } from "lx-react-form";
const FormBox = () => {
  const nome = useInput({
    name: "nome",
  });

  const email = useInput({
    name: "email",
    validation: "email",
  });

  const telefone = useInput({
    name: "telefone",
    mask: "telefone",
  });

  const area = useSelect({
    name: "area",
  });

  const senha = useInput({
    name: "senha",
    validation: "senha",
  });

  const confirmar = useInput({
    name: "confirmar",
    same: senha.value,
  });

  const form = useForm({
    stepMode: 'onChange',
    stepFields: {
      0: [nome, email, telefone, area],
      1: [senha, confirmar],
    },
    formFields: [nome, email, telefone, area, senha, confirmar],
    submitCallback: (formData) => {
      console.log(formData);
    },
  });
  return (
    <Container>
      <StyledFormBox>
        <div className="formContainer">
          <div>
            <form action="" onSubmit={form.handleSubmit}>
              {form.step === 0 && (
                <div className="step">
                  <ThemeTitle tag="h2" titleSize="title2">
                    Dados cadastrais
                  </ThemeTitle>
                  <div className="inputBox">
                    <ThemeLabel color="--White">Nome</ThemeLabel>
                    <ThemeInput type="text" {...nome.inputProps} />
                    {nome.error && <p className="error">{nome.error}</p>}
                  </div>
                  <div className="inputBox">
                    <ThemeLabel color="--White">E-mail</ThemeLabel>
                    <ThemeInput type="email" {...email.inputProps} />
                    {email.error && <p className="error">{email.error}</p>}
                  </div>
                  <div className="Telefone">
                    <ThemeLabel color="--White">Telefone</ThemeLabel>
                    <ThemeInput type="text" {...telefone.inputProps} />
                    {telefone.error && (
                      <p className="error">{telefone.error}</p>
                    )}
                  </div>
                  <div className="Telefone">
                    <ThemeLabel color="--White">Área</ThemeLabel>
                    <ThemeSelect {...area.inputProps}>
                      <option value="">Selecione uma área</option>
                      <option value="design">Design</option>
                      <option value="frontend">Front-end</option>
                      <option value="backend">Backend</option>
                    </ThemeSelect>
                    {area.error && <p className="error">{area.error}</p>}
                  </div>

                  <div className="buttonGrid">
                    <ThemeButton disabled={!form.canProceed} buttonStyle="solid" buttonSize="lg" type="button" onClick={form.nextStep}>
                      Avançar
                    </ThemeButton>
                  </div>
                </div>
              )}

              {form.step === 1 && (
                <div className="step">
                  <ThemeTitle tag="h2" titleSize="title2">
                    Crie uma senha
                  </ThemeTitle>
                  <div className="inputBox">
                    <ThemeLabel color="--White">Senha</ThemeLabel>
                    <ThemeInput type="password" {...senha.inputProps} />
                    {senha.error && <p className="error">{senha.error}</p>}
                  </div>
                  <div className="inputBox">
                    <ThemeLabel color="--White">Confirmar Senha</ThemeLabel>
                    <ThemeInput type="password" {...confirmar.inputProps} />
                    {confirmar.error && (
                      <p className="error">{confirmar.error}</p>
                    )}
                  </div>

                  <div className="buttonGrid">
                    <ThemeButton buttonStyle="outline" buttonSize="lg"  type="button" onClick={form.previousStep}>
                      Voltar
                    </ThemeButton>
                    <ThemeButton
                      buttonStyle="solid"
                      buttonSize="lg"
                      disabled={!form.canProceed}
                      type="submit"
                    >
                      Enviar
                    </ThemeButton>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </StyledFormBox>
    </Container>
  );
};

export default FormBox;
