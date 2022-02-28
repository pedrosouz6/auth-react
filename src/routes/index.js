import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProviderLogin from "../context/index";

import Login from "../components/login/index";
import Dashboard from "../components/dashboard/index";
import { useLogin } from "../context/index";

export default function WayRoutes () {
    
    function Private ({ children }) {
        const { auth } = useLogin();
        if(auth === false) {
            return <Navigate to="/" />
        }

        return children
    }

    return (
        <Router>
            <ProviderLogin>
                <Routes>
                    <Route path="/" element={ <Login /> } />
                    <Route path="/dashboard" element={ <Private> <Dashboard/> </Private> } />
                </Routes>
            </ProviderLogin>
        </Router>
    )
}