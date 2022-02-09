import './App.css';
import { useState } from 'react'
import React from 'react';
import Form from './components/Form/Form';
import List from './components/List/index'
import Valor from './components/Valor';
import Header from './components/header';

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  
  return (
    <div className="App">
        <div className='logozinho'>
        <Header/>
        </div>
      <header className="App-header">
        <div className='formzinho'>
        <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
        <Valor listTransactions={listTransactions}/>
        </div>
        <div className='listaDeItens'>
        <List listTransactions={listTransactions}/>
        </div>
      </header>
    </div>
  );
}

export default App;
