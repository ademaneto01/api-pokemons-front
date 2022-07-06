import './style.css';
import { useState, useEffect } from "react";
import ModalPokemon from '../modalPoks/index';

function PokemonPages({ item }) {
    const [infoPokemon, setInfoPokemon] = useState({});
    const [open, setOpen] = useState(false);
    const types = item.types;

    useEffect(() => {
        const getColores = async () => {
            const response = await fetch(`${item.species.url}`);
            const data = await response.json()
            setInfoPokemon({
                name: data.name,
                color: data.color.name
            })
        }
        getColores()
    }, []);
    const toggleModal = () => {
        const modalStatus = !open;
        setOpen(modalStatus)
    }
    return (
        <>
            <ModalPokemon
                key={item.id}
                item={item}
                onClose={toggleModal}
                open={open}
                infoPokemon={infoPokemon} />

            < div key={item.id} className={`containerExternalPoke`} onClick={() => toggleModal()} style={{ backgroundColor: `var(--${infoPokemon.color})` }}>
                <div className='pokemonId'>
                    <span className='pokemonIdInternal'>{item.id.toString().padStart(4, '#00')}</span>
                </div>
                <div id='containerDescriptionExternal'>
                    <div
                        className='containerDescriptionInternal'>
                        <h1 className='pokemonNameInternal'>{item.name[0].toUpperCase() + item.name.substr(1)}</h1>
                        <p className={'pokemonTypeInternal'}>{types[0].type.name}</p>
                        <p className={types.length === 2 && 'pokemonTypeInternal'}>{types.length === 2 && types[1].type.name}</p>
                    </div>
                    <img
                        className='imgSkills'
                        src={item.sprites.other.home.front_default}
                        alt={item.name} />
                </div>
            </div >
        </>
    );
}

export default PokemonPages;