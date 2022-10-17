import { createContext, useState, useContext } from 'react';

const Context = createContext([]);

export const useTranslateContext = () => useContext(Context);

const ContextProvider = ({ children }) => {

    const [phrase, setPhrase] = useState('');

    const addPhrase = (phrase) => {
        setPhrase(phrase);
    }

    return (
        <Context.Provider value={{
            phrase,
            addPhrase,
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;