import React, { useState } from "react";
import "./styles.css";

const ModalReal = ({translate, onClick}) => {

    const [modalInput, setModalInput] = useState(false); 

    const handleInput = () => {
        setModalInput(!modalInput);
    };

    modalInput ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');

    return (
        <>
            <button onClick={!translate ? handleInput : onClick} className="btn-modal-real">
                TRADUCIR
            </button>

            {modalInput && (
                <div className="modal">
                    <div onClick={handleInput} className="overlay"></div>
                    <div className="modal-content">
                        <p>Debes ingresar una frase para continuar.</p>
                        <button onClick={handleInput}>
                            OK
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ModalReal;