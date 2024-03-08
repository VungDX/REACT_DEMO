import { useState, useEffect } from "react";

const Child = ({ parentCallbackMethod }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    parentCallbackMethod(count);
  }, [count, parentCallbackMethod]);

  const increment = () => {
    setCount(count + 1);
  }
  return (
    <button
      type="button" className="btn btn-primary"
      onClick={increment}
    >
      Increment
    </button>
  );
};

export default Child;