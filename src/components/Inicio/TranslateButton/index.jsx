import React from 'react';
import { Link } from 'react-router-dom';

const TranslateButton = ({initial, link, addTranslateHome, wordYA, wordES}) => {
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
                {initial === 1 ? <span className='machine'> {wordES} </span> : <span> {wordES} </span>}
            </>
        }
    </>
  )
}

export default TranslateButton;