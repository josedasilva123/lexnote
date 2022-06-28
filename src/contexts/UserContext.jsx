import { createContext } from "react";
import { api } from "../api/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    async function userCreate(formData, setLoading, setError, callback){
        try {
            setLoading(true);
            setError(false); 

            const response = await api.post("/user/", formData);

            if(callback){
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

    return(
        <UserContext.Provider value={{ userCreate }}>
            {children}
        </UserContext.Provider>
    )
}