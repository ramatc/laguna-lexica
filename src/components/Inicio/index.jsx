import React from 'react';
import { useTranslateContext } from '../../context/Context';
import TranslateButton from './TranslateButton';
import NavBarReal from '../NavBar/Real';
import './styles.css';

const Inicio = () => {

    const {translateHome1, translateHome2, translateHome3, translateHome4, translateHome5, translateHome6, 
        addTranslateHome1, addTranslateHome2, addTranslateHome3, addTranslateHome4, addTranslateHome5, addTranslateHome6} = useTranslateContext();
    
    return (
        <>
            <NavBarReal/>
            <div className='main-container'>
                <div className='sub-container'>
                    <h2 className='title-inicio'>PRIMER TEXTO</h2>
                    <h3 className='subtitle-inicio'>EL YAGÁN ES UNA LENGUA MUERTA.</h3>

                    <p className='texto p-50'>La
                    <TranslateButton 
                        initial={translateHome1}
                        link='/audios'
                        addTranslateHome={addTranslateHome1}
                        wordYA='hánis la(n oufkirh'
                        wordES='lengua'
                    />
                    yagán no conocía la palabra escrita. Toda información y todo conocimiento fue transmitido oralmente
                    sobre miles de años. De generación a generación.</p>                   
                    <p className='texto'>En días de
                    <TranslateButton 
                        initial={translateHome2}
                        link='/'
                        addTranslateHome={addTranslateHome2}
                        wordYA='shakh'
                        wordES='mal'
                    />
                    tiempo, en las largas noches de invierno y 
                    <TranslateButton 
                        initial={translateHome3}
                        link='/'
                        addTranslateHome={addTranslateHome3}
                        wordYA='lá'
                        wordES='en'
                    /> 
                    claras tardes de
                    <TranslateButton 
                        initial={translateHome4}
                        link='/random'
                        addTranslateHome={addTranslateHome4}
                        wordYA='kísi'
                        wordES='verano'
                    />  
                    las familias se juntaban 
                    alrededor del
                    <TranslateButton 
                        initial={translateHome5}
                        link='/videos'
                        addTranslateHome={addTranslateHome5}
                        wordYA='pusáki pus(ák,'
                        wordES='fuego,'
                    /> 
                    donde los ancianos relataban de la sabiduría de
                    <TranslateButton 
                        initial={translateHome6}
                        link='/'
                        addTranslateHome={addTranslateHome6}
                        wordYA='kús('
                        wordES='esta'
                    />  
                    cultura, contando historias del origen y cuentos
                    que nos enseñan de valores.</p>
                </div>
            </div>
        </>
    )
}

export default Inicio;