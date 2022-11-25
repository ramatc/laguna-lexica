import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslateContext } from '../../../context/Context';

const TranslateButton = ({initial, link, addTranslateHome, wordYA, wordES, mark}) => {

    const {bwClass} = useTranslateContext();

    let marcador = 'marcador' + mark;

    return (
        <>
            {initial ===  0 ?                         
                <Link to={link} className='yagan-word'>
                    <button 
                        onClick={() => addTranslateHome()}> {wordYA}
                    </button>
                </Link> 
                :
                <>
                    {initial === 1 ? <span className={`machine ${bwClass ? marcador : ''}`}> {wordES} </span> : <span className={`${bwClass ? marcador : ''}`}> {wordES} </span>}
                </>
            }
        </>
    )
}

export default TranslateButton;