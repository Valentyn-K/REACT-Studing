const sendAnalitics = (store) => (next) => (action) => {
  next(action);

  const souldSend = action.meta && action.meta.analitics;

  if (souldSend) {
    console.log(`Sending ${action.type} to analitics server`);
  }
};
export default sendAnalitics;
