const throttled = {};

const throttle = (state) => (next) => (action) => {
  const time = action.meta && action.meta.throttle;

  if (!time) return next(action);

  if (throttled[action.type]) return;
  throttled[action.type] = true;
  setTimeout(() => {
    throttled[action.type] = false;
  }, time);
  next(action);
};

export default throttle;
