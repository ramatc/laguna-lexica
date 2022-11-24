import React, { useState } from 'react';
import NavBarFake from '../NavBar/Fake';
import { Link } from 'react-router-dom';
import { PALABRAS } from '../../utils/words';
import './styles.css';

const Random = () => {

    const getRandomInt = () => {
        return Math.floor(Math.random() * PALABRAS.length);
    }

    const initial = getRandomInt();
    const [count, setCount] = useState(0);
    const [random, setRandom] = useState(initial)

    const handleAdd = () => {
        setRandom(getRandomInt());
        setCount(prev => prev + 1);
    }

    return (
        <>
            <NavBarFake />
            <div className='ht-100 bg-fa'>
                <div className='main-container'>
                    <div className='sub-container'>
                        <h2 className='word-yagan'>{PALABRAS[random].word}</h2>
                        <div className='container-definition'>
                            <p className='definition'>{PALABRAS[random].definition}</p>
                        </div>
                        {
                            count === 10
                                ?
                                <Link to="/imagenes" className='margin-auto'>
                                    <button
                                        className='btn-reformular'>
                                        REFORMULAR
                                    </button>
                                </Link>
                                :
                                <button
                                    onClick={handleAdd}
                                    className='btn-reformular'>
                                    REFORMULAR
                                </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Random;