import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import news from "../../content/NewsData";
import "./News.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const News = () => {
  return (
    <section className="news-container">
      <Header/>
      <div className="news-container-info">
        <h1 className="title-baum title-purple">Новости</h1>
        <div className="news-img"></div>
      </div>

     <div className="news-years-container">
       <h1>2021</h1>
       <div>
         <div>
           <p>Выберите год:</p>
           <div>
              <a href=""></a>
           </div>
         </div>
        
       </div>
     </div>
      <div className="news-container-cards">
        {Object.keys(news).map((key, index) => (
          <Card sx={{ maxWidth: 345 }} className="card">
            <div className="img">
              <CardMedia
                component="img"
                height="300"
                image={"assets/news" + news[key].photo_links}
                alt="img"
              />
            </div>
            <CardContent>
              <h3>{news[key].list_title}</h3>
              <p>{news[key].list_text}</p>
            </CardContent>
            <CardActions>
              <Button
                className="btn-background-none"
                size="large"
                endIcon={<ArrowRightAltIcon />}
              >
                Читать
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <Footer/>
    </section>
  );
};

export default News;
