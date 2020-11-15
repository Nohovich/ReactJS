// A higher-order component (HOC) is an advanced technique in React for reusing component logic.
// HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
import React from "react";
const Rainbow = (WrappedComponent) => {
  const colours = ["red", "pink", "orange", "blue", "green", "yellow"];
  const randomColour = colours[Math.floor(Math.random() * 6)];
  const className = randomColour + "-text";

  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};
export default Rainbow;
