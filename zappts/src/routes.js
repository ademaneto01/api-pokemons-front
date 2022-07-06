import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/index';
import Pokemons from './pages/pageCardsPokemons';


function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/pokemons' element={<Pokemons />} />
        </Routes>
    );
}

export default MainRoutes;