import { useState } from "react";
import styles from "./FormBox.module.css";

const FormBox = (props) => {
  const initialValue = {
    "current-savings": 0,
    "yearly-contribution": 0,
    "expected-return": 0,
    duration: 0,
  };

  const [userInput, setInputValue] = useState(initialValue);

  const changeHandler = (e) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));

    console.log(userInput);
  };

  return (
    <form className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={changeHandler}
            value={userInput.currentSavings}
            type="number"
            id="current-savings"
            name="currentSavings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={changeHandler}
            value={userInput.yearlyContribution}
            type="number"
            id="yearly-contribution"
            name="yearlyContribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input
            onChange={changeHandler}
            value={userInput.expectedReturn}
            type="number"
            id="expected-return"
            name="expectedReturn"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={changeHandler}
            value={userInput.duration}
            type="number"
            id="duration"
            name="duration"
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt}>
          Reset
        </button>
        <button onClick={props.onCalc(userInput)} type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default FormBox;
