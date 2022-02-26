import { useNavigate } from "react-router";
import {Section} from "./style";
import { useLogin } from "../../context/index";

export default function Login () {

    const { email, setEmail, password, setPassword } = useLogin();
    
    const navigate = useNavigate();
    
    function sendInfo () {
        console.log(email, password)

    }

    return (
        <Section>
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={sendInfo}>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="Enviar" onClick={() => navigate("/dashboard")} />
                </form>
            </div>
        </Section>
    )
}