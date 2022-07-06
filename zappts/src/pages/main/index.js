import './style.css';
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div className='allContainerMain'>
      <header className='headerHomeMain'>
        <img src='./assets/logo.svg' />
        <div id='btnHeaderMain'>
          <span id='spanHomeMain'>
            Home
          </span>
          <span onClick={() => navigate('/pokemons')}>
            Pokemons
          </span>
          <span>
            Contato
          </span>
        </div>
      </header >
      <div className='containerExternalMain'>
        <div className='infoTextMain'>
          <h1>Qual pokemon você<br /> escolheria?</h1>
          <span>Você pode saber o tipo de Pokémon, seus pontos <br />fortes, fracos e habilidades.</span>
          <button onClick={() => navigate('/pokemons')}>Veja os pokemons</button>
        </div>
        <img src='./assets/bannerPicachu.svg' />
      </div>
    </div >
  );
}

export default Main;
