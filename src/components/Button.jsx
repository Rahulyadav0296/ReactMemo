import React from "react";

function Button(props) {
  console.log("Butten Executed");
  return (
    <button
      onClick={props.clickHandler}
      className={
        props.children === "-"
          ? "counter-button decrement"
          : "counter-button increment"
      }
    >
      {props.children}
    </button>
  );
}

export default React.memo(Button);
