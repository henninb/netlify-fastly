import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Landing from "./Landing";
import HockeyScores from "./HockeyScores";
import Home from "./Home";
import ProtectedRoutes from "./ProtectedRoutes";
import About from "./About";
import Test from "./Test";
import Logout from "./Logout";
//import { createContext, useContext } from "react";

export default function AllRoutes() {
  //const AuthContext = createContext();
  //const AuthData = () => useContext(AuthContext);
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/logout" element={<Logout />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/nhl" exact element={<HockeyScores />} />
              <Route path="/test" element={<Test />} />
              <Route path="/landing" element={<Landing />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
