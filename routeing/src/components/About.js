import React from "react";
import Rainbow from "../hoc/Rainbow";
const About = (props) => {
  console.log(props);
  return (
    <div>
      <div className="container">
        <h4 className="center">About</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          repudiandae repellat illo magni eligendi cupiditate voluptates eius
          nam voluptate. Incidunt nihil ullam quae quia officia quaerat,
          deserunt eligendi explicabo totam?
        </p>
      </div>
    </div>
  );
};
// passing the component(const) through the high component(Rainbow)
export default Rainbow(About);
