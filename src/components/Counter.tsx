import { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className={classes.h1}>{count}</h1>
      <button className={classes.button} onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
};

export default Counter;
