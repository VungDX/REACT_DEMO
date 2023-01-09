import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

function Ref(props) {
  const countRef = useRef(0);
  const obj = {
    current: 0,
  };
  const [count, setCount] = useState(0);
  console.log("re-render thằng con");

  const [saveCount, setSaveCount] = useState(0);
  // useEffect(() => {
  //   setSaveCount(props.count);
  // }, [props.count]);

  const handleClick = () => {
    setCount(count + 1);
    // countRef.current = countRef.current + 1;
    obj.current = obj.current + 1;
  };

  console.log("props nhận được", props);

  console.log("count là state", count);
  console.log("countRef là ref", countRef);
  console.log("obj là object", obj);
  return (
    <div>
      <button onClick={handleClick}>Click button </button>
      <h1>Count từ props {props.count}</h1>
      <h1>State của child {saveCount}</h1>
    </div>
  );
}

Ref.propTypes = {};

export default Ref;
