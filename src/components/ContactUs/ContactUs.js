import React from "react";
import Form from "../../content/Form/Form";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <section className="contact-us-container">
      <Header/>
      <div className="contacts-container-info">
        <h1 className="title-baum title-purple">Контакты</h1>
        <div className="contacts-img-title"></div>
      </div>
      <Form />
      <Footer/>
    </section>
  );
};

export default ContactUs;
