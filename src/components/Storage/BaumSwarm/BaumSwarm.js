import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./BaumSwarm.scss";

const BaumSwarm = () => {
  return (
    <section className="baum-swarm-container">
      <Header />
      <div className="baum-swarm-info">
        <h1>
          Уважаемые посетители, страница находится в разработке. Приносим свои
          извинения.​​​
        </h1>
      </div>
      <Footer />
    </section>
  );
};

export default BaumSwarm;
