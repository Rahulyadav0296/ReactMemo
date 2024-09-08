import React from "react";

function Span(props) {
  console.log("Children component Executed");
  return (
    <div>
      <span className="counter-display">{props.children}</span>
    </div>
  );
}

/*
React.memo is a HOC used to prevent the un-necessary re-render oif the functional compoenet unless the props changed
It Ensures that the function is being re-render only when the props changed
React.memo does not prevent the function component from being re-creation but its prevent the the funcional component from being re-render unless the props changed
*/
export default React.memo(Span);
