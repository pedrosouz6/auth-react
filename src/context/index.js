import { createContext, useContext, useState, useEffect } from "react";
import Axios from "axios";

const LoginContext = createContext();

export default function LoginProvider ({ children }) {

    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ auth, setAuth ] = useState(false);
    const [ datas, setDatas ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        Axios.get("http://localhost:4000/get/users")
        .then(response => setDatas(response.data.results));

        setLoading(false);
    }, []);


    return (
        <LoginContext.Provider value={{
            password: password,
            setPassword: setPassword,
            email: email,
            setEmail: setEmail,
            auth: auth,
            setAuth: setAuth,
            datas: datas,
            setDatas: setDatas,
        }}>

            {!loading && children}

        </LoginContext.Provider>
    )
}

export function useLogin() {
    const context = useContext(LoginContext);
    const { password, setPassword, email, setEmail, auth, setAuth, setDatas, datas } = context;
    return { password, setPassword, email, setEmail, auth, setAuth, setDatas, datas };
}