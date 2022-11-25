import React from 'react';
import { useTranslateContext } from '../../context/Context';
import TranslateButton from './TranslateButton';
import NavBarReal from '../NavBar/Real';
import './styles.css';

const Inicio = () => {
    const {translateHome1, translateHome2, translateHome3, translateHome4, translateHome5, translateHome6, translateHome7, translateHome8, translateHome9,
        addTranslateHome1, addTranslateHome2, addTranslateHome3, addTranslateHome4, addTranslateHome5, addTranslateHome6, addTranslateHome7, addTranslateHome8, addTranslateHome9,
        bgClass, ffClass} = useTranslateContext();


    bgClass ? document.body.classList.add('bgi') : document.body.classList.remove('bgi');
    ffClass ? document.body.classList.add('ff') : document.body.classList.remove('ff');
    
    return (
        <>
            <NavBarReal/>
            <div className='home-container'>
                <div className='home-sub-container'>
                    <h2 className='title-inicio mg-auto'>Laguna Léxica invita a un recorrido no lineal a través de la lengua muerta yagán. En un intento por evitar su extinción, esperamos que esta obra le rinda homenaje en sus últimos años de vida.</h2>
                    <p className='texto p-50'>
                    El padre de Mercedes había muerto hace ya un tiempo. Ella vivía cerca de la orilla de un canal tranquilo con su madre y su familia, por lo que no era
                    <TranslateButton 
                        initial={translateHome1}
                        link='/'
                        addTranslateHome={addTranslateHome1}
                        wordYA='aniûali. '
                        wordES='una persona cuyos parientes masculinos hayan muerto casi todos. '
                    /> 
                    Si bien esa muerte ya no le pesaba tanto como antes, no podía dejar de pensar en lo que le había dicho su padre hace unos años, cuando solían 
                    <TranslateButton 
                        initial={translateHome2}
                        link='/audios'
                        addTranslateHome={addTranslateHome2}
                        wordYA='tstur-amala.'
                        wordES='salir a pescar al atardecer de forma tal que el día acabe mientras uno está ocupado.'
                    /> 
                    En un momento de silencio, le contó: "Encontré
                    <TranslateButton 
                        initial={translateHome3}
                        link='/'
                        addTranslateHome={addTranslateHome3}
                        wordYA='Imi'
                        wordES='pintura para ceremonias usada por los mayores'
                    /> 
                    en una isla, mucho imi. Traje un poco para este
                    <TranslateButton 
                        initial={translateHome4}
                        link='/'
                        addTranslateHome={addTranslateHome4}
                        wordYA='ina,'
                        wordES='invierno,'
                    /> 
                    pero era demasiado para llevarme todo. El problema fue que no sabía dónde me encontraba, como para regresar allí en otro momento. Pensé en
                    <TranslateButton 
                        initial={translateHome5}
                        link='/random'
                        addTranslateHome={addTranslateHome5}
                        wordYA='akupaia-ngaia,'
                        wordES='marcar un árbol con un hacha para encontrarlo más fácil,'
                    />  
                    pero desde la canoa no sería suficiente. Así que abrí la tierra y dejé unas semillas de 
                    <TranslateButton 
                        initial={translateHome7}
                        link='/'
                        addTranslateHome={addTranslateHome7}
                        wordYA='Belakamain'
                        wordES='frutilla de magallanes'
                    />
                    para que con el tiempo crezca. Cuando seas más grande vamos a ir a buscarla". Pasaron los meses y los dos empezaron a
                    <TranslateButton 
                        initial={translateHome8}
                        link='/'
                        addTranslateHome={addTranslateHome8}
                        wordYA='wölám-ölamina,'
                        wordES='olvidarse de todo,'
                    />
                    hasta que la muerte del padre le hizo recordar eso a Mercedes. Tenía una aventura pendiente y la tentación de salir a buscar era cada vez más fuerte. 
                    Una tarde decidió que la espera había terminado, tomó una canoa y se adentró en el canal. 
                    Estuvo viajando dos días sin rastro de la planta de Belakamain hasta que finalmente, mientras remaba con fuerza, vio un arbusto seco cerca de la costa. 
                    Tuvo que buscar
                    <TranslateButton 
                        initial={translateHome6}
                        link='/videos'
                        addTranslateHome={addTranslateHome6}
                        wordYA='iûša-tãsin.'
                        wordES='un lugar agradable para el desembarco en una costa abrupta, siendo menos audaz que en otros lugares.'
                    />
                    Al llegar a lo que parecía
                    <TranslateButton 
                        initial={translateHome9}
                        link='/'
                        addTranslateHome={addTranslateHome9}
                        wordYA='yaman-’apisiú úsin,'
                        wordES='una tierra sin habitantes,'
                    /> 
                    pudo ver la pequeña planta seca y en la costa mucho imi de color rojo intenso. Tomó la tintura, se pintó la cara de arriba abajo, y luego miró el arbusto por un largo rato. 
                    Agarró imi y volvió en silencio a su canoa al encuentro con su familia.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Inicio;