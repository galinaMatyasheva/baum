import React from "react";
import TeamInfo from "../../content/TeamInfo/TeamInfo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Team.scss";


const Team = () => {
  return (
    <section className="team-container">
      <Header />
      <div className="team-container-info">
        <h1 className="title-baum title-purple">Наша команда</h1>
        <div className="team-img-title"></div>
      </div>
      <TeamInfo />
      <Footer />
    </section>
  );
};

export default Team;
