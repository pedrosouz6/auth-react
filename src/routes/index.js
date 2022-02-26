import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { useLogin } from "../context/index";

import Login from "../components/login/index";
import Dashboard from "../components/dashboard/index";

export default function WayRoutes () {
    const { auth } = useLogin();

    function Private ({ children }) {
        if(auth === false) {
        return <Navigate to="/" />
        } 
        return children;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="/dashboard" element={ <Private> <Dashboard/> </Private> } />
            </Routes>
        </Router>
    )
}