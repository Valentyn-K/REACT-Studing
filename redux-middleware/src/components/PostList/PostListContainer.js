import { connect } from "react-redux";
// import { compose } from "redux";
import PostList from "./PostList";
import * as postSelector from "../../redux/posts/postSelector";
// import { deletePost } from "../../redux/posts/postActions"; замість цього те що нижче
import * as postsOperations from "../../redux/posts/postsOperations";
import WithRenderLog from "../hoc/WithRenderLog";

const mapStateToProps = (state) => ({
  items: postSelector.getPostsWithSelectedTag(state),
});

// це
// const mapDispatchToProps = (dispatch) => ({
//   deletePost: (id) => dispatch(postActions.deletePost(id)),
// });
//те ж саме що і, якщо однакова назва пропа і екшина

// const mapDispatchToProps = {
//   deletePost,
// };

const mapDispatchToProps = {
  onDeletePost: postsOperations.deletePost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithRenderLog(PostList));

// const withConnect = connect(mapStateToProps, mapDispatchToProps)(PostList);

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps)(PostList),
//   WithRenderLog(PostList)
// );
