import React from "react";
const WithRenderLog = (WrapperComponent) => (props) => {
  console.log(`@${WrapperComponent.name} re-render`);
  return <WrapperComponent {...props} />;
};

export default WithRenderLog;
