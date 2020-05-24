import React, { Component } from "react";
import queryString from "query-string";
import * as fetchAPI from "../../services/fetch-api";
import ArticlesList from "../../components/ArticlesList/ArticlesList";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
// import { Route } from "react-router-dom";
// import SingleArticlePage from "../SingleArticle/SingleArticle";

const categories = [
  { value: "story", label: "Story" },
  { value: "comment", label: "Comment" },
  { value: "poll", label: "Poll" },
  { value: "pollopt", label: "Pollopt" },
  { value: "show_hn", label: "Show_hn" },
  { value: "ask_hn", label: "Ask_hn" },
  { value: "front_page", label: "Front_page" },
];

const getCategoryWithValue = (allCategories, value) =>
  allCategories.find((category) => category.value === value);

const getCategoryFromLocation = (location) =>
  queryString.parse(location.search).tags;

export default class Articles extends Component {
  state = { articles: [] };

  componentDidMount() {
    const selectedCategory = getCategoryFromLocation(this.props.location);

    fetchAPI.axiosRequest("foo", selectedCategory).then(({ data }) => {
      this.setState({ articles: data.hits });
      console.log(data.hits);
    });
  }

  handleCategoryChange = (selectedCategory) => {
    console.log(selectedCategory);
    if (selectedCategory) {
      return this.props.history.push({
        ...this.props.location,
        search: `tags=${selectedCategory.value}`,
      });
    }
    this.props.history.push({
      ...this.props.location,
      search: "",
    });
  };

  render() {
    const { articles } = this.state;
    const { location } = this.props;

    const parsedCategoryValue = getCategoryFromLocation(location);
    console.log(parsedCategoryValue);

    const selectedCategory2 = getCategoryWithValue(
      categories,
      parsedCategoryValue
    );
    console.log(selectedCategory2);

    return (
      <>
        <h1>Articles</h1>
        <CategorySelector
          categories={categories}
          onChange={this.handleCategoryChange}
          value={selectedCategory2}
        />
        <ArticlesList articles={articles} />
        {/* <Route
          path={`${this.props.match.path}/:articleId`}
          component={SingleArticlePage}
        /> */}
      </>
    );
  }
}
