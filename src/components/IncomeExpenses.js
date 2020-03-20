import React, { Fragment, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <Fragment>
      <div className="inc-exp-container">
        <div>
          <h4>Entrada</h4>
          <p className="money plus">+R$ {income}</p>
        </div>
        <div>
          <h4>Saída</h4>
          <p className="money minus">-R$ {expense}</p>
        </div>
      </div>
    </Fragment>
  );
};
