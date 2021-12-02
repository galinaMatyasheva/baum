import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./Platform.scss";

const Platform = () => {
  return (
    <section className="platform-container">
      <Header />
      <div className="platform-info">
        <h1>
          Уважаемые посетители, страница находится в разработке. Приносим свои
          извинения.​​​
        </h1>
      </div>
      <Footer />
    </section>
  );
};

export default Platform;
