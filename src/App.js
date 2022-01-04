import React, {createContext, useState} from "react"
import {Routes, Route, Link} from "react-router-dom"
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import StartPage from "./pages/StartPage";

function App() {
  const [email, setEmail] = useState("asd")

  return (
    <div>
      
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="my-page" element={<MyPage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      
    </div>
  );
}

export default App;
