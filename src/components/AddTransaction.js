import React, { Fragment, useState, useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);

  const changeNome = e => {
    setNome(e.target.value);
  };

  const changeValor = e => {
    setValor(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: nome,
      amount: +valor
    };

    addTransaction(newTransaction);
  };

  return (
    <Fragment>
      <h3>Adicionar nova transação</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Nome</label>
          <input
            type="text"
            placeholder="Digite o nome..."
            value={nome}
            onChange={changeNome}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Valor <br />
            (negativo - saída, positivo - entrada)
          </label>
          <input
            type="number"
            placeholder="Digite o valor..."
            value={valor}
            onChange={changeValor}
          />
        </div>
        <button className="btn">Adicionar transação</button>
      </form>
    </Fragment>
  );
};
