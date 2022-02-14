import imagem from '../../imagem/Nu Kenzie.svg'
import './style.css'

function Header({setInicio}){

    function diminuir(){
        setInicio(0)
    }

    return (
        <div className='cab'>
            <img className='cabimg' src={imagem}></img>
            <button onClick={diminuir} className='cabBu'>Inicio</button>
        </div>
    )
}

export default Header