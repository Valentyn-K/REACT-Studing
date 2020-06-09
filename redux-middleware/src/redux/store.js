//Хранилище (store) - js-объект, который содержит состояние приложения и методы доступа к нему, отправки действий и регистрации слушателей.

import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { devToolsEnhancer } from "redux-devtools-extension";
import timerReducer from "./timer/TimerReducer";
import postsReducer from "./posts/PostReducer";

//middlewares******************!!!!!!!!!!!

// import { logger } from "./middleware/logger";
import logger from "redux-logger";
import throttle from "./middleware/throttle";
import stateValidation from "./middleware/stateValidation";
import sendAnalitics from "./middleware/analitics";
import reduxThunk from "redux-thunk";

//*********************!!!!!!!!!!! */
const rootReducer = combineReducers({
  timer: timerReducer,
  posts: postsReducer,
});

const middleware = [
  throttle,
  reduxThunk,
  stateValidation,
  sendAnalitics,
  logger,
];
const enhanser = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhanser));

export default store;
