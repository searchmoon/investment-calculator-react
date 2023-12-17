import { useState } from "react";
import classes from "./FormBox.module.css";

const FormBox = (props) => {
  const initialUserInput = {
    "current-savings": 10000, // 저축 시작 금액(초기 투자금)
    "yearly-contribution": 1200, // 매년 저축 금액
    "expected-return": 7, // 예상 환급 금액 (%)
    duration: 10, // 저축 기간
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  const inputChangeHandler = (e) => {
    setUserInput((prev) => ({
      ...prev,
      [e.target.id]: Number(e.target.value),
    }));

    console.log(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  return (
    <form onSubmit={(e) => props.onCalc(e, userInput)} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={inputChangeHandler}
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={inputChangeHandler}
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input
            onChange={inputChangeHandler}
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
            name="expectedReturn"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={inputChangeHandler}
            value={userInput.duration}
            type="number"
            id="duration"
            name="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default FormBox;
