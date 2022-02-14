import './style.css'
import {useState} from 'react'


function Form({ listTransactions , setListTransactions}) {

  const [valor, setValor] = useState(0)
  const [descricao, setdescricao] = useState("")
  const [tipo, setTipo] = useState("entrada")
  const [colocarId, setColocarId] = useState(0)

  function atualizarLista(){
    setColocarId(colocarId + 1)
    setListTransactions([
      ...listTransactions,
      { description: descricao, type: tipo, value: valor, id: colocarId},
    ]);
    setdescricao("")
    setValor("")
  }

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <p className='pDescricao'>Descrição</p>
      
      <input className='input1' value={descricao} onChange={(e) => setdescricao(e.target.value)} placeholder="Digite aqui sua descrição"></input>
      <p className='pEx'>Ex: Compra de roupas</p>
      <div className='valores'>
        <div className='pValor'>
          <p className='p6'>Valor</p>
          <input className='input2' value={valor} type='number' onChange={(e) => {setValor(e.target.value)}} placeholder="1                      R$"></input>
        </div>
        <div className='pValor'>
          <p className='p6'>Tipo de valor</p>
          <select className='select' onChange={(e) => {setTipo(e.target.value)}}>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </div>
      <div className='teste'>
      <button className='atualizarLista' onClick={atualizarLista}>Inserir valor</button>
      </div>
    </form>
  );
}

export default Form