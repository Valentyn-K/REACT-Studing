import { combineReducers } from "redux";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const tagReducer = (state = null, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  selectedTag: tagReducer,
});
