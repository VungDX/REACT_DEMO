import React, { useState, useEffect } from "react";

function Mounted(props) {
  const [title, setTitle] = useState(1);
  // console.log("mounted");
  // useEffect(() => {
  //   console.log("mounted");
  // });
  console.log("mounted");
  useEffect(() => {
    console.log("useEffect dơn");
  });

  const handleChangeState = () => {
    setTitle(title + 1);
  };
  return (
    <div>
      {/* <input value={title} onChange={(e) => setTitle(e.target.value)} /> */}
      <button>Test</button>
      {console.log("render")}
    </div>
  );
}

Mounted.propTypes = {};

export default Mounted;
