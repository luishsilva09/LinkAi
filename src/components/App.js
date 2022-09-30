import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../context/userContext";
import GlobalStyle from "./globalStyles";
import Home from "./Home";
import Signup from "./signup/Signup";
import Signin from "./signin/Signin";

function App() {
  const [userData, setUserData] = React.useState();
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/signup" element={<Signup />} />
          <Route path="/users/signin" element={<Signin />} />
          <Route path="/dashboard" element={""} />
          <Route path="/links/create" element={""} />
          <Route path="/view/:userId" element={""} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
