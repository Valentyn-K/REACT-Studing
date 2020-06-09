import React, { Component } from "react";
import Timer from "../Timer/TimerContainer";
import StepSelector from "../StepSelector/StepSelectorContainer";
import { connect } from "react-redux";
import { fetchPostsOperation } from "../../redux2/postsOperations/postOperations";
import TagFilter from "../TagFilter/TagFilter";
import PostList from "../PostList/PostList";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

class App extends Component {
  componentDidMount() {
    console.log(this.props.fetchPosts());
  }

  render() {
    return (
      <div style={containerStyle}>
        {/* <Timer />
      <StepSelector /> */}
        <TagFilter />
        <PostList />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchPosts: fetchPostsOperation,
};

export default connect(null, mapDispatchToProps)(App);
