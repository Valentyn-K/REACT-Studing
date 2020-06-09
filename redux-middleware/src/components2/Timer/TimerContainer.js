import { connect } from "react-redux";
import * as TimerActions from "../../redux/timer/TimerActions";
import Timer from "./Timer";

const mapStateToProps = (state) => ({
  value: state.timer.value,
  step: state.timer.step.valur,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (step) => dispatch(TimerActions.increment(step)),
  onDecrement: (step) => dispatch(TimerActions.decrement(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
