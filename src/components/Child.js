import {  useState } from "react";

const Child = ({ parentCallback }) => {
  const [count, setCount] = useState(0);
  const increment = ()=>{
    setCount(count+1);
    parentCallback(count);
  }
  return (
    <button
      onClick={increment}
    >
      increment
    </button>
  );
};

export default Child;