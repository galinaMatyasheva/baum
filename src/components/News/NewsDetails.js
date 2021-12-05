import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import news from "../../content/NewsData";
import "./News.scss";
import { Button } from "@material-ui/core";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const NewsDetails = () => {
  let param = useParams();
  const key = param.key;
  let navigate = useNavigate();

  const handleClickToNews = () => {
    navigate("/news");
  };

  return (
    <div className="news-details-container">
      <Header />
      <Button startIcon={<ArrowBackIosIcon />} onClick={handleClickToNews}>
        Новости
      </Button>
      <div className="news-details-info">
        <div className="news-details-about">
          <img
            className="news-details-img"
            src={"/assets/news" + news[key].photo_links}
            image={"assets/news" + news[key].photo_links}
            alt="img"
          />
          <h3>{news[key].list_title}</h3>
          <p>{news[key].list_text}</p>
          {news[key].html_blocks.map((htmlBlock) => {
            if (htmlBlock.type === "p") {
              return <p className={htmlBlock.name}>{htmlBlock.text}</p>;
            } else if (htmlBlock.type === "ol") {
              return (
                <ol className={htmlBlock.name}>
                  {htmlBlock.inside_blocks.map((insideBlock) => (
                    <li className={insideBlock.name}>{insideBlock.text}</li>
                  ))}
                </ol>
              );
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetails;
