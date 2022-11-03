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
                    <h2 className='title-inicio mg-auto'>Laguna Léxica invita a un recorrido no lineal a través de la lengua muerta yagán. En un intento por evitar su extinción, esperamos que esta obra le rinda homenaje en sus últimos años de vida.</h2>
                    <p className='texto p-50'>
                    Habían pasado los meses, el padre de Mercedes había muerto hace ya un tiempo. Ella vivía con su madre y su familia cerca de la orilla de un canal tranquilo, por lo que no era 
                    <TranslateButton 
                        initial={translateHome1}
                        link='/'
                        addTranslateHome={addTranslateHome1}
                        wordYA='aniûali.'
                        wordES='una persona cuyos parientes masculinos hallan muerto casi todos.'
                    /> 
                    Si bien esa muerte ya no le pesaba tanto como antes, no podía dejar de pensar lo que le había dicho una tarde. Fue hace unos años, cuando solían 
                    <TranslateButton 
                        initial={translateHome2}
                        link='/audios'
                        addTranslateHome={addTranslateHome2}
                        wordYA='tstur-amala.'
                        wordES='salir a pescar al atardecer de forma tal que el día acabe mientras uno está ocupado.'
                    /> 
                    En un momento de silencio le dijo: "Encontré 
                    <TranslateButton 
                        initial={translateHome3}
                        link='/'
                        addTranslateHome={addTranslateHome3}
                        wordYA='Imi'
                        wordES='pintura para ceremonias usada por los mayores'
                    /> 
                    en una isla, mucho imi. Me llevé un poco para este 
                    <TranslateButton 
                        initial={translateHome4}
                        link='/'
                        addTranslateHome={addTranslateHome4}
                        wordYA='ina,'
                        wordES='invierno,'
                    /> 
                    pero era demasiado para dejarlo abandonado. El problema era que no sabía dónde estaba, no sabía cómo volver. 
                    Pensé en
                    <TranslateButton 
                        initial={translateHome5}
                        link='/random'
                        addTranslateHome={addTranslateHome5}
                        wordYA='akupaia-ngaia'
                        wordES='marcar un árbol con un hacha para encontrarlo más fácil'
                    />  
                    pero desde la canoa no sería suficiente. Así que abrí la tierra y dejé unas semillas de <span className='yagan-word1'>Belakamain</span> para que con el tiempo crezca. Cuando seas más grande vamos a ir a buscarlo". 
                    Pasaron las semanas y los dos empezaron a <span className='yagan-word1'>wölám-ölamina</span>, hasta que su muerte la hizo recordar. Era su aventura y la tentación de salir a <span className='yagan-word1'>iyig-ata</span> era cada vez más fuerte. Una tarde decidió que la espera había terminado. Su familia no la dejaría ir sola y ella no quería compañía. 
                    Cuando vio que nadie la veía, tomó una canoa y se adentró en el canal. Estuvo viajando dos días sin rastro de la planta de Belakamain hasta que finalmente, mientras remaba con fuerza, vio un arbusto seco cerca de una costa. Tuvo que buscar
                    <TranslateButton 
                        initial={translateHome6}
                        link='/videos'
                        addTranslateHome={addTranslateHome6}
                        wordYA='iûša-tãsin.'
                        wordES='un lugar agradable para el desembarco en una costa abrupta, siendo menos audaz que en otros lugares.'
                    /> 
                    Al llegar a lo que parecía <span className='yagan-word1'>yaman-’apisiú úsin</span>, pudo ver la pequeña planta seca y en la costa mucho imi de color naranja intenso. Mercedes tomó la tintura, se pintó la cara de arriba hacia abajo y luego miro el arbusto por un largo rato. Agarró imi para los viejos de su familia y volvió en silencio a su canoa al encuentro con su familia.</p>
                </div>
            </div>
        </>
    )
}

export default Inicio;