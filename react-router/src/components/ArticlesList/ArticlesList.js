import React from "react";
import { Link, withRouter } from "react-router-dom";

const ArticlesList = ({ articles = [], match }) => (
  <ul>
    {articles.map(({ objectID, title }) => (
      <li key={objectID}>
        <Link to={`${match.path}/${objectID}`}>{title}</Link>
      </li>
    ))}
  </ul>
);

export default withRouter(ArticlesList);
