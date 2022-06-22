/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export const UserContext = createContext({});

export const UserStorage = ({children}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@TOKEN"));

        async function autoLogin(){
            try {
                const response = await api.post('/user/autologin', {}, {
                    headers: {
                        auth: token,
                    }
                });
                setUser(response.data.user);
                navigate('/dashboard');
            } catch (error) {
                console.log(error);
               localStorage.removeItem("@TOKEN");
               navigate("/");
            }
        }

        if(token){
            autoLogin();
        }
    }, [])

    async function userLogin(formData, setLoading, setError, callback){
        try {
            setLoading(true);
            setError(null);
            const response = await api.post('/user/login', formData);  
       
            setUser(response.data.user);
            localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));  
            
            if(callback){
                callback(response.data);
            }            
         
            navigate('/dashboard');
        } catch (error) {
            setError(error.response.data.error);  
            setTimeout(() => {
                setError(null)
            }, 3000);
        } finally {
            setLoading(false);
        }
    }

    function userLogout(callback){
        localStorage.removeItem('@TOKEN');
        setUser(null);
        navigate('/');

        if(callback){
            callback();
        }        
    }

    async function userRegister(formData, setLoading, setError, callback){
        try {
            setLoading(true);
            setError(null);
            const response = await api.post('/user/', formData); 

            if(callback){
                callback(response.data);
            }

        } catch (error) {
            setError(error.response.data.error);  
            setTimeout(() => {
                setError(null)
            }, 3000);
        } finally {
            setLoading(false);
        }
    }
    
    return(
        <UserContext.Provider value={{ user, userLogin, userLogout, userRegister }}>
            {children}
        </UserContext.Provider>
    )       
}
