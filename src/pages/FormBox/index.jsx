import React from "react";
import { ThemeButton } from "../../style/buttons";
import { ThemeInput, ThemeSelect } from "../../style/form";
import { Container } from "../../style/global";
import { ThemeLabel, ThemeTitle } from "../../style/typography";
import { StyledFormBox } from "./style";

const FormBox = () => {
  return (
    <Container>
      <StyledFormBox>
        <div className="formContainer">
          <div>
            <form action="">
              <div className="step">
                <ThemeTitle tag="h2" titleSize="title2">Dados cadastrais</ThemeTitle>
                <div className="inputBox">
                  <ThemeLabel color="--White">Nome</ThemeLabel>
                  <ThemeInput type="text" />
                </div>
                <div className="inputBox">
                  <ThemeLabel color="--White">E-mail</ThemeLabel>
                  <ThemeInput type="email" />
                </div>
                <div className="Telefone">
                  <ThemeLabel color="--White">Telefone</ThemeLabel>
                  <ThemeInput type="text" />
                </div>
                <div className="Telefone">
                  <ThemeLabel color="--White">Área</ThemeLabel>
                  <ThemeSelect>
                    <option value="">Selecione uma área</option>
                    <option value="design">Design</option>
                    <option value="frontend">Front-end</option>
                    <option value="backend">Backend</option>
                  </ThemeSelect>
                </div>

                <div className="buttonGrid">
                    <ThemeButton buttonStyle="solid" buttonSize="lg">Avançar</ThemeButton>
                </div>
              </div>

              <div className="step">
                <ThemeTitle tag="h2" titleSize="title2">Crie uma senha</ThemeTitle>
                <div className="inputBox">
                  <ThemeLabel color="--White">Senha</ThemeLabel>
                  <ThemeInput type="password" />
                </div>
                <div className="inputBox">
                  <ThemeLabel color="--White">Confirmar Senha</ThemeLabel>
                  <ThemeInput type="password" />
                </div>

                <div className="buttonGrid">
                    <ThemeButton buttonStyle="outline" buttonSize="lg">Voltar</ThemeButton>
                    <ThemeButton buttonStyle="solid" buttonSize="lg" type="submit">Enviar</ThemeButton>
                </div>
              </div>  
            </form>
          </div>
        </div>
      </StyledFormBox>
    </Container>
  );
};

export default FormBox;
