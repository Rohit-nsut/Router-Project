import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import data from "./Components/data";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (


    <div className="App w-screen h-screen flex flex-col overflow-x-hidden bg-[#050c18]">

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* <Login/> */}

      {/* <SignUp/> */}


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/SignUp" element={<SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
