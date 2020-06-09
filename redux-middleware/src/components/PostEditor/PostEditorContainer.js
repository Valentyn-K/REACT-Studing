import { connect } from "react-redux";
import PostEditor from "./PostEditor";
import * as postsOperations from "../../redux/posts/postsOperations";

const mapDispatchToProps = {
  onSubmit: postsOperations.addPost,
};

export default connect(null, mapDispatchToProps)(PostEditor);
