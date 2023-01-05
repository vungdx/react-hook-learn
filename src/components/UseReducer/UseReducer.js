import React, { useReducer } from "react";
import PropTypes from "prop-types";

const reducer = (state, action) => {
  switch (action) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const reducer2 = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return action.data;
    default:
      return state;
  }
};

const initState = {
  loading: false,
  data: [],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_SUCCESS":
      console.log("GET_USER_SUCCESS ở đây", action.data);
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        data: [],
        error: action.data,
      };
    default:
      break;
  }
};

function UseReducer(props) {
  // useReducer trả về array với element đầu tiên là tên state, dispatch
  const [count, dispatch] = useReducer(reducer, 0); //useReducer nhận vào hai tham số là reducer và giá trị khởi tạo
  const [count2, dispatch2] = useReducer(reducer2, 0);
  const [users, userDispatch] = useReducer(userReducer, initState);
  console.log("users là", users);

  const getUsers = () => {
    console.log("ấn vào đây");
    userDispatch({
      type: "GET_USER_REQUEST",
    });

    setTimeout(() => {
      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((res) => {
          userDispatch({
            type: "GET_USER_SUCCESS",
            data: res.data,
          });
        })
        .catch((err) => {
          userDispatch({
            type: "GET_USER_ERROR",
            data: err,
          });
        });
    }, 2000);
  };

  return (
    <>
      <button onClick={getUsers}>GET USERS</button>
      {users.loading ? <p>Loading...</p> : ""}
      <ul>
        {users.data.length > 0
          ? users.data.map((user) => (
              <li key={user.id}>
                {user.last_name} {user.first_name}
              </li>
            ))
          : ""}
      </ul>
      <h1>COUNT 1: {count}</h1>
      <button onClick={() => dispatch("INCREASE")}>INCREASE</button>
      <button>DECREASE</button>
      <button>RESET</button>
      <h1>COUNT 2: {count2}</h1>
      <button
        onClick={() =>
          dispatch2({
            type: "SET_VALUE",
            data: 10,
          })
        }
      >
        SET VALUE
      </button>
    </>
  );
}

UseReducer.propTypes = {};

export default UseReducer;

/**
INITIALSTATE: 
const [count, countDispatch] = useReducer(countReducer, initialState);

ACTION: 
countDispatch('COUNT_INCREMENT') 

REDUCERS: là function nhận vào 2 tham số state và action
const countReducer = (state, action)=> {
  switch(action){
    case 'COUNT_INCREMENT': 
      state = state + 1
    case 'ABC...': 
      state = ...
  }
}
*/
