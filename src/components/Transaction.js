import React, { Fragment, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction: { text, amount, id } }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = amount < 0 ? "-" : "+";

  return (
    <Fragment>
      <li className={amount < 0 ? "minus" : "plus"}>
        {text}{" "}
        <span>
          {sign} R${Math.abs(amount)}
        </span>
        <button className="delete-btn" onClick={() => deleteTransaction(id)}>
          x
        </button>
      </li>
    </Fragment>
  );
};
