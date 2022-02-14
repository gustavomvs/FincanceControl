import "./App.css";
import { useImperativeHandle, useState } from "react";
import React from "react";
import Form from "./components/Form/Form";
import List from "./components/List/index";
import Valor from "./components/Valor";
import Header from "./components/header";
import Inicio from "./components/Inicio";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [inicio, setInicio] = useState(0);

  function somar(){
    setInicio(1)
  }

  return (
    <div>
      {inicio === 0 ? <Inicio somar={somar}/>
      :
      <div>
        <div className="logozinho">
          <Header setInicio={setInicio} />
        </div>
        <div className="App-div App">
          <div className="formizinho">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              />
            <Valor listTransactions={listTransactions} />
          </div>
          <div className="listaDeItens">
            <List
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
              />
          </div>
        </div>
      </div>}
    </div>
  );
}

export default App;
