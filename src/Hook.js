import React, { useState, useEffect } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  function setValue() {
    setCount(count + 10);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>

        <button onClick={() => setCount(count - 1)}>-</button>
        <input onChange={() => setValue()} />
      </div>
    </div>
  );
}

export default Example;
