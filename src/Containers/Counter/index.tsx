import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTypeSelector } from "../../App/hooks";
import {
  handleDecCounter,
  handleIncCounter,
  setCounterName,
} from "../../Features/Counter/counterSlice";

export const Counter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { counterValue, counterName } = useTypeSelector(
    (state) => state.counter
  );

  const styles = {
    color: counterValue > 13 ? "red" : counterValue < 5 ? "green" : "white",
  };
  return (
    <>
      <button onClick={() => navigate("/")}>back to home page</button>
      <h1 style={styles}>{counterValue === 15 ? "COUNTER FULL" : ""}</h1>
      <input
        name="counterName"
        value={counterName}
        onChange={(e) => {
          dispatch(setCounterName(e.target.value));
        }}
      />
      <br />
      <h3>{counterName ? counterName + " counter" : ""}</h3>
      <div>
        <button onClick={(e) => dispatch(handleIncCounter(1))}>
          Increament Counter
        </button>
        <button onClick={(e) => dispatch(handleDecCounter(1))}>
          Decrement Counter
        </button>
      </div>
      <h3 style={styles}>{counterValue}</h3>
    </>
  );
};
