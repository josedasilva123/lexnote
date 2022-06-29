/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); 

    const navigate = useNavigate(); 

    useEffect(() => {
        const token = localStorage.getItem('@TOKEN');

        async function autoLogin(){
            try {               
                const parsedToken = JSON.parse(token);
               
                const response = await api.post('/user/autologin', {}, {
                    headers: {
                        auth: parsedToken
                    }
                })

                setUser(response.data.user); 
                navigate('/dashboard'); 
            } catch (error) {
                localStorage.removeItem('@TOKEN'); 
            }
        }

        if(token){
            autoLogin();
        }        
    }, [])

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

    async function userLogin(formData, setLoading, setError, callback){
        try {
           setLoading(true); 
           setError(false);            
           const response = await api.post('/user/login', formData);
       
           setUser(response.data.user); 
          
           localStorage.setItem("@TOKEN", JSON.stringify(response.data.token)); 

           navigate('/dashboard');

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

    //Função de logout resentando o estado e localstorage
    function userLogout(callback){
        setUser(null);
        localStorage.removeItem("@TOKEN");
        navigate('/');

        //Callback que será utilizado para lidar com o problema de hierarquia de providers
        if(callback){
            callback();
        }
    }

    return(
        <UserContext.Provider value={{ user, userCreate, userLogin, userLogout }}>
            {children}
        </UserContext.Provider>
    )
}