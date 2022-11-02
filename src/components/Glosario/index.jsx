import React from 'react';
import NavBarReal from '../NavBar/Real';
import { GLOSARIO, LETRAS } from '../../utils/glossary';
import './styles.css';

const Glosario = () => {
    return (
        <div>
            <NavBarReal/>

            <h1 className='title-glosario'>GLOSARIO</h1>
            
            <div className='letras'>
                {LETRAS.map(letra => <a href={`#${letra}`} key={letra}>{letra}</a>)}
            </div>

            <div className='glosario-container'>
                {GLOSARIO.map(({id, letters}) => 
                    <div key={id}>
                        <h2 className='letter' id={id}>{id}</h2>
                        {letters.map((frase, i) => <p className='quote' key={i}>{frase}</p>)}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Glosario;