import React from "react";
import Form from "../../content/Form/Form";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./SearchResult.scss";
import filterPosts from "../../content/Functions/FilterPosts";
import posts from "../../content/DataForSearch";

const SearchResult = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");

  const filteredPosts = filterPosts(posts, query);
  return (
    <div className="search-result-container">
      <Header />
      <div className="search-result-container-info">
        <h1 className="title-baum title-purple">Результаты поиска</h1>
        <div className="search-result-img-title"></div>
      </div>
      <div className="search-result-content">
        <ul className="search-result-list">
          {filteredPosts.map((post) => (
            <li key={post.key}>
              <a href={post.link}>{post.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <Form />
      <Footer />
    </div>
  );
};

export default SearchResult;
