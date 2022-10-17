import React, {useState} from 'react';
import NavBarReal from '../NavBar/Real';
import Modal from '../Modal';
import './styles.css';

const TranslateFake = () => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <NavBarReal/>
            <div className='main-container'>
            <div className='sub-container'>
                <h2 className='main-title'>DEL YAGÁN AKUPAIA-NGAI:</h2>
                <h2 className='sub-title'>MARCAR UN ÁRBOL CON UN HACHA PARA ENCONTRARLO MÁS FÁCIL</h2>
                <p className='question'>¿Qué mecanismos usás para no perder en medio de tu caos, aquellas cosas que más atesorás?</p>
                <div className="translate-container">
                    <input
                        className='fake-input'
                        value={inputValue}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Escribí un texto para traducirlo al Yagán"
                    />
                    <Modal translate={inputValue}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default TranslateFake;