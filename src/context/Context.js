import { createContext, useState, useContext } from 'react';

const CartContext = createContext([]);

export const useTranslateContext = () => useContext(CartContext);

const ContextProvider = ({ children }) => {

    const [phrase, setPhrase] = useState('');

    const addPhrase = (phrase) => {
        setPhrase(phrase);
    }

    return (
        <CartContext.Provider value={{
            phrase,
            addPhrase,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default ContextProvider;