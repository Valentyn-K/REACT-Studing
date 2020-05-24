import React, { Component } from "react";
import * as fetchAPI from "../../services/fetch-api";
import Article from "../../components/Article/Article";

const getIdFromProps = (props) => props.match.params.articleId;

export default class SingleArticle extends Component {
  state = { article: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    fetchAPI
      .axiosRequestforSingleArticle(id)
      .then(({ data }) => this.setState({ article: data }));
  }

  handleGoBack = () => {
    console.log(this.props);
    this.props.history.push("/articles");
  };

  render() {
    const { article } = this.state;
    return (
      <>
        <h1>Single article page</h1>
        {article && <Article {...article} onGoBack={this.handleGoBack} />}
      </>
    );
  }
}
