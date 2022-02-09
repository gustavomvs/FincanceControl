import './style.css'
import {useState} from 'react'


function Form({ listTransactions , setListTransactions}) {

  const [valor, setValor] = useState(0)
  const [descricao, setdescricao] = useState("")
  const [tipo, setTipo] = useState("entrada")

  function atualizarLista(){
    setListTransactions([
      ...listTransactions,
      { description: descricao, type: tipo, value: valor },
    ]);
  }

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <p className='pDescricao'>Descrição</p>
      
      <input className='input1' onChange={(e) => setdescricao(e.target.value)} placeholder="Digite aqui sua descrição"></input>
      <p className='pEx'>Ex: Compra de roupas</p>
      <div className='valores'>
        <div className='pValor'>
          <p>Valor</p>
          <input className='input2' type='number' onChange={(e) => {setValor(e.target.value)}} placeholder="1                      R$"></input>
        </div>
        <div className='pValor'>
          <p>Tipo de valor</p>
          <select onChange={(e) => {setTipo(e.target.value)}}>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </div>
      <button onClick={atualizarLista}>Inserir valor</button>
    </form>
  );
}

export default Form