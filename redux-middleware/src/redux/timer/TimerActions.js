//Типы
export const Type = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  CHANGE_STEP: "CHANGE_STEP",
};

//Действия (actions) - это объекты, которые помогают доставить данные из компонентов в хранилище.
// ---Хранят минимально необходимый набор информации.
// ---Должны иметь свойство type, которое указывает тип выполняемого действия.
// ---Помимо поля type, структура действия может быть произвольной.
export const increment = (value) => ({
  type: Type.INCREMENT,
  payload: value,
  meta: { throttle: 500, analitics: true },
});

export const decrement = (value) => ({
  type: Type.DECREMENT,
  payload: value,
  meta: { throttle: 500, analitics: true },
});

export const changeStep = (step) => ({
  type: Type.CHANGE_STEP,
  payload: step,
});
