import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

//Pages
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to={"404"} />} />
      </Routes>
    </>
  );
}

export default App;
