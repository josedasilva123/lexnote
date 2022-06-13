import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/LeXNoteLogo.svg";
import { ThemeButton } from "../../style/buttons";
import { Container } from "../../style/global";
import { StyledHeader } from "./style";

const Header = ({ setLogin }) => {
  return (
    <StyledHeader>
      <Container>
        <img src={Logo} alt="LextNote Logo" />
        <Link to="/">
          <ThemeButton buttonSize="sm" buttonStyle="outline">
            Sair
          </ThemeButton>
        </Link>
      </Container>
    </StyledHeader>
  );
};

export default Header;
