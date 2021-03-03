import React from "react";

function Welcome(props) {
  return (
    <div>
      <h2>
        Welcome,{props.name} from {props.city}
      </h2>
    </div>
  );
}

export default Welcome;
