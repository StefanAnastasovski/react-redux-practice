import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispetch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispetch({ type: "TOGGLE" });
  };

  const incrementHandler = () => {
    dispetch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispetch({ type: "DECREMENT" });
  };

  const increaseHandler = () => {
    dispetch({ type: "INCREASE", payload: { amount: 5 } });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>DECREMENT</button>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={increaseHandler}>INCREASE</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
