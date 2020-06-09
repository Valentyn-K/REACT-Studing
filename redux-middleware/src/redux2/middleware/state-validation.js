import tv4 from "tv4";
import scheme from "../scheme.json";

const stateValidation = (store) => (next) => (action) => {
  next(action);

  const isValid = tv4.validate(store.getState(), scheme);

  if (!isValid) {
    console.warning("Invalid state scheme detected");
    console.log(tv4.error);
  }
};

export default stateValidation;