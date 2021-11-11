import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // function increment() {
  //   setCount((currentCount) => currentCount + 1);
  //   setCount((currentCount) => currentCount + 1);
  // }
  function increment() {
    // every time we're calculating previously value, it's best practice to call a callback function to calculate the previous value first
    // instead of this:
    // setCount(count + 1)
    setCount(count => count + 1);
  }

  // when the <button> element is clicked, it will run our increment function
  // increment calls the setCount function to:
  // 1. Update the value of count in React's internal state to be count + 1
  // 2. Re-render our component

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
