import React from "react";
import { connect } from "react-redux";
import Timer from "../Timer/TimerContainer";
import StepSelector from "../StepSelector/StepSelectorContainer";
import PostList from "../PostList/PostListContainer";
import TagFilter from "../TagFilter/TagFilterContainer";
import * as postsOperations from "../../redux/posts/postsOperations";
import posts from "../../redux/posts/posts.json";
import TotalLikes from "../TotalLikes/TotalLikesContainer";
import PostEditor from "../PostEditor/PostEditorContainer";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPosts(posts);
  }

  render() {
    return (
      <div style={containerStyle}>
        <Timer />
        <StepSelector />
        <TagFilter />
        <PostEditor />
        <PostList />
        <TotalLikes />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (posts) => dispatch(postsOperations.fetchPosts(posts)),
});

export default connect(null, mapDispatchToProps)(App);
