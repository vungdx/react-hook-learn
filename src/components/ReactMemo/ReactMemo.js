import React, { useCallback, useState } from "react";
import Child from "../ReactMemo/Child";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add count</button>
    </>
  );
}

function ReactMemo({ viewCount }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("David");
  // Dùng React.memo kết hợp với useCallback
  const getUsers = useCallback(() => {
    return fetch("https://reqres.in/api/users");
  }, []);
  return (
    // <>
    //   <p>Count : {count}</p>
    //   <button onClick={() => setCount(count + 1)}>Add count</button>
    //   <Child name={name} getUsers={getUsers} />
    // </>
    <>
      <Counter />
      <Child name={name} getUsers={getUsers} />
    </>
  );
}

ReactMemo.propTypes = {};

export default ReactMemo;
