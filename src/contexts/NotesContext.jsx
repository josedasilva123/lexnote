import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../api/api";
import { UserContext } from "./UserContext";

export const NotesContext = createContext({});

export const NotesStorage = ({children}) => {
    const { user } = useContext(UserContext);
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        async function getNotes(){
            try {
                const token = JSON.parse(localStorage.getItem('@TOKEN'));
                const response = await api.get('/notes', {
                    headers: {
                        auth: token
                    }
                });
                console.log(response.data);
                setNotes(response.data.response);
            } catch (error) {
                console.log(error);
            }
        }
        if(user){
            getNotes();            
        }
    }, [user])

    async function noteCreate(formData, setLoading, setError, callback){
        try {
            setLoading(true);
            setError(null);
            const token = JSON.parse(localStorage.getItem('@TOKEN'));
            const response = await api.post('/notes', formData, {
                headers: {
                    auth: token
                }
            });

            if(callback){
                callback(response.data);
            }            
        } catch (error) {
            setError(error.response.error)
        } finally {
            setLoading(false);
        }
    }

    async function noteDelete(id, setError, callback){
        try {
            const token = JSON.parse(localStorage.getItem('@TOKEN'));
            const response = await api.delete(`/notes/${id}`, {
                headers: {
                    auth: token
                }
            });

            if(callback){
                callback(response);
            }
        } catch (error) {
            setError(error.response.data.error);  
            setTimeout(() => {
                setError(null)
            }, 3000);
        }
    }

    return (
        <NotesContext.Provider value={{notes, setNotes, noteCreate, noteDelete}}>
            {children}
        </NotesContext.Provider>
    )
}