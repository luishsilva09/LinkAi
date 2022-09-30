import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../context/userContext";
import GlobalStyle from "./globalStyles";
import Home from "./home/Home";
import Signup from "./signup/Signup";
import Signin from "./signin/Signin";
import Dashboard from "./dashboard/Dashboard";
import NewLink from "./newLink/NewLink";
import ViewLinks from "./viewLinks/ViewLinks";
import "react-toastify/dist/ReactToastify.css";

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/links/create" element={<NewLink />} />
          <Route path="/view/:userId" element={<ViewLinks />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
