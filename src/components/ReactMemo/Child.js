import React from "react";

function Child(props) {
  console.log("Child ReactMemo");
  return <p>Child ReactMemo</p>;
}

Child.propTypes = {};

// React.memo cũng chiếm bộ nhớ để lưu trữ => lưu ý có hai cách để không phải sử dụng React.memo mà vẫn không để Child phải render
// export default React.memo(Child, (prevProp, nextProp) => {
//   return prevProp.name === nextProp.name;
// });
export default Child;
