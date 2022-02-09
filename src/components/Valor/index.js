import { useState } from "react";
import './style.css'

function Valor({ listTransactions }) {
 
  const totalDaConta = listTransactions.reduce((a, b) => a + Number(b.value), 0)

  return (
    <div className="valorT">
      <div className="paragrafos">
      <p className="p1">Valor total:</p>
      <p className="p2">O valor se refere as entradas</p>
      </div>
      <div className="valor">
      $ {totalDaConta}
      </div>
    </div>
  );
}

export default Valor;
