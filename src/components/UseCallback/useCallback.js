import React, { useCallback, useState } from "react";
import Child from "./Child";

function UseCallback(props) {
  const [users, setUsers] = useState([]);
  // useCallback cũng mất 1 vùng nhớ để ghi nhớ function đang được bọc trong useCallback
  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);

  // const getData = (type) => {
  //   return fetch(`https://reqres.in/api/${type}`);
  // };

  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };

  return (
    <div>
      <h1>Parent component data -- List users</h1>
      <button onClick={handleClick}>Get Users Data</button>
      <ul>
        {users.length > 0
          ? users.map((user) => (
              <li key={user.id}>
                {user.first_name} {user.last_name}
              </li>
            ))
          : ""}
      </ul>
      <Child getData={getData} />
    </div>
  );
}

UseCallback.propTypes = {};

export default UseCallback;
