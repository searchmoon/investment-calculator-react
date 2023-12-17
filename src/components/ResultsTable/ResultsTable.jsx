import classes from "./ResultTable.module.css";

const ResultsTable = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>
              {formatter.format(
                yearData.savingsEndOfYear -
                  props.initialInvestment -
                  yearData.yearlyContribution * yearData.year
              )}
            </td>
            {/* 총 이자 */}
            <td>
              {formatter.format(
                props.initialInvestment + yearData.yearlyContribution * yearData.year
              )}
            </td>
            {/* 총 투자금액(초기 투자금 + 모든 기여액) */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
