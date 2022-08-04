import React, { useState } from "react";

function UseState(props) {
  const initValues = () => {
    let total = 0;
    for (let i = 0; i < 10000000; i++) {
      total += i;
    }
    return total;
  };
  // const [count, setCount] = useState(initValues()); // ảnh hưởng tới performance
  const [count, setCount] = useState(() => {
    //dùng arrow function
    return initValues();
  });

  const handleClick = () => {
    setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount((prevState) => {
    //   return prevState + 1;
    // });
    // setCount((prevState) => {
    //   return prevState + 1;
    // });
    // setCount((prevState) => {
    //   return prevState + 1;
    // });
    // setCount((prevState) => {
    //   return prevState + 1;
    // });
  };
  return (
    <div>
      <pre>Functional Component</pre>
      <p>You clicked {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

UseState.propTypes = {};

export default UseState;
