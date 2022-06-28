/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); //Criamos um estado global para armazenar user

    const navigate = useNavigate(); //Use navigate (correspondente ao history.push na v5) instanciado

    useEffect(() => {
        //Pega a token do localStorage (caso exista)
        const token = localStorage.getItem('@TOKEN');

        async function autoLogin(){
            try {
                //Parse na token para converter para o formato adequado
                const parsedToken = JSON.parse(token);
                //Requisição na rota de autologin
                const response = await api.post('/user/autologin', {}, {
                    headers: {
                        auth: parsedToken
                    }
                })

                setUser(response.data.user); //Caso a requisição der certo set o estado com usuário
                navigate('/dashboard'); //Redireciona para dashboard
            } catch (error) {
                localStorage.removeItem('@TOKEN'); //Caso houver erro, limpa a token
            }
        }

        //Caso a token esteja definida, executa a função autoLogin()
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

    //UserLogin
    async function userLogin(formData, setLoading, setError, callback){
        try {
           setLoading(true); //Inicia carregamento
           setError(false); //Reseta erros caso existam

           //Requisição de login conforme documentação
           const response = await api.post('/user/login', formData);

           //Caso de certo, set o estado com o usuário
           setUser(response.data.user); 

           //Armazena a token gerada no localStorage
           localStorage.setItem("@TOKEN", JSON.stringify(response.data.token)); 

           //Redireciona para o dashboard 
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

    return(
        <UserContext.Provider value={{ user, userCreate, userLogin }}>
            {children}
        </UserContext.Provider>
    )
}