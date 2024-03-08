import React from "react";
// import Mounted from "./components/Mounted";
// import Ref from "./components/Ref";
import LifeCycleComponent from "./components/LifeCycleComponent";
import Parent from "./components/Parent";

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
      <h1>Callback to transfer data from child to parent</h1>
      <Parent></Parent>
    </div>
  );
}

export default App;
