import { Section } from "./style";
import { useAuth } from "../../Context/auth";

export default function Dashboard() {

    const { signIn } = useAuth();

    const remove = () => {
        signIn();
    }

    return (
        <Section>
            <h1>Dashboard</h1>
            <button onClick={remove}>Sing out</button>
        </Section>
    )
}