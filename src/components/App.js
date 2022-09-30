import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../context/userContext";

function App() {
  const [userData, setUserData] = React.useState();
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={""} />
          <Route path="/users/signup" element={""} />
          <Route path="/users/signin" element={""} />
          <Route path="/dashboard" element={""} />
          <Route path="/links/create" element={""} />
          <Route path="/view/:userId" element={""} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
