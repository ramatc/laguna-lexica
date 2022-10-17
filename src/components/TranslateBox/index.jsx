import React, { useState } from 'react';
import { useTranslateContext } from '../../context/Context';
import NavBarFinal from '../NavBar/Final';
import ModalReal from '../ModalReal';
import { wordsES1, wordsYA, wordsES2 } from '../../utils/words';
import './styles.css';

const TranslateBox = () => {

    const {phrase} = useTranslateContext();

    const [toYagan, setToYagan] = useState('');
    const [toEs, setToEs] = useState('');
    const [descart, setDescart] = useState('');
    const [inputValue, setInputValue] = useState(phrase);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleTranslate = () => {
        const arrayString = inputValue.split(" ");
        const arrayTranslated = [];
        const arrayTranslatedToEs = [];
        const wordsNoMatch = [];

        for (let i = 0; i < arrayString.length; i++) {
            let cont = 0;

            for (let j = 0; j < wordsES1.length; j++) {
                if (arrayString[i].toLowerCase() === wordsES1[j]) {
                    arrayTranslated.push(wordsYA[j]);
                    cont++;
                }
            }

            if (cont === 0) {
                wordsNoMatch.push(arrayString[i]);
            }
        }

        // for (let i = 0; i < arrayTranslated.length; i++) {
        //     for (let j = 0; j < wordsYA.length; j++) {
        //         if (arrayTranslated[i].toLowerCase() === wordsYA[j]) {
        //             arrayTranslatedToEs.push(wordsES2[j]);
        //         }
        //     }
        // }

        setToYagan(arrayTranslated.join(" "));
        setDescart(wordsNoMatch.join(" "));
        setToEs(arrayTranslatedToEs.join(" "));
    }

    return (
        <>
            <NavBarFinal/>
            <div className='main-container-real'>
                <div className='sub-container-real'>
                    <h2 className='main-title'>DEL YAGÁN AKUPAIA-NGAI:</h2>
                    <h2 className='sub-title'>MARCAR UN ÁRBOL CON UN HACHA PARA ENCONTRARLO MÁS FÁCIL</h2>
                    <p className='question'>¿Qué mecanismos usás para no perder en medio de tu caos, aquellas cosas que más atesorás?</p>
                    <div className="translate-container">
                        <input
                            className='fake-input'
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Escribí un texto para traducirlo al Yagán"
                        />
                        <ModalReal 
                            translate={inputValue}
                            onClick={() => handleTranslate()}
                        />
                    </div>
                </div>

                <div className='main-translate-container'>
                    <div className='translate--container'>
                        <p className='title-translate'>Oración en español</p>
                        <p className='translate'>{inputValue}</p>
                    </div>

                    <div className='translate--container'>
                        <p className='title-translate'>Oración en yagán</p>
                        <p className='translate'>{toYagan}</p>
                    </div>

                    <div className='translate--container'>
                        <p className='title-translate'>Oración en español</p>
                        <p className='translate'>{toEs}</p>
                    </div>

                    <div className='translate--container discard'>
                        <p className='title-translate'>Descarte</p>
                        {
                            descart === ''
                            ? ''
                            :                                   
                            <div style={{ color: 'red' }}>
                                <p className='translate' style={{ fontWeight: 'bold' }}>{descart}</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TranslateBox;