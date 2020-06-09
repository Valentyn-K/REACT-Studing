import { connect } from "react-redux";
import WithRenderLog from "../hoc/WithRenderLog";
import TotalLikes from "./TotalLikes";
import * as postSelector from "../../redux/posts/postSelector";

const mapStateToProps = (state) => ({
  likes: postSelector.getTotalLikes(state),
});

export default connect(mapStateToProps)(WithRenderLog(TotalLikes));
