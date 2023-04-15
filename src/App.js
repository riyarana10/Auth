import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";
function App() {
  const [user,setLoginUser] = useState({})
  return (
    <div  className="App">
      <Router>
        <Routes>
          {
            user && user._id ? <Route exact path="/" element={<Home setLoginUser={setLoginUser} />} /> : <Route exact path="/" element={<Login setLoginUser={setLoginUser} />} />
          }
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
