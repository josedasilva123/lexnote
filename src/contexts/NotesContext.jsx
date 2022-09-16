import { useState, useEffect, useContext, createContext } from "react";

import { api } from "../api/api";

import { UserContext } from "./UserContext";

export const NotesContext = createContext({});

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const { user } = useContext(UserContext);

  //Carregamento de notas
  useEffect(() => {
    async function notesGet(){
        try {      
            //Recupera a token do localStorage e da JSON.parse 
            const token = JSON.parse(localStorage.getItem('@TOKEN'));
            //Requisição conforme documentação
            const response = await api.get("/notes", {
                headers: {
                    auth: token,
                }
            })            
            setNotes(response.data.response); //set o estado com as notas trazidas da API
        } catch (error) {
            console.log(error);
        }
    }

    //Caso o usuário seja verdadeiro executa notes Get
    if(user){
        notesGet();
    }
  }, [user]) //Efeito desencadeado na atualização do state user (UserContext)

  async function noteCreate(formData, setLoading, setError, callback) {
    try {
      setLoading(true);
      setError(null);
      //Recupera a token do localStorage e da JSON.parse 
      const token = JSON.parse(localStorage.getItem("@TOKEN"));
      //Requisição conforme documentação
      const response = await api.post("/notes", formData, {
        headers: {
          auth: token,
        },
      });

      setNotes([...notes, response.data.response]); //set de estado adicionando a nova nota

      //Função de callback caso exista
      if (callback) {
        callback(response.data);
      }
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  }

  async function noteDelete(id, setError, callback){
    try {
      //Recupera a token do localStorage e da JSON.parse 
      const token = JSON.parse(localStorage.getItem('@TOKEN'));
      //Requisição conforme documentação
      const response = await api.delete(`/notes/${id}`, {
        headers: {
          auth: token
        }
      })

      const newList = notes.filter(note => note._id !== id);
      setNotes(newList); //set o estado com a lista filtrada removendo o respectivo item

      //Função de callback caso exista
      if(callback){
        callback(response.data);
      }

    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError(null)
      }, 3000)
    } 
  }

  return (
    <NotesContext.Provider value={{ notes, noteCreate, noteDelete, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
