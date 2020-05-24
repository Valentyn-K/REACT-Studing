import React from "react";

const Article = ({ title, url, author, onGoBack }) => (
  <>
    <h2>{title}</h2>
    <p>Author: {author}</p>
    <span>
      You can read this article on
      <br />
      <a href={url} target="_blank" rel="noopener noreferrer">
        original source
      </a>
    </span>
    <br />
    <button onClick={onGoBack}>Go back to all articles</button>
  </>
);

export default Article;
