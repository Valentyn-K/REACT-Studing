import React, { Component } from "react";
import ArticleList from "../ArticleList/ArticleList";
import Loader from "../Loader/Loader";
import ErrorNotification from "../ErrorNotification/ErrorNotification";
import SearchForm from "../SearchForm/SearchForm";
import SearchForm2 from "../SearchForm2/SearchForm2";
import CategorySelector from "../CategorySelector/CategorySelector";
import { articleRequest } from "../../services/article-api";
import { objectKeysTransformer } from "../../services/article-api";

export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    query: "",
    category: "",
  };

  axiosRequest = async (query) => {
    this.setState({ isLoading: true });
    const articleRequestResult = await articleRequest(query);

    // articleRequest(this.state.query)
    //   .then(({ data }) => {
    //     this.setState({ articles: objectKeysTransformer(data.hits) });
    //   })
    //   .catch((error) => this.setState({ error }))
    //   .finally(() => {
    //     this.setState({ isLoading: false });
    //   });
  };

  componentDidMount() {
    this.axiosRequest();
  }

  handleQueryChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      this.axiosRequest(this.state.category);
    }
  }

  render() {
    const { articles, isLoading, error, query, category } = this.state;
    return (
      <>
        <SearchForm onHandleSubmit={this.axiosRequest} />
        <SearchForm2
          value={query}
          onQueryChange={this.handleQueryChange}
          onSearchButtonClick={this.axiosRequest}
        />
        <CategorySelector
          options={["...", "html", "css", "javascript", "react"]}
          value={category}
          onCategoryChange={this.handleCategoryChange}
        />

        {error && <ErrorNotification errorText={error.message} />}
        {isLoading && <Loader />}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </>
    );
  }
}
