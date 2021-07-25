import React from "react";

const Spacer = ({ w, h }) => {
  const style = {
    width: w,
    height: h,
  };

  return <div style={style} />;
};

Spacer.defaultProps = {
  width: "0",
  height: "0",
};

export default Spacer;
