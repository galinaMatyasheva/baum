import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  // test pro
  return (
    <div className="app-container">
      <Header/> 
     <Routes>
       <Route path="/" element={<Main/>}/>
     </Routes>
     <Footer/>
    </div>
  );
};

export default App;
