import {Section} from "./style";

export default function Login () {
    return (
        <Section>
            <div className="container">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Senha" />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </Section>
    )
}