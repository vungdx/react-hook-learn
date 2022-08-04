import React, { useRef } from "react";
import PropTypes from "prop-types";

function UseRef(props) {
  const countRef = useRef(0);
  const ref = useRef(null);
  const handleClick = () => {
    countRef.current = countRef.current + 1;
  };
  return (
    <>
      <button onClick={handleClick}>Count up</button>
      <input type="text" ref={ref} />
    </>
  );
}

UseRef.propTypes = {};

export default UseRef;
