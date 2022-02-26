import { useNavigate } from "react-router";
import { Section } from "./style";
import { useLogin } from "../../context/index";
import { useEffect } from "react";
import Axios from "axios";

export default function Login () {

    const { email, setEmail, password, setPassword, setDatas, datas } = useLogin();
    
    function sendInfo (e) {
        e.preventDefault();

        if(email && password) {
            datas.map(item => {
                if(item.email == `${email}` && item.password == `${password}`) {
                    console.log("logado")
                } 
            })
            
        } else {
            console.log("Preencha o(s) campo(s)");
        }
    }

    useEffect(() => {
        Axios.get("http://localhost:4000/get/users")
        .then(response => setDatas(response.data.users))
    }, []);

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