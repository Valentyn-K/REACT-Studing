export const Type = {
  FETCH_POSTS_START: "FETCH_POSTS_START",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR: "FETCH_POSTS_ERROR",

  DELETE_POST: "DELETE_POST",
  CHANGE_TAG: "CHANGE_TAG",
};

export const fetchPostsStart = () => ({
  type: Type.FETCH_POSTS_START,
});

export const fetchPostsSuccess = (posts) => ({
  type: Type.FETCH_POSTS_SUCCESS,
  payload: { posts },
});

export const fetchPostsError = (error) => ({
  type: Type.FETCH_POSTS_ERROR,
  payload: { error },
});

export const deletePost = (id) => ({
  type: Type.DELETE_POST,
  payload: id,
});

export const changeTag = (tag) => ({
  type: Type.CHANGE_TAG,
  payload: { tag },
});
