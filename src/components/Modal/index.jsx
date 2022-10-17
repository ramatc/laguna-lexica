import React, { useState } from "react";
import { useTranslateContext } from '../../context/Context';
import { Link } from 'react-router-dom';
import "./styles.css";

const Modal = ({translate}) => {
    const [modalInput, setModalInput] = useState(false); 
    const [modal, setModal] = useState(false); 

    const {addPhrase} = useTranslateContext();

    const handleInput = () => {
        setModalInput(!modalInput);
    };

    const toggleModal = () => {
        setModal(!modal);
        addPhrase(translate);
    };

    modalInput ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');
    modal ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal');

    return (
        <>
            <button onClick={!translate ? handleInput : toggleModal} className="btn-modal">
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

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <p>Tu oración será traducida al yagán, lengua que ya no tiene hablantes nativos. ¿Desea continuar?</p>
                        <button onClick={toggleModal}>
                            Cancelar
                        </button>
                        <Link to="/videos">
                            <button>
                                Continuar de todos modos
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;