import { useState, useEffect, useContext, createContext } from "react";

import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const navigate = useNavigate();

    const [ validation,  setValidation ] = useState(false);
    const [ auth, setAuth ] = useState(false);

    const validate = (email, password) => {
        if(email && password) {
            setAuth(true);
            setValidation(false);

            const user = {
                email,
                password
            };

            localStorage.setItem("user", JSON.stringify(user));
            
            navigate("/dashboard");
        } else {
            setValidation(true);
        }
    }

    const signIn = () => {
        setAuth(false);
        navigate("/");
        localStorage.removeItem("user");
    }

    useEffect(() => {
        const user = localStorage.getItem("user");

        if(user) {
            setAuth(true);
            navigate("/dashboard");
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            //States
            validation,
            auth,
            
            //Functions
            signIn,
            validate
        }}>

            { children }

        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    const { validate, validation, auth, signIn } = context;
    return { validate, validation, auth, signIn };
}