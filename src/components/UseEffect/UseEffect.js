import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function UseEffect(props) {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");
  const [srcollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  // Callback trong useEffect giống như componentDidMount
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      // clean up giống như componentWillUnmount; nếu không được dọn dẹp thì event vẫn còn trong bộ nhớ
      // clean-up được chạy trước, xong mới chạy đoạn code ngoài clean-up
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div style={{ height: "3000px" }}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p style={{ position: "fixed", bottom: "20px", left: "20px" }}>
        {srcollPosition}
      </p>
    </div>
  );
}

UseEffect.propTypes = {};

export default UseEffect;
