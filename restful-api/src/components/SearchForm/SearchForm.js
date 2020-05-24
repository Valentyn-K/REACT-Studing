import React, { Component } from "react";

export default class SearchForm extends Component {
  state = { query: "" };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onHandleSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />
        {/* <button typr="submit">Submit</button> */}
      </form>
    );
  }
}
