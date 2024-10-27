import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Config from "./components/Config/Config";
import { Home } from "./components/Home/Home";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import { Login } from "./components/Auth/Login";
import { Signup } from "./components/Auth/Signup";
import { RequireAuth } from "./components/Auth/RequireAuth";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/config" element={<RequireAuth><Config /></RequireAuth>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
