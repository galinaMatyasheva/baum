import React, { useState } from "react";
import { useParams } from "react-router-dom";
import news from "../../content/NewsData";
import "./News.scss";

import { Button } from "@material-ui/core";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const NewsDetails = () => {
  let param = useParams();
  const key = param.key;

  return (
    <div className="news-details-container">
      <Header />
      <div className="news-details-info">
        <img
          className="news-details-img"
          src={"/assets/news" + news[key].photo_links}
          image={"assets/news" + news[key].photo_links}
        />

        <div className="news-details-about">
          <h3>{news[key].list_title}</h3>
          <p>{news[key].list_text}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetails;
