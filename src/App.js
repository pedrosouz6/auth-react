import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Pages
import Login from "./components/login/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login /> } />
      </Routes>
    </Router>
  )
}

export default App;