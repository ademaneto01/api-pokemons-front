import './style.css';
import { useState } from 'react';
import { arrayTypesPokemons } from '../../utils/arrayTypesPokemons';

export const CheckBoxTypes = ({ onChange }) => {
    const [showType, setShowType] = useState(false);
    const [types, setTypes] = useState([...arrayTypesPokemons]);

    const handleShowType = () => {
        const checkStatus = !showType;
        setShowType(checkStatus)
    }
    const handleTipo = async (index) => {
        types[index].check = !types[index].check
        setTypes([...types])
        onChange(types.filter(({ check }) => check))
    }
    return (
        <>
            <div className='textFilter' onClick={handleShowType}>
                <strong>Tipo</strong>
                <img src='./down.svg' />
            </div>
            {
                showType &&
                <div className='boxType'>
                    {types.length &&
                        types.map((poks, index) => {
                            return (
                                <div className='inputCheck' key={index}>
                                    <input id='inputBox' type='checkBox' checked={!!poks?.check} onClick={() => {
                                        handleTipo(index)
                                    }} />
                                    <label id='labelName'>{poks.name}</label>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </>
    )
}

