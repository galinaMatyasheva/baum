import React from "react";
import TeamInfo from "../../content/TeamInfo/TeamInfo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Team = () => {
  return (
    <section className="team-container">
      <Header />
      <TeamInfo />
      <Footer />
    </section>
  );
};

export default Team;
