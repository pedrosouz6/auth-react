import { Section } from "./style";
import { useLogin } from "../../context/index";

export default function Login () {

    const { email, setEmail, password, setPassword, login } = useLogin();

    function sendInfo (e) {
        e.preventDefault();

        if(email && password) {
            login();
        }
    }

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