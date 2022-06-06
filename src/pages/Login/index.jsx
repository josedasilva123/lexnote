import React from "react";
import { ThemeButton } from "../../style/buttons";
import { Container } from "../../style/global";
import { ThemeLabel, ThemeParagraph, ThemeTitle } from "../../style/typography";
import LoginImage from "../../assets/VectorLogin.svg";
import { StyledLogin } from "./style";

const Login = ({setLogin}) => {
  return (
    <StyledLogin>
      <Container>
        <div className="content">
          <div className="text">
            <ThemeLabel color="--Yellow">Anote!</ThemeLabel>
            <ThemeTitle titleSize="title1" tag="h1">
              Anote suas tarefinhas para não esquecer!
            </ThemeTitle>
            <ThemeParagraph>
              Anote tudo e muito mais como LeXNote!
            </ThemeParagraph>
          </div>
          <div className="button-grid">
            <ThemeButton onClick={() => setLogin(true)} buttonSize="lg" buttonStyle="solid">
              Entrar
            </ThemeButton>
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
