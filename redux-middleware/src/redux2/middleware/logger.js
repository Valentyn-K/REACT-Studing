const logger = (store) => (next) => (action) => {
  //   console.log(action);
  console.group(action.type);
  console.info("dispatching", action);
  console.groupEnd(action.type);

  next(action);
};
export default logger;
