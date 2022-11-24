import React, { useState } from 'react';
import { useTranslateContext } from '../../context/Context';
import NavBar from '../NavBar/Real';
import ModalReal from '../ModalReal';
import { wordsES1, wordsYA, wordsES2 } from '../../utils/words';
import './styles.css';

const TranslateBox = () => {

    const {phrase, addHistorial} = useTranslateContext();

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
            let cont = 0, 
            lastChar = arrayString[i].length - 1, 
            stringUnsignedF = '',
            stringUnsignedL = '';

            if(arrayString[i][0] === '¡' || arrayString[i][0] === '¿'){
                stringUnsignedF = arrayString[i].slice(1);
            }

            if(arrayString[i][lastChar] === '!' || arrayString[i][lastChar] === '?' ||  arrayString[i][lastChar] === ',' ||  arrayString[i][lastChar] === '.'){
                stringUnsignedL = arrayString[i].slice(0, -1);
            }


            for (let j = 0; j < wordsES1.length; j++) {
                if (arrayString[i].toLowerCase() === wordsES1[j] || stringUnsignedF.toLowerCase() === wordsES1[j] || stringUnsignedL.toLowerCase() === wordsES1[j]) {
                    arrayTranslated.push(wordsYA[j]);
                    cont++;
                }
            }

            if (cont === 0) {
                wordsNoMatch.push(arrayString[i]);
                // arrayString.splice(i, 1);
            }
        }

        for (let i = 0; i < arrayTranslated.length; i++) {
            for (let j = 0; j < wordsYA.length; j++) {
                if (arrayTranslated[i] === wordsYA[j]) {
                    arrayTranslatedToEs.push(wordsES2[j]);
                    j = wordsYA.length;
                }
            }
        }

        // setInputValue(arrayString.join(" "))
        setToYagan(arrayTranslated.join(" "));
        setDescart(wordsNoMatch.join(" "));
        setToEs(arrayTranslatedToEs.join(" "));

        addHistorial({
            frase: inputValue,
            translate01: toYagan,
            translate02: toEs,
            descarte: descart
        })
    }

    return (
        <>
            <NavBar/>
            <div className='main-container-real'>
                <div className='sub-container-real'>
                    <p className='question ch-65'>El glosario se basa principalemnte en el diccionario realizado por Thomas Bridges, 1865. Hasta el momento no se han traducido la totalidad de los términos, por lo que es probable que haya palabras que todavía no tengan una traducción disponible. </p>
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
                    
                    <div className='translate--container discard'>
                        <p className='title-translate'>Intraducible</p>
                        {
                            descart === ''
                            ? ''
                            :                                   
                            <div style={{ color: 'red' }}>
                                <p className='translate' style={{ fontWeight: 'bold' }}>{descart}</p>
                            </div>
                        }
                    </div>

                    <div className='translate--container'>
                        <p className='title-translate'>Oración en yagán</p>
                        <p className='translate'>{toYagan}</p>
                    </div>

                    <div className='translate--container'>
                        <p className='title-translate'>Oración en español</p>
                        <p className='translate'>{toEs}</p>
                    </div>
                </div>
            </div>
            <p className='last-update'>Última actualización: 24 de Noviembre de 2022</p>
        </>
    )
}

export default TranslateBox;