import React from "react";
import { ThemeButton } from "../../../style/buttons";
import {
  ThemeInput,
  ThemeInputLabel,
  ThemeTextarea,
} from "../../../style/form";
import { ThemeParagraph, ThemeTitle } from "../../../style/typography";
import { StyledDashboardForm } from "./styles";

const DashboardForm = () => {
  return (
    <StyledDashboardForm>
      <div className="content">
        <ThemeTitle titleSize="title3" tag="h2">
          Insira uma anotação
        </ThemeTitle>
        <ThemeParagraph>
          Preencha os campos abaixo para adicionar uma nota
        </ThemeParagraph>
      </div>

      <form>
        <ThemeInputLabel htmlFor="titulo">Título</ThemeInputLabel>
        <ThemeInput name="titulo" />

        <ThemeInputLabel htmlFor="mensagem">Mensagem</ThemeInputLabel>
        <ThemeTextarea name="mensagem" />

        <ThemeButton buttonSize="lg" buttonStyle="solid">
          Enviar
        </ThemeButton>
      </form>
    </StyledDashboardForm>
  );
};

export default DashboardForm;
