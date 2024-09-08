import React, { useState } from "react";
import Button from "./components/Button";
import Span from "./components/Span";

function App() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  console.log("Parent Component Executed ");

  return (
    <div className="counter-container">
      <h1>React.memo optimization technique</h1>
      <div className="counter-items">
        <Button clickHandler={handleDecrement}>-</Button>
        <Span>{count}</Span>
        <Button clickHandler={handleIncrement}>+</Button>
      </div>
    </div>
  );
}

export default App;
