import React from "react";
import PropTypes from "prop-types";
import { useReducer } from "./useReducer";

function fetchReducer(state, action) {
  switch (action.type) {
    case "fetchAPI/request":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "fetchAPI/success":
    case "fetchAPI/error":
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        data: action.data,
      };
    default:
      return state;
  }
}

function Hook(props) {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: [],
    isLoading: false,
    error: null,
  });
  return <div>Hook</div>;
}

Hook.propTypes = {};

export default Hook;
