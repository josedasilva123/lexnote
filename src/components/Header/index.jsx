import React, { useContext } from "react";

import Logo from "../../assets/LeXNoteLogo.svg";
import { NotesContext } from "../../contexts/NotesContext";
import { UserContext } from "../../contexts/UserContext";
import { ThemeButton } from "../../style/buttons";
import { Container } from "../../style/global";
import { StyledHeader } from "./style";

const Header = () => {
  const { userLogout } = useContext(UserContext);
  const { setNotes } = useContext(NotesContext);

  return (
    <StyledHeader>
      <Container>
        <img src={Logo} alt="LextNote Logo" />
          <ThemeButton buttonSize="sm" buttonStyle="outline" onClick={() => userLogout(() =>  setNotes(null))}>
            Sair
          </ThemeButton>
      </Container>
    </StyledHeader>
  );
};

export default Header;
