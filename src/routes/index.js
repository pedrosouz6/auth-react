import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Login from "../components/login/index";
import Dashboard from "../components/dashboard/index";
import { useLogin } from "../context/index";
import { useEffect } from "react";

export default function WayRoutes () {
    const { auth, setAuth } = useLogin();
    const login = localStorage.getItem("user") || false;
    const navigate = useNavigate();
    
    function Private ({ children }) {
        if(auth === false) {
            return <Navigate to="/" />
        } 
        return children;
    }
    
    useEffect(() => {
        if(!login) {
           navigate("/da");
        }
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="/dashboard" element={ <Private> <Dashboard/> </Private> } />
                <Route path="*" element={ <Login /> } /> 
            </Routes>
        </Router>
    )
}