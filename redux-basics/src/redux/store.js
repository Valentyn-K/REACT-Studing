//Хранилище (store) - js-объект, который содержит состояние приложения и методы доступа к нему, отправки действий и регистрации слушателей.

import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { devToolsEnhancer } from "redux-devtools-extension";
import TimerReducer from "./TimerReducer";
import StepReducer from "./StepReducer";

//болванка
// const reducer = (state = {}, action) => state;
// const store = createStore(reducer);

const rootReducer = combineReducers({
  value: TimerReducer,
  step: StepReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
