import { useState } from "react";
import Child from './Child';

const Parent = () => {
  const [number, setNumber] = useState(0);
  const parentCallbackMethod = ((data) => {
    setNumber(data);
  });

  return (
    <div className="Parent">
      <Child parentCallbackMethod={parentCallbackMethod} />
      <h1>Number: {number}</h1>
    </div>
  );
};

export default Parent;