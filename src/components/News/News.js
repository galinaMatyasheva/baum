import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import usePagination from "./Pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

import news from "../../content/NewsData";
import "./News.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const News = () => {
  let navigate = useNavigate();

  const scrollToTop = () => {
    setTimeout(() => {
      const aboutPageNode = document.getElementById("app");
      aboutPageNode.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleClickDetails = (key) => {
    navigate("/news/details/" + key);
    scrollToTop();
  };

  const [curYear, setCurYear] = useState("2021");
  const uniqueYearsSet = new Set();
  Object.keys(news).map((key) => uniqueYearsSet.add(news[key].year));
  const uniqueYears = Array.from(uniqueYearsSet);

  const handleYearClick = (e, value) => {
    setCurYear(value);
    setPage(1);
    filteredNewsKeysPaginated.jump(1);
  };

  const filteredNewsKeys = Object.keys(news).filter((key) => {
    return news[key].year === curYear;
  });
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;

  const count = Math.ceil(filteredNewsKeys.length / PER_PAGE);
  const filteredNewsKeysPaginated = usePagination(filteredNewsKeys, PER_PAGE);

  const handleChangePage = (e, p) => {
    setPage(p);
    filteredNewsKeysPaginated.jump(p);
  };

  return (
    <section className="news-container">
      <Header />
      <div className="news-container-info">
        <h1 className="title-baum title-purple">Новости</h1>
        <div className="news-img"></div>
      </div>

      <div className="news-years-container">
        <h1>{curYear}</h1>

        <div>
          <div className="new-years-nav">
            <p>Выберите год:</p>
            {uniqueYears.map((value) => (
              <Button
                onClick={(e) => {
                  handleYearClick(e, value);
                }}
              >
                <div
                  className={value === curYear ? "new-year-btn-underline" : ""}
                >
                  {" "}
                  {value}
                </div>
              </Button>
            ))}
            <div>
              <a href=""></a>
            </div>
          </div>
        </div>
      </div>
      <div className="news-container-cards">
        {filteredNewsKeysPaginated.currentData().map((key, index) => (
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
                onClick={() => handleClickDetails(key)}
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
      <Pagination
        count={count}
        page={page}
        onChange={handleChangePage}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
      <Footer />
    </section>
  );
};

export default News;
