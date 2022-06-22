/* eslint-disable no-restricted-globals */
import React from 'react'
import { ThemeParagraph, ThemeTitle } from '../../../../style/typography'
import { MdDelete } from 'react-icons/md';
import { StyledNoteCard } from './style';
import { useContext } from 'react';
import { NotesContext } from '../../../../contexts/NotesContext';

const NoteCard = ({ id, title, text, setError }) => {
  const { notes, setNotes, noteDelete } = useContext(NotesContext);

  function handleDelete(){
    if(confirm("Deseja mesmo excluir essa nota?")){
      noteDelete(id, setError, () => {
        const newNotes = notes.filter(note => note._id !== id);
        setNotes(newNotes);
      })
    }
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