import React, { useState } from 'react';
import { wordsES, wordsYA } from '../../utils/words';

const TranslateBox = () => {
    const [toYagan, setToYagan] = useState('');
    const [descart, setDescart] = useState('');
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleTranslate = () => {
        const arrayString = inputValue.split(" ");
        const arrayTranslated = [];
        const wordsNoMatch = [];

        for (let i = 0; i < arrayString.length; i++) {
            let cont = 0;

            for (let j = 0; j < wordsES.length; j++) {
                if (arrayString[i] === wordsES[j]) {
                    arrayTranslated.push(wordsYA[j]);
                    cont++;
                }
            }

            if (cont === 0) {
                wordsNoMatch.push(arrayString[i]);
            }
        }

        setToYagan(arrayTranslated.join(" "));
        setDescart(wordsNoMatch.join(" "));
    }

    return (
        <>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Traudicr a Yagan'
            />
            <p>{toYagan}</p>
            <button
                onClick={() => handleTranslate()}>
                Traducir a Yagan
            </button>
            {
                descart === ''
                    ? ''
                    :
                    <div style={{ color: 'red' }}>
                        <br />
                        Palabras descartadas:
                        <p style={{ fontWeight: 'bold' }}>{descart}</p>
                    </div>
            }
        </>
    )
}

export default TranslateBox;