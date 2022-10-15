import React from 'react';
import './styles.css';

import propuesta from '../../assets/images/propuesta-color.png';

const Propuesta = () => {
  return (
    <div className='propuesta-wrapper'>
        <div className='propuesta--wrapper'>
            <h1>PROPUESTA</h1>
            <p className='text-propuesta'>
                Las palabras que usamos en nuestro idioma no tienen los mismos términos. El Yagan es un idioma utilizado 
                por el pueblo originario del mismo nombre que vivieron en el archipiélago fueguino entre Argentina y Chile.
                En este proyecto el español y el yagan se entrecruzan en un loop. Lo que queda por fuera del lenguaje se pierde.
            </p>
        </div>
        <div className='propuesta-img'>
            <img src={propuesta} alt='Propuesta'/>
        </div>
    </div>
  )
}

export default Propuesta;