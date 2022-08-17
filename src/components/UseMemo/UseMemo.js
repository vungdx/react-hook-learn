import React, { useMemo, useState } from "react";

function expensiveFunction(number) {
  console.log("Begin");
  const start = new Date();
  while (new Date() - start < 2000); // đợi ở đây 2s
  console.log("Finish after", new Date() - start, "ms");
  return number + 10;
}

function UseMemo(props) {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  // nếu giá trị tham số không bị thay đổi => useMemo có tác dụng không thực hiện lại tính toán này
  // tốt cho performance, nhưng lại chiếm dung lượng bộ nhớ
  // dùng useMemo khi có 1 tính toán quá mất thời gian thì nên dùng useMemo (với điều kiện tham số không bị thay đổi)
  const number = useMemo(() => {
    return expensiveFunction(num);
  }, [num]);

  // const number = expensiveFunction(10);
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
