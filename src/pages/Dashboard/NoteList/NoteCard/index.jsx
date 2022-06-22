/* eslint-disable no-restricted-globals */
import React from 'react'

import { ThemeParagraph, ThemeTitle } from '../../../../style/typography'

import { MdDelete } from 'react-icons/md';

import { StyledNoteCard } from './style';



const NoteCard = ({ id, title, text }) => {
  function handleDelete(){
    console.log(id);
    /* Haverá um handle delete */
  }

  return (
    <StyledNoteCard>
        <button className="remove" aria-label="remove">
            <MdDelete size={21} color="var(--White)" onClick={handleDelete}/>
        </button>
        <ThemeTitle tag="h3" titleSize="title3">{title}</ThemeTitle>
        <ThemeParagraph opacity=".9">{text}</ThemeParagraph>
    </StyledNoteCard>
  )
}

export default NoteCard