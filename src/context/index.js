import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext();

export default function LoginProvider ({ children }) {

    const navigate = useNavigate();

    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ auth, setAuth ] = useState(false);

    function login(){
        if(email === "pedro" && password === "pedro") {
            console.log("Acesso liberado")
            const list = {
                email,
                password
            };
            localStorage.setItem("user", JSON.stringify(list));
            setAuth(true);
            console.log(auth);

            navigate("/dashboard");

        } else {
            console.log("Erro no email ou senha");
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("user");

        if(user) {
            navigate("/dashboard");
            setAuth(true);

            console.log(auth)
        }

    }, [])


    return (
        <LoginContext.Provider value={{
            password: password,
            setPassword: setPassword,
            email: email,
            setEmail: setEmail,
            login,
            auth
        }}>

            {children}

        </LoginContext.Provider>
    )
}

export function useLogin() {
    const context = useContext(LoginContext);
    const { password, setPassword, email, setEmail, login, auth } = context;
    return { password, setPassword, email, setEmail, login, auth };
}