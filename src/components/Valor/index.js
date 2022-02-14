import { useState } from "react";
import "./style.css";

function Valor({ listTransactions }) {
  const totalDaConta = listTransactions.reduce((a,b) => {
    return (b.type === "entrada" ? a + Number(b.value) : a - Number(b.value))
  },0);

  return (
    <div>
      {totalDaConta !== 0 ? (
        <div className="valorT">
          <div className="paragrafos">
            <p className="p1">Valor total:</p>
            <p className="p2">O valor se refere as entradas</p>
          </div>
          <div className="valor">$ {totalDaConta}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Valor;
