import React from 'react'
import { ThemeTitle } from '../../../style/typography'
import NoteCard from './NoteCard'
import { StyledNoteList } from './style'

const NoteList = () => {
  const notes = [
    {
      id: 1,
      title: 'Título da anotação',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque, libero et pretium mollis, metus ipsum egestas ipsum, eu ullamcorper tellus quam at libero. Aliquam iaculis tempor enim sit amet luctus. Etiam fermentum enim orci, et interdum lacus consectetur in. '
    },
    {
      id: 2,
      title: 'Título da anotação',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque, libero et pretium mollis, metus ipsum egestas ipsum, eu ullamcorper tellus quam at libero. Aliquam iaculis tempor enim sit amet luctus. Etiam fermentum enim orci, et interdum lacus consectetur in. '
    },
    {
      id: 3,
      title: 'Título da anotação',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque, libero et pretium mollis, metus ipsum egestas ipsum, eu ullamcorper tellus quam at libero. Aliquam iaculis tempor enim sit amet luctus. Etiam fermentum enim orci, et interdum lacus consectetur in. '
    },
  ]
  return (
    <StyledNoteList>
        <ThemeTitle tag="h1" titleSize="title2">Minhas anotações</ThemeTitle>
        <ul>
            {notes.map(note => (
              <NoteCard key={note.id} title={note.title} text={note.text} />
            ))}
        </ul>
    </StyledNoteList>
  )
}

export default NoteList