import React from "react";
import { useTranslateContext } from '../../context/Context';
import "./styles.css";

import frutilla from '../../assets/images/frutilla.jpg';

const Modal = () => {
    const {hdClass, setHdClass, setTranslateHome7, translateHome7} = useTranslateContext();

    const handleInput = () => {
        setHdClass(!hdClass);
        setTranslateHome7(translateHome7 + 1);
    };

    hdClass ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');

    return (
        <>
            {hdClass && (
                <div className="modal">
                    <div onClick={handleInput} className="overlay"></div>
                    <div className="modal-img-content">
                        <img src={frutilla} alt='Frutilla de Magallanes' className="pop-img"/>
                        <button onClick={handleInput}>
                            CERRAR
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;