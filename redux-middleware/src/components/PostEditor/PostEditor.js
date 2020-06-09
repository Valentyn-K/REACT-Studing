import React, { Component } from "react";

export default class PostEditor extends Component {
  state = { name: "", location: "", likes: 0 };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  hangleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ name: "", location: "", likes: 0 });
  };
  render() {
    const { name, location, likes } = this.state;
    return (
      <form onSubmit={this.hangleSubmit}>
        <textarea
          name="name"
          placeholder="name"
          cols="30"
          rows="10"
          value={name}
          onChange={this.handleChange}
        ></textarea>
        <input
          type="text"
          placeholder="location"
          name="location"
          value={location}
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="likes"
          name="likes"
          value={likes}
          onChange={this.handleChange}
        />

        <button type="submit">Add post</button>
      </form>
    );
  }
}
