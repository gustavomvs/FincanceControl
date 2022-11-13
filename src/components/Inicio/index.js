import imagem from "../../imagem/Group 277.svg";
import imagem2 from "../../imagem/Nu Kenzie2.svg";
import './style.css'

function Inicio({ somar }) {
  return (
    <div className="margem">
      <div className="menuComBotao" >
        <img className="inicioImg" alt="img" src={imagem2} />
        <h1 className="titulo">Centralize o controle das suas finanças</h1>
        <p className="menup">de forma rápida e segura</p>
        <button className="menub" onClick={somar}>Iniciar</button>
      </div>
        <img className="logoGigante" alt="img" src={imagem} />
    </div>
  );
}

export default Inicio;
