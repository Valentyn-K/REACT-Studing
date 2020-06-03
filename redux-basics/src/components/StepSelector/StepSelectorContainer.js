import { connect } from "react-redux";
import * as TimerActions from "../../redux/TimerActions";
import StepSelector from "./StepSelector";

const mapStateToProps = (state) => ({ value: state.step });
const mapDispatchToProps = (dispatch) => ({
  onChange: (step) => dispatch(TimerActions.changeStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepSelector);
