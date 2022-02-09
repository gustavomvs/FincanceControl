import './style.css'

function List({listTransactions}){

    return (
      <div className="tudo">
        <div className="filtro">
          <p>Resumo Financeiro</p>
          <button>Todos</button>
        </div>
        <ul className="lista">
          {listTransactions.map((e, i) => (
            <li className="li" key={i}>
              {e.type === "entrada" ? (
                <div className="verde">
                  <div>
                    <p className='p3'>{e.description}</p> <br></br>
                    <p className='p4'>{e.type}</p>
                  </div>
                  <p className='pvalorA'>
                 R$ {e.value}
                  </p>
                </div>
              ) : (
                <div className="grey">
                  <div>
                    <p className='p3'>{e.description} <br></br></p>
                    <p className='p4'>{e.type}</p>
                  </div>
                  <p className='pvalorA'>
                  R$ {e.value}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default List