import { createSelector } from "reselect";

export const getPostItems = (state) => state.posts.items;

export const getSelectedTag = (state) => state.posts.selectedTag;

// export const getPostsWithSelectedTag = (state) => {
//   const posts = getPostItems(state);
//   const tag = getSelectedTag(state);
//   return posts.filter((post) => post.location === tag);
// };

export const getPostsWithSelectedTag = createSelector(
  [getPostItems, getSelectedTag],
  (posts, tag) => posts.filter((post) => post.location === tag)
);

export const getTotalLikes = createSelector(getPostItems, (items) =>
  items.reduce((acc, item) => Number(acc) + Number(item.likes), 0)
);
