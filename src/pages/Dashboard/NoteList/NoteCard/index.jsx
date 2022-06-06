import React from 'react'
import { ThemeParagraph, ThemeTitle } from '../../../../style/typography'
import { MdDelete } from 'react-icons/md';
import { StyledNoteCard } from './style';

const NoteCard = ({ title, text }) => {
  return (
    <StyledNoteCard>
        <button className="remove" aria-label="remove">
            <MdDelete size={21} color="var(--White)" />
        </button>
        <ThemeTitle tag="h3" titleSize="title3">Título da anotação</ThemeTitle>
        <ThemeParagraph opacity=".9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque, libero et pretium mollis, metus ipsum egestas ipsum, eu ullamcorper tellus quam at libero. Aliquam iaculis tempor enim sit amet luctus. Etiam fermentum enim orci, et interdum lacus consectetur in. </ThemeParagraph>
    </StyledNoteCard>
  )
}

export default NoteCard