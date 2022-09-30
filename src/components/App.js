import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../context/userContext";
import GlobalStyle from "./globalStyles";
import TopBar from "./TopBar";

function App() {
  const [userData, setUserData] = React.useState();
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <TopBar />
        <GlobalStyle>
          <Routes>
            <Route path="/" element={""} />
            <Route path="/users/signup" element={""} />
            <Route path="/users/signin" element={""} />
            <Route path="/dashboard" element={""} />
            <Route path="/links/create" element={""} />
            <Route path="/view/:userId" element={""} />
          </Routes>
        </GlobalStyle>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
