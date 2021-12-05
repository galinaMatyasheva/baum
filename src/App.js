import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./App.scss";
import AboutUs from "./components/AboutUs/AboutUs";
import Community from "./components/Community/Community";
import ContactUs from "./components/ContactUs/ContactUs";
import Main from "./components/Main/Main";
import News from "./components/News/News";
import NewsDetails from "./components/News/NewsDetails";
import BaumSwarm from "./components/Storage/BaumSwarm/BaumSwarm";
import Functional from "./components/Storage/BaumUds/Functional/Functional";
import BaumUds from "./components/Storage/BaumUds/BaumUds";
import Team from "./components/Team/Team";
import Vacancies from "./components/Vacancies/Vacancies";
import Support from "./components/Storage/BaumUds/Support/Support";
import Documentation from "./components/Storage/BaumUds/Documentation/Documentation";
import Model from "./components/Storage/BaumUds/Model/Model";
import Platform from "./components/AI/Platform/Platform";
import SolutionDB from "./components/AI/SolutionsDB/SolutionDB";
import SolutionTOIR from "./components/AI/SolutionsTOIR/SolutionTOIR";
import Education from "./components/Education/Education";

const App = () => {
  return (
    <div id="app" className="app-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Baum Inform</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/baum-uds" element={<BaumUds />} />{" "}
        <Route path="/baum-uds/functional" element={<Functional />} />
        <Route path="/baum-uds/support" element={<Support />} />
        <Route path="/baum-uds/documentation" element={<Documentation />} />
        <Route path="/baum-uds/model" element={<Model />} />
        <Route path="/baum-swarm" element={<BaumSwarm />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/community" element={<Community />} />
        <Route path="/ai/platform" element={<Platform />} />
        <Route path="/ai/solutionDB" element={<SolutionDB />} />
        <Route path="/ai/solutionTOIR" element={<SolutionTOIR />} />
        <Route path="/education" element={<Education />} />
        <Route path="/news/details/:key" element={<NewsDetails />} />
      </Routes>
    </div>
  );
};

export default App;
