import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsError,
} from "../postsActions";
import axios from "axios";

export const fetchPostsOperation = () => (dispatch) => {
  dispatch(fetchPostsStart());

  axios
    .get("http://localhost:3000/posts")
    .then((response) => {
      dispatch(fetchPostsSuccess(response.data));
    })
    .catch((error) => dispatch(fetchPostsError(error)));
};
