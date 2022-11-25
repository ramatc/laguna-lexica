import React from 'react';
import NavBarReal from '../NavBar/Real';
import { GLOSARIO, LETRAS } from '../../utils/glossary';
import './styles.css';

const Glosario = () => {
    return (
        <div>
            <NavBarReal/>

            <h1 className='title-glosario title-change'>GLOSARIO</h1>
            
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
                <p className='last-update'>Última actualización: 25 de Noviembre de 2022</p>
            </div>
        </div>
    )
}

export default Glosario;