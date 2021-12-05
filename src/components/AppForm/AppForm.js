import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ApplicationForm from "../../content/ApplicationForm/ApplicationForm";

const AppForm = () => {
  return (
    <div className="app-form-container">
     <Header/>
     <ApplicationForm/>
     <Footer/>
    </div>
  );
};

export default AppForm;
