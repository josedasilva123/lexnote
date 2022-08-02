import React from "react";
import { useContext } from "react";

import Logo from "../../assets/LeXNoteLogo.svg";
import { NotesContext } from "../../contexts/NotesContext";
import { UserContext } from "../../contexts/UserContext";
import { ThemeButton } from "../../style/buttons";
import { Container } from "../../style/global";
import { StyledHeader } from "./style";

const Header = ({userLogout}) => {
  const { setNotes } = useContext(NotesContext);

  function handleLogout(){
    userLogout(() => {
      setNotes([]);
    })
  }

  return (
    <StyledHeader>
      <Container>
        <img src={Logo} alt="LextNote Logo" />
          <ThemeButton buttonSize="sm" buttonStyle="outline" onClick={() => handleLogout()}>
            Sair
          </ThemeButton>
      </Container>
    </StyledHeader>
  );
};

export default Header;
