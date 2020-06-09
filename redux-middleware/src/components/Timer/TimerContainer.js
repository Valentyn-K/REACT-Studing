import { connect } from "react-redux";
import * as TimerActions from "../../redux/timer/TimerActions";
import Timer from "./Timer";
import * as timerSelector from "../../redux/timer/timerSelector";
import WithRenderLog from "../hoc/WithRenderLog";

const mapStateToProps = (state) => ({
  value: timerSelector.getValue(state),
  step: timerSelector.getStep(state),
}); //mapStateToProps(state, [ownProps]) - функция соединяющая часть состояния с пропами компонента. Таким образом, связанный компонент будет иметь доступ к необходимой ему части состояния.
// ---Получает state как параметр и позволяет выбрать из всего state только необходимые компоненту слайсы (части).
// ---Возвращает объект, свойства которого дополнят props компонента.
// ---Вызывается каждый раз когда хранилище обновляется.
// ---Если нет необходимости подписываться на обновления, передаем null.
// ---Если функция объявлена ​​как принимающая два параметра, первым будет передана ссылка на state, а вторым ссылка на пропы самого компонента.

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (step) => dispatch(TimerActions.increment(step)),
  onDecrement: (step) => dispatch(TimerActions.decrement(step)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithRenderLog(Timer));
