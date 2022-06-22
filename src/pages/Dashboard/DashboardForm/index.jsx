import React, { useState } from "react";
import { ThemeButton } from "../../../style/buttons";
import {
  ThemeAlert,
  ThemeForm,
  ThemeInput,
  ThemeInputLabel,
  ThemeTextarea,
} from "../../../style/form";
import { ThemeParagraph, ThemeTitle } from "../../../style/typography";
import { StyledDashboardForm } from "./styles";

import { useInput, useForm } from "lx-react-form";

const DashboardForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);

  const title = useInput({
    name: "title",
  });

  const text = useInput({
    name: "text",
  });

  const form = useForm({
    clearFields: true,
    formFields: [title, text],
    submitCallback: (formData) => {
      console.log(formData);
    }
  })

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

      <ThemeForm onSubmit={form.handleSubmit}>
        <div className="inputBox">
          <ThemeInputLabel htmlFor={title.inputProps.name}>Título</ThemeInputLabel>
          <ThemeInput name="titulo" {...title.inputProps} />
          {title.error && <p className="error">{title.error}</p>}
        </div>

        <div className="inputBox">
          <ThemeInputLabel htmlFor={text.inputProps.name}>Mensagem</ThemeInputLabel>
          <ThemeTextarea name="mensagem" {...text.inputProps}/>
          {text.error && <p className="error">{text.error}</p>}
        </div>

        {sucess && <ThemeAlert alertType="sucess">Nota criada com sucesso!</ThemeAlert>}
        {error && <ThemeAlert alertType="error">{error}</ThemeAlert>}

        <ThemeButton disabled={loading} buttonSize="lg" buttonStyle="solid">
          {loading ? 'Enviando...' : 'Enviar'}
        </ThemeButton>
        
      </ThemeForm>
    </StyledDashboardForm>
  );
};

export default DashboardForm;
