import React from "react";
// import { connect } from "react-redux";
// import * as TimerActions from "../../redux/TimerActions";
import css from "./Timer.module.css";

const Timer = ({ value, step, onIncrement, onDecrement }) => (
  <div className={css.timerWrapper}>
    <button type="button" onClick={() => onDecrement(step)}>
      -
    </button>
    <p>{value} minutes</p>
    <button type="button" onClick={() => onIncrement(step)}>
      +
    </button>
  </div>
);

//************Желательно выносить логику с экшинами и коннэктом в отдельный файл - контейнер */
// const mapStateToProps = (state) => ({ value: state.value }); //mapStateToProps(state, [ownProps]) - функция соединяющая часть состояния с пропами компонента. Таким образом, связанный компонент будет иметь доступ к необходимой ему части состояния.
// // ---Получает state как параметр и позволяет выбрать из всего state только необходимые компоненту слайсы (части).
// // ---Возвращает объект, свойства которого дополнят props компонента.
// // ---Вызывается каждый раз когда хранилище обновляется.
// // ---Если нет необходимости подписываться на обновления, передаем null.
// // ---Если функция объявлена ​​как принимающая два параметра, первым будет передана ссылка на state, а вторым ссылка на пропы самого компонента.

// const mapDispatchToProps = (dispatch) => ({
//   onIncrement: () => dispatch(TimerActions.increment(10)),
//   onDecrement: () => dispatch(TimerActions.decrement(5)),
// });

export default Timer;
