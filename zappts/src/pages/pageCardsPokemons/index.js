import './style.css'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import PokemonPages from '../../components/CardPokemoms'
import api from '../../services/api';
import searchPokemonFilter from '../../components/searchPok/index';
import { CheckBoxTypes } from '../../components/checkBox';

function Pokemons() {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [pokemomsUrl, setPokemomsUrl] = useState([]);
    const [permaPokemon, setPermaPokemon] = useState([]);
    const [pokemomsAux, setPokemomsAux] = useState([]);
    const [pokemonBackUp, setPokemonBackUp] = useState([]);

    const handlePagination = (value) => {

        if (value === 'prev') {
            if (!page) return
            setPage(page - 18)
        }
        if (value === 'next') {
            setPage(page + 18)
        }
        setPokemomsUrl([])
        getPokemoms()

    }
    const handleType = (types) => {
        const pokemons = pokemonBackUp.filter((pokemon) => {
            return pokemon.types.some((typePokemon) => {
                if (!types.length) return true
                return types.find(type => type.name === typePokemon.type.name)
            })
        })
        setPokemomsUrl(pokemons)
    }
    const dataPokemon = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data;
    }
    const Founding = async () => {
        const localPokemons = await Promise.all(pokemomsAux.map(({ url }) => dataPokemon(url)))
        setPokemomsUrl(localPokemons);
        setPokemonBackUp(localPokemons);
        setPermaPokemon(localPokemons);

    }
    const getPokemoms = async () => {
        const response = await api.get('', { params: { offset: page } });
        setPokemomsAux(response.data.results);
    }
    useEffect(() => {
        getPokemoms();
    }, []);
    useEffect(() => {
        if (pokemomsAux.length) {
            Founding();
        } else {
            console.log(pokemomsAux);
        }
    }, [pokemomsAux]);

    return (
        <div className='allContainer'>
            <header className='headerHome'>
                <img src='./assets/logo.svg' />
                <div id='btnHeader'>
                    <span id='home' onClick={() => navigate('/')}>
                        Home
                    </span>
                    <span id='spanPoke' >
                        Pokemons
                    </span>
                    <span id='spanContact'>
                        Contato
                    </span>
                </div>
            </header >
            <div className='foundPokes'>
                <div className='foundPokesInternal'>
                    <h1>Mais de 250 Pokemons para você escolher o seu favorito</h1>
                    <div className='inputPokes'>
                        <input placeholder='Pesquisar pokemon'
                            type="text"
                            onChange={(e) => searchPokemonFilter(e, setPokemomsUrl, permaPokemon)}
                        />
                        <img src='./assets/vector.svg'
                        />
                    </div>
                </div>
            </div>

            <CheckBoxTypes setPokemomsUrl={setPokemomsUrl}
                pokemomsUrl={pokemomsUrl}
                permaPokemon={permaPokemon}
                onChange={handleType}
            />

            <div className='pokeContainerExternal'>
                <button className='arrow' onClick={() => handlePagination('prev')}><strong>{"<"}</strong></button>
                <div className='pokeContainerInternal'>
                    <div className='cardPoke'>
                        {
                            pokemomsUrl.length ?
                                pokemomsUrl.map(item =>
                                    <PokemonPages
                                        item={item}
                                        key={item.id}
                                    />
                                ) : <img className='imgLoading' src='./loading.svg' />}
                    </div>
                </div>
                <button className='arrow' onClick={() => handlePagination('next')}><strong>{">"}</strong></button>
            </div>
            <footer>
                <img src='./assets/logo.svg' onClick={() => navigate('/')} />
            </footer>
        </div >
    );
}

export default Pokemons;