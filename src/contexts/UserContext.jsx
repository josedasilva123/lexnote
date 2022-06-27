import { createContext } from "react";
import { api } from "../api/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    // Função async que recebe os respectivos parâmetros de fora:
    // formData: (campos do formulário), setLoading (set do estado externo)
    // setError (set do estado externo), callback (função de callback)
    async function userCreate(formData, setLoading, setError, callback){
        try {
            setLoading(true); //Inicia o carregamento
            setError(false); //Reseta o erro, caso houver
            //Realiza a requisição
            const response = await api.post("/user/", formData);

            //Caso a função de callback exista...
            if(callback){
                //Executa a função, atribuindo como primeiro parâmetro padrão response.data
                callback(response.data);
            }
        //Caso qualquer operação da tentativa falhar, o catch acontece    
        } catch (error) {
            setError(error.response.data.error); //Pega a mensagem de erro da API e seta o estado

            //Depois de 3 segundos, reseta o erro
            setTimeout(() => {
                setError(false);
            }, 3000);
        //Finally acontece após o try ou catch finalizarem    
        } finally {
            setLoading(false); //Encerra o carregamento
        }
    }

    //Provider recebe como exportação
    return(
        <UserContext.Provider value={{ userCreate }}>
            {children}
        </UserContext.Provider>
    )
}