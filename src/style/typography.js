import styled, {css} from 'styled-components';
import BaseTitle from './components/BaseTitle';

export const ThemeLabel = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(${(props) => props.color});
`

export const ThemeInputLabel = styled.label`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: var(--White);
`

export const ThemeTitle = styled(BaseTitle)`
    font-family: 'Montserrat';
    font-size: 28px;
    line-height: 1.3;
    color: var(--White);

    ${(props) => {
        switch(props.titleSize){
            case 'title1':
                return css`
                    font-size: 28px;
                    @media (min-width: 1024px){
                        font-size: 44px;
                    }
                `
            case 'title2':
                return css`
                    font-size: 22px;
                    @media (min-width: 1024px){
                        font-size: 28px;
                    }
                `
            
            case 'title3':
                return css`
                    font-size: 18px;
                `
            default:
                return false;
        }
    }}
`
export const ThemeParagraph = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    color: var(--White);
    opacity: ${(props) => props.opacity};
`
