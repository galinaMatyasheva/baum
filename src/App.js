import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import News from "./components/News/News";
import BaumSwarm from "./components/Storage/BaumSwarm/BaumSwarm";
import BaumUds from "./components/Storage/BaumUds/BaumUds";
import Team from "./components/Team/Team";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/baum-uds" element={<BaumUds />} />
        <Route path="/baum-swarm" element={<BaumSwarm />} />
        <Route path="/baum-uds/:function" element />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
