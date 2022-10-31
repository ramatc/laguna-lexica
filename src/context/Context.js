import React, { createContext, useState, useContext, useEffect } from 'react';

const Context = createContext([]);

export const useTranslateContext = () => useContext(Context);

const ContextProvider = ({ children }) => {

    const [phrase, setPhrase] = useState('');
    const [historial, setHistorial] = useState([]);
    const [translateHome, setTranslateHome] = useState(false);

    const addPhrase = (phrase) => {
        setPhrase(phrase);
    }

    const addHistorial = (historialItem) => {
        setHistorial([...historial, historialItem]);
    }

    const addTranslateHome = () => {
        setTranslateHome(true)
    }

    return (
        <Context.Provider value={{
            phrase,
            historial,
            translateHome,
            addPhrase,
            addHistorial,
            addTranslateHome
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;