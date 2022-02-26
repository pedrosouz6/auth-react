import { useNavigate } from "react-router";
import { Section } from "./style";

export default function Dashboard() {

    const navigate = useNavigate();

    function removeLocal() {
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <Section>
            <h1>Dashboard</h1>
            <button onClick={removeLocal}>Sing out</button>
        </Section>
    )
}