import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

import { ThemeParagraph, ThemeTitle } from "../../../style/typography";

import NoteCard from "./NoteCard";

import { StyledNoteList } from "./style";

const NoteList = () => {
  const { user } = useContext(UserContext); //usuário importado do contexto

  const notes = [
      {
        _id: 1,
        title: "Nota de exemplo 1",
        text: "Texto"
      },
      {
        _id: 2,
        title: "Nota de exemplo 2",
        text: "Texto"
      },
      {
        _id: 3,
        title: "Nota de exemplo 3",
        text: "Texto"
      }
  ]

  const [error, setError] = useState(false);

  return (
    <StyledNoteList>
      <ThemeTitle tag="h1" titleSize="title2">
        Bem vindo(a) {user?.name}
      </ThemeTitle>
      <ThemeParagraph>O que você deseja anotar?</ThemeParagraph>
      {notes?.length > 0 ? (
        <ul>
          {notes?.map((note) => (
            <NoteCard
              key={note._id}
              id={note._id}
              title={note.title}
              text={note.text}
              setError={setError}
            />
          ))}
        </ul>
      ) : (
        <ThemeTitle tag="h2" titleSize="title3">
          Ainda não há nenhuma nota cadastrada...
        </ThemeTitle>
      )}
    </StyledNoteList>
  );
};

export default NoteList;
