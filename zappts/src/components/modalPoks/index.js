import './style.css'

export default function ModalPokemon({ item, open, onClose, infoPokemon }) {
    const types = item.types;
    const stats = item.stats;
    const ability = item.abilities[0].ability.name;

    if (!open) {
        return <></>
    }

    return (
        <div className='containerModalExternal' >
            <img className='btnCloseModal' src='./closeIcon.svg' onClick={onClose} />
            <div className='modalInternal' >
                <div className='imgBoxModal' style={{ backgroundColor: `var(--${infoPokemon.color})` }}>
                    <section className='containerImgType' >
                        <picture >
                            <img className='imgPokemonModal' src={item.sprites.other.home.front_default} alt='Pokemon' />
                        </picture>
                        <div className='nameInfoId'>
                            <p className='typeName' >{types[0].type.name[0].toUpperCase() + types[0].type.name.substr(1)}</p>
                            <p className={types.length === 2 ? 'typeName' : undefined}>{types.length === 2 ? types[1].type.name[0].toUpperCase() + types[1].type.name.substr(1) : ''}</p>

                        </div>
                    </section>
                </div>
                <section className='containerDescriptionExternal'>
                    <section className='descriptionCard'>
                        <h2 className='pokemonNameDescription'>{item.name[0].toUpperCase() + item.name.substr(1)}</h2>
                        < span className='pokeIdModalDescription' style={{ color: `var(--${infoPokemon.color})` }} > {item.id.toString().padStart(4, '#00')}</span>
                    </section>
                    <section className='infoData'>
                        <div className='boxWeight'>
                            <div className='infoWeight'>
                                <img className='imgWeight' src='./peso.svg' alt='peso' />
                                <span className='dataWeight'>{`${item.weight / 10} kg`}</span>
                            </div>
                            <span className='descriptionWeight'>Peso</span>
                        </div>
                        <div className='box Height'>
                            <div className='infoHeight'>
                                <img className='imgHeight' src='./altura.svg' alt='altura' />
                                <span className='dataHeight'>{`${item.height / 10} m`}</span>
                            </div>
                            <span className='descriptionHeight'>Altura</span>
                        </div>
                        <div className='powerBox'>
                            <h3 className='dataPower'>{ability[0].toUpperCase() + ability.substr(1)}</h3>
                            <span className='descriptionPower'>Poder Principal</span>
                        </div>
                    </section>
                    <section className='containerFeature'>
                        {stats.map(stat =>
                        (<div className='stats'
                            key={stat.stat.name}>
                            <p className='statsitle'>{stat.stat.name[0].toUpperCase() + stat.stat.name.substr(1)}
                            </p>
                            <div className='statsValueContainer'>
                                <p className='statsValue'>{stat.base_stat}</p>
                                <progress value={stat.base_stat} max="100" className={stat.base_stat >= 50 ? 'progress progress-green' : 'progress progress-red'}></progress>
                            </div>
                        </div>))}
                    </section>
                </section>
            </div>
        </div >

    )
} 