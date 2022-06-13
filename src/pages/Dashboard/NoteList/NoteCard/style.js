import styled from "styled-components";

export const StyledNoteCard = styled.li`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1.2rem 3.2rem 1.5rem 1.5rem;

    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0px 12px 12px 0px;
    border-left: 4px solid var(--Blue);

    .remove{
        position: absolute;
        cursor: pointer;

        top: 1.1.rem;
        right: 1.5rem;

        opacity: .5;

        transition: .3s;
        &:hover{
            opacity: 1;
        }
    }

    &:nth-child(even){
        border-left-color: var(--Yellow);
    }
`