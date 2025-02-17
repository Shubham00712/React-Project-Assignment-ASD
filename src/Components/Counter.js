import "./style.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const bgColor = 0.1;
  return (
    <div
      className="counter-container"
      style={{ backgroundColor: `rgba(61, 141, 122, ${count * bgColor})` }}
    >
      <h2>{count}</h2>
      <h4>Counter</h4>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default Counter;
