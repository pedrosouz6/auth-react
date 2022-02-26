import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export default function LoginProvider ( { children } ) {

    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ auth, setAuth ] = useState(false);
    const [ datas, setDatas ] = useState([]);

    return (
        <LoginContext.Provider value={{
            password: password,
            setPassword: setPassword,
            email: email,
            setEmail: setEmail,
            auth: auth,
            setAuth: setAuth,
            datas: datas,
            setDatas: setDatas
        }}>

            {children}

        </LoginContext.Provider>
    )
}

export function useLogin() {
    const context = useContext(LoginContext);
    const { password, setPassword, email, setEmail, auth, setAuth, setDatas, datas } = context;
    return { password, setPassword, email, setEmail, auth, setAuth, setDatas, datas };
}