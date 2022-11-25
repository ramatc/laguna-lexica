import React from 'react';
import NavBar from '../NavBar/Real';
import './styles.css';

import propuesta from '../../assets/images/propuesta-color.png';

const Propuesta = () => {
  return (
    <>
        <NavBar/>
        <div className='propuesta-wrapper'>
            <div className='propuesta--wrapper'>
                <h1 className='title-change'>PROPUESTA</h1>
                <p className='text-propuesta'>
                Laguna Léxica es un proyecto que busca dar reconocimiento a la cultura de los Yaganes, pueblo que vivió en el archipiélago fueguino entre Argentina y Chile. 
                Con la recopilación de documentos generados a lo largo de la historia sobre este grupo, buscamos generar un recorrido virtual de estas personas, sus tradiciones, 
                y su forma de ver el mundo. Utilizando el único diccionario que existe, realizado por Thomas Bridges en 1865, tenemos la intención de recuperar al menos un destello 
                de la riqueza de la lengua yagán, considerada como lengua muerta a partir del 16 de febrero del 2022. Los invitamos a que se sumerjan en un camino de traducción donde 
                se evidencian la necesidad de la multiculturalidad de elementos, la alteración de las palabras, o incluso aquellas que se pierden.
                </p>
            </div>
            <div className='propuesta-img'>
                <img src={propuesta} alt='Propuesta'/>
            </div>
        </div>
    </>
  )
}

export default Propuesta;