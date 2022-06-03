import React from 'react'
import Logo from '../../assets/LeXNoteLogo.svg'
import { ThemeButton } from '../../style/buttons'
import { Container } from '../../style/global'
import { StyledHeader } from './style'

const Header = () => {
  return (
    <StyledHeader>
        <Container>
            <img src={Logo} alt="LextNote Logo" />
            <ThemeButton buttonSize="sm" buttonStyle="outline">Sair</ThemeButton>
        </Container>
    </StyledHeader>
  )
}

export default Header