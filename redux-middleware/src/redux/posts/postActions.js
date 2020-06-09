export const ActionType = {
  //   FETCH_POSTS: "FETCH_POSTS",

  FETCH_POSTS_START: "FETCH_POSTS_START",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR: "FETCH_POSTS_ERROR",

  //   DELETE_POST: "DELETE_POST",
  DELETE_POST_START: "DELETE_POST_START",
  DELETE_POST_SUCCESS: "DELETE_POST_SUCCESS",
  DELETE_POST_ERROR: "DELETE_POST_ERROR",

  POST_ADD_START: "POST_ADD_START",
  POST_ADD_SUCCESS: "POST_ADD_SUCCESS",
  POST_ADD_ERROR: "POST_ADD_ERROR",

  CHANGE_TAG: "CHANGE_TAG",
};

// export const fetchPosts = (posts) => ({
//   type: ActionType.FETCH_POSTS,
//   payload: posts,
// });

export const fetchPostsStart = () => ({
  type: ActionType.FETCH_POSTS_START,
});

export const fetchPostsSuccess = (posts) => ({
  type: ActionType.FETCH_POSTS_SUCCESS,
  payload: { posts },
});

export const fetchPostsError = (error) => ({
  type: ActionType.FETCH_POSTS_ERROR,
  payload: { error },
});

// export const deletePost = (id) => ({
//   type: ActionType.DELETE_POST,
//   payload: id,
// });

export const deletePostStart = () => ({
  type: ActionType.DELETE_POST_START,
});

export const deletePostSuccess = (id) => ({
  type: ActionType.DELETE_POST_SUCCESS,
  payload: { id },
});

export const deletePostError = (error) => ({
  type: ActionType.DELETE_POST_ERROR,
  payload: { error },
});

export const postAddStart = () => ({
  type: ActionType.POST_ADD_START,
});

export const postAddSuccess = (post) => ({
  type: ActionType.POST_ADD_SUCCESS,
  payload: { post },
});

export const postAddError = (error) => ({
  type: ActionType.POST_ADD_ERROR,
  payload: { error },
});

export const changeTag = (tag) => ({
  type: ActionType.CHANGE_TAG,
  payload: tag,
});
