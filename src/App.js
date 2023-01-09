import React, { useState } from "react";
// import Mounted from "./components/Mounted";
// import Ref from "./components/Ref";
import LifeCycleComponent from "./components/LifeCycleComponent";

function App(props) {
  // const [count, setCount] = useState(0);
  // const handleCountUp = () => {
  //   setCount(count + 1);
  // };
  // console.log("re-render ở thằng cha");
  return (
    <div>
      {/* <button onClick={handleCountUp}>Count up</button>
      <Ref count={count} /> */}
      <LifeCycleComponent />
    </div>
  );
}

export default App;
