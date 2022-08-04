import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

function expensiveFunction(number) {
  console.log("bắt đầu");
  const start = new Date();
  // đợi ở đay 3s
  while (new Date() - start < 3000);
  console.log("Kết thúc", new Date() - start, "ms");
  return number * number;
}

function UseMemo(props) {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(20);
  const number = useMemo(() => {
    // nếu giá trị tham số 10 mà không bị thay đổi => useMemo có tác dụng không thực hiện lại tính toán này
    // tốt cho performance, nhưng lại chiếm dung lượng bộ nhớ
    // tính toán quá mất thời gian thì nên dùng useMemo
    expensiveFunction(num);
    // expensiveFunction(10);
  }, [num]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add count</button>
      <p>Number: {number}</p>
    </div>
  );
}

UseMemo.propTypes = {};

export default UseMemo;
