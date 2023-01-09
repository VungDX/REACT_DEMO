import React from "react";

function Children(props) {
  const sendData = () => {
    props.parentFunction("message từ thằng con");
  };
  return (
    <div>
      <button onClick={() => sendData()}>Send Data</button>
    </div>
  );
}

Children.propTypes = {};

export default Children;
