import "./style.css";
import lixo from "../../imagem/trash.svg";
import { useState } from "react";

function List({ listTransactions, setListTransactions }) {
  const [type, setType] = useState("Todos");

  const [entrace, setEntrace] = useState([]);
  const [exit, setExit] = useState([]);

  function excluir(index) {
    const copiaList = [...listTransactions];
    listTransactions.map((e, idx) => {
      if (idx === index) {
        copiaList.splice(index, 1);
        setListTransactions(copiaList);
      }
    });
  }

  function todos() {
    setType("Todos");
    setListTransactions([...listTransactions]);
  }

  function entradas() {
    setType("Entradas");
    const copiaList = [...listTransactions];
    const copiaListEntrada = copiaList.filter(
      (produto) => produto.type === "entrada"
    );
    setEntrace(copiaListEntrada);
  }

  function saidas() {
    setType("Saidas");
    const copiaList = [...listTransactions];
    const copiaListSaidas = copiaList.filter(
      (produto) => produto.type === "saida"
    );
    setExit(copiaListSaidas);
  }

  return (
    <div className="tudo">
      <div className="filtro">
        <p className="p5">Resumo Financeiro</p>
        <div className="flex">
          <button onClick={todos} className="fb">
            Todos
          </button>
          <button onClick={entradas} className="fb">
            Entradas
          </button>
          <button onClick={saidas} className="fb">
            Saídas
          </button>
        </div>
      </div>
      {type === "Todos" ? (
        <ul className="lista">
          {listTransactions.length === 0 ? (
            <div>
              <div className="naopossui">
                Você ainda não possui nenhum lançamento
              </div>
              <div className="cardVazio">
                {" "}
                <p className="fundo1"></p> <p className="fundo2"></p>{" "}
              </div>
              <div className="cardVazio">
                {" "}
                <p className="fundo1"></p> <p className="fundo2"></p>{" "}
              </div>
              <div className="cardVazio">
                {" "}
                <p className="fundo1"></p> <p className="fundo2"></p>{" "}
              </div>
            </div>
          ) : (
            <div>
              {listTransactions.map((e, i) => (
                <li id={e.id} className="li" key={i}>
                  {e.type === "entrada" ? (
                    <div className="verde">
                      <div>
                        <p className="p3">{e.description}</p> <br></br>
                        <p className="p4">{e.type}</p>
                      </div>
                      <div className="lixinho">
                        <p className="pvalorA">
                          R$ {Number(e.value).toFixed(2)}
                        </p>
                        <button className="lixao" onClick={() => excluir(i)}>
                          <img src={lixo} alt="img" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="grey">
                      <div>
                        <p className="p3">
                          {e.description} <br></br>
                        </p>
                        <p className="p4">{e.type}</p>
                      </div>
                      <div className="lixinho">
                        <p className="pvalorA">
                          R$ -{Number(e.value).toFixed(2)}
                        </p>
                        <button className="lixao" onClick={() => excluir(i)}>
                          <img src={lixo} alt="img" />
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </div>
          )}
        </ul>
      ) : type === "Entradas" ? (
        <div>
          {entrace.map((e, i) => (
            <li id={e.id} className="li" key={i}>
              {e.type === "entrada" ? (
                <div className="verde">
                  <div>
                    <p className="p3">{e.description}</p> <br></br>
                    <p className="p4">{e.type}</p>
                  </div>
                  <div className="lixinho">
                    <p className="pvalorA">R$ {Number(e.value).toFixed(2)}</p>
                    <button className="lixao" onClick={() => excluir(i)}>
                      <img src={lixo} alt="img" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grey">
                  <div>
                    <p className="p3">
                      {e.description} <br></br>
                    </p>
                    <p className="p4">{e.type}</p>
                  </div>
                  <div className="lixinho">
                    <p className="pvalorA">R$ -{Number(e.value).toFixed(2)}</p>
                    <button className="lixao" onClick={() => excluir(i)}>
                      <img src={lixo} alt="img" />
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </div>
      ) : (
        <div>
          {exit.map((e, i) => (
            <li id={e.id} className="li" key={i}>
              {e.type === "entrada" ? (
                <div className="verde">
                  <div>
                    <p className="p3">{e.description}</p> <br></br>
                    <p className="p4">{e.type}</p>
                  </div>
                  <div className="lixinho">
                    <p className="pvalorA">R$ {Number(e.value).toFixed(2)}</p>
                    <button className="lixao" onClick={() => excluir(i)}>
                      <img src={lixo} alt="img" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grey">
                  <div>
                    <p className="p3">
                      {e.description} <br></br>
                    </p>
                    <p className="p4">{e.type}</p>
                  </div>
                  <div className="lixinho">
                    <p className="pvalorA">R$ -{Number(e.value).toFixed(2)}</p>
                    <button className="lixao" onClick={() => excluir(i)}>
                      <img src={lixo} alt="img" />
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default List;
