import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//Context
import AuthProvider from "./Context/auth";

//Pages
import Dashboard from "./components/dashboard/index";
import Login from "./components/login/index";

//Hooks
import { useAuth } from "./Context/auth";

export default function Routess() {

    const Private = ({ children }) => {
        const { auth } = useAuth();

        if(auth === false) {
            return <Navigate to="/" />;
        }

        return children;
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={ <Login /> } />
                    <Route path="/dashboard" element={ <Private> <Dashboard /> </Private> } />
                </Routes>
            </AuthProvider>
        </Router>
    )
}