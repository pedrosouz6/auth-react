import { Section } from "./style";
import { useLogin } from "../../context/index";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Axios from "axios";

export default function Login () {

    const { email, setEmail, password, setPassword, datas, setAuth} = useLogin();
    const navigate = useNavigate();

    function sendInfo (e) {
        e.preventDefault();

        if(email && password) {
            datas.map(item => {
                if(item.email == `${email}` && item.password == `${password}`) {

                    const user = {
                        email,
                        password
                    };

                    localStorage.setItem("user", JSON.stringify(user));
                    console.log(datas)
                    setAuth(true);
                    navigate("/dashboard");

                } else {
                    console.log("erro")
                    setAuth(false);
                }
            })
            
        } else {
            console.log("Preencha o(s) campo(s)");
        }
    }

    useEffect(() => {
        const authLocal = localStorage.getItem("user") || null;

        if(authLocal) {

            const { email, password } = JSON.parse(authLocal);

            if(email == "pedro") {
                setAuth(true);
                //navigate("/dashboard");
            }
        }
        
        
    }, [])

    return (
        <Section>
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={sendInfo}>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Enviar"  />
                </form>
            </div>
        </Section>
    )
}