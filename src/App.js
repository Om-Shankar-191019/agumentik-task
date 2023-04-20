import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Kicks from "./components/Kicks";
import Reel from "./components/Reel";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Kicks />} />
        <Route path="/reel" element={<Reel />} />
      </Routes>
    </div>
  );
};

export default App;
