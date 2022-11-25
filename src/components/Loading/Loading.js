import React from 'react';
import './Loading.css';

const Loading = () => {

    return (
        <div className='loading-container'>
            <p className="loading_text">Buscando historial</p>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    )
}

export default Loading;
