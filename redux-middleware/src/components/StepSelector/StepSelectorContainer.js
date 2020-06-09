import { connect } from "react-redux";
import * as TimerActions from "../../redux/timer/TimerActions";
import StepSelector from "./StepSelector";
import * as timerSelector from "../../redux/timer/timerSelector";

const mapStateToProps = (state) => ({ value: timerSelector.getStep(state) });
const mapDispatchToProps = (dispatch) => ({
  onChange: (step) => dispatch(TimerActions.changeStep(step.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepSelector);
