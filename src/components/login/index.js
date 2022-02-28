//Style
import { Section } from "./style";

//Hooks
import { useState } from "react";
import { useAuth } from "../../Context/auth";


export default function Login () {

    const { validate, validation } = useAuth();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const sendInfo = (e) => {
        e.preventDefault();
        validate(email, password);
    }

    return (
        <Section>
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={sendInfo}>

                    <input type="text" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)} />

                    <input type="text" 
                    placeholder="Senha" 
                    onChange={(e) => setPassword(e.target.value)} />

                    {/* validate message */}  
                    {validation && (<p> Preencha o(s) campo(s) acima </p>)}

                    <input type="submit" value="Enviar"  />
                </form>
            </div>
        </Section>
    )
}