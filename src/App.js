import React from "react";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { Home } from "./components/Home";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditUser />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
