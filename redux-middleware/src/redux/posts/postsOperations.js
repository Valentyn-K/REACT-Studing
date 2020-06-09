import axios from "axios";

import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsError,
  deletePostStart,
  deletePostSuccess,
  deletePostError,
  postAddStart,
  postAddSuccess,
  postAddError,
} from "./postActions";

export const fetchPosts = () => (dispatch) => {
  dispatch(fetchPostsStart());

  axios
    .get("http://localhost:8080/posts")
    .then((response) => {
      dispatch(fetchPostsSuccess(response.data));
      console.log(response.data);
    })
    .catch((error) => dispatch(fetchPostsError(error)));
};

export const deletePost = (id) => (dispatch) => {
  dispatch(deletePostStart());

  axios
    .delete(`http://localhost:8080/posts/${id}`)
    .then(() => dispatch(deletePostSuccess(id)))
    .catch((error) => dispatch(deletePostError(error)));
};

export const addPost = (post) => (dispatch) => {
  dispatch(postAddStart());

  axios
    .post("http://localhost:8080/posts", post)
    .then((response) => {
      dispatch(postAddSuccess(response.data));
      console.log("post-add-response.data", response.data);
    })
    .catch((error) => dispatch(postAddError(error)));
};
