import { connect } from "react-redux";
import TagFilter from "./TagFilter";
import { getSelectedTag } from "../../redux/posts/postSelector";
import * as ActionType from "../../redux/posts/postActions";

const mapStateToProps = (state) => ({
  currentTag: getSelectedTag(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeTag: (tag) => dispatch(ActionType.changeTag(tag.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TagFilter);
