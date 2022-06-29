/* eslint-disable no-restricted-globals */
import React from 'react'

import { ThemeParagraph, ThemeTitle } from '../../../../style/typography'

import { MdDelete } from 'react-icons/md';

import { StyledNoteCard } from './style';
import { useContext } from 'react';
import { NotesContext } from '../../../../contexts/NotesContext';



const NoteCard = ({ id, title, text, setError }) => {
  const { noteDelete } = useContext(NotesContext);
  function handleDelete(){
    if(confirm("Você deseja mesmo excluir esta nota?")){
      noteDelete(id, setError);
    }    
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