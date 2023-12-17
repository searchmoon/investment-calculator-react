import { useState } from "react";
import FormBox from "./components/Form/FormBox";
import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (e, userInput) => {
    e.preventDefault();
    setUserInput(userInput);
  };

  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <div>
      <Header />

      <FormBox
        onCalc={calculateHandler}
        // userInput={userInput}
        // setUserInput={setUserInput}
        // initialUserInput={initialUserInput}
      />
      {!userInput && <p style={{ textAlign: "center" }}>No investment calculated yet.</p>}
      {userInput && (
        <ResultsTable data={yearlyData} initialInvestment={userInput["current-savings"]} />
      )}
    </div>
  );
}

export default App;
