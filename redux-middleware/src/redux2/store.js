//Хранилище (store) - js-объект, который содержит состояние приложения и методы доступа к нему, отправки действий и регистрации слушателей.

import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";
import TimerReducer from "./TimerReducer";
import logger from "./middleware/logger";
// import logger from "redux-logger";
import throttle from "./middleware/throttle";
// import stateValidation from "./middleware/state-validation";
import PostsReducer from "./PostReducer";

const rootReducer = combineReducers({
  timer: TimerReducer,
  posts: PostsReducer,
});

const enhanser = applyMiddleware(throttle, logger);

const store = createStore(rootReducer, composeWithDevTools(enhanser));

export default store;
