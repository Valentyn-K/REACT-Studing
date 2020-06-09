//reducer - функция, которая возвращает следующее дерево состояния, учитывая текущее дерево состояния и действие для обработки

//Редюсеры (reducers) - это чистые функции, которые принимают предыдущее состояние приложения и действие, а затем возвращают новое следующее состояние.
// Они определяют, как изменяется состояние приложения в ответ на действия, отправленные в хранилище.
//Действия описывают только то, что произошло, а не как изменяется состояние приложения.

import { Type } from "./TimerActions";
import { combineReducers } from "redux";

const ValueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.INCREMENT:
      return state + payload;

    case Type.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const StepReducer = (state = 5, { type, payload }) => {
  switch (type) {
    case Type.CHANGE_STEP:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  value: ValueReducer,
  step: StepReducer,
});
