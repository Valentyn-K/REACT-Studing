import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/Home/Home";
import AboutPage from "../../pages/About/About";
import ArticlesPage from "../../pages/Articles/Articles";
import NotFoundPage from "../../pages/NotFound/NotFound";
import Nav from "../Nav/Nav";
import SingleArticlePage from "../../pages/SingleArticle/SingleArticle";

export default class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/articles/:articleId" component={SingleArticlePage} />
          <Route path="/articles" component={ArticlesPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    );
  }
}
