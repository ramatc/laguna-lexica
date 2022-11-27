import React, { createContext, useState, useContext } from 'react';

const Context = createContext([]);

export const useTranslateContext = () => useContext(Context);

const ContextProvider = ({ children }) => {

    const [historial, setHistorial] = useState([]);
    const [road, setRoad] = useState(0);
    const [bgClass, setBgClass] = useState(false);
    const [ffClass, setFfClass] = useState(false);
    const [bwClass, setBwClass] = useState(false);
    const [hdClass, setHdClass] = useState(false);

    const [translateHome1, setTranslateHome1] = useState(0);
    const [translateHome2, setTranslateHome2] = useState(0);
    const [translateHome3, setTranslateHome3] = useState(0);
    const [translateHome4, setTranslateHome4] = useState(0);
    const [translateHome5, setTranslateHome5] = useState(0);
    const [translateHome6, setTranslateHome6] = useState(0);
    const [translateHome7, setTranslateHome7] = useState(0);
    const [translateHome8, setTranslateHome8] = useState(0);
    const [translateHome9, setTranslateHome9] = useState(0);

    const addHistorial = (historialItem) => {
        setHistorial([...historial, historialItem]);
    }

    const addTranslateHome1 = () => {
        setTranslateHome1(translateHome1 + 1);

        if (translateHome2 > 0) {
            setTranslateHome2(translateHome2 + 1);
        }

        if (translateHome3 > 0) {
            setTranslateHome3(translateHome3 + 1);
        }

        if (translateHome4 > 0) {
            setTranslateHome4(translateHome4 + 1);
        }

        if (translateHome5 > 0) {
            setTranslateHome5(translateHome5 + 1);
        }

        if (translateHome6 > 0) {
            setTranslateHome6(translateHome6 + 1);
        }

        if (translateHome7 > 0) {
            setTranslateHome7(translateHome7 + 1);
        }

        if (translateHome8 > 0) {
            setTranslateHome8(translateHome8 + 1);
        }

        if (translateHome9 > 0) {
            setTranslateHome9(translateHome9 + 1);
        }
    }

    const addTranslateHome2 = () => {
        setTranslateHome2(translateHome2 + 1);
        setRoad(0);
        setBgClass(true);

        if (translateHome1 > 0) {
            setTranslateHome1(translateHome1 + 1);
        }

        if (translateHome3 > 0) {
            setTranslateHome3(translateHome3 + 1);
        }

        if (translateHome4 > 0) {
            setTranslateHome4(translateHome4 + 1);
        }

        if (translateHome5 > 0) {
            setTranslateHome5(translateHome5 + 1);
        }

        if (translateHome6 > 0) {
            setTranslateHome6(translateHome6 + 1);
        }

        if (translateHome7 > 0) {
            setTranslateHome7(translateHome7 + 1);
        }

        if (translateHome8 > 0) {
            setTranslateHome8(translateHome8 + 1);
        }

        if (translateHome9 > 0) {
            setTranslateHome9(translateHome9 + 1);
        }
    }

    const addTranslateHome3 = () => {
        setTranslateHome3(translateHome3 + 1);

        if (translateHome1 > 0) {
            setTranslateHome1(translateHome1 + 1);
        }

        if (translateHome2 > 0) {
            setTranslateHome2(translateHome2 + 1);
        }

        if (translateHome4 > 0) {
            setTranslateHome4(translateHome4 + 1);
        }

        if (translateHome5 > 0) {
            setTranslateHome5(translateHome5 + 1);
        }

        if (translateHome6 > 0) {
            setTranslateHome6(translateHome6 + 1);
        }

        if (translateHome7 > 0) {
            setTranslateHome7(translateHome7 + 1);
        }

        if (translateHome8 > 0) {
            setTranslateHome8(translateHome8 + 1);
        }

        if (translateHome9 > 0) {
            setTranslateHome9(translateHome9 + 1);
        }
    }

    const addTranslateHome4 = () => {
        setTranslateHome4(translateHome4 + 1);

        if (translateHome1 > 0) {
            setTranslateHome1(translateHome1 + 1);
        }

        if (translateHome2 > 0) {
            setTranslateHome2(translateHome2 + 1);
        }

        if (translateHome3 > 0) {
            setTranslateHome3(translateHome3 + 1);
        }

        if (translateHome5 > 0) {
            setTranslateHome5(translateHome5 + 1);
        }

        if (translateHome6 > 0) {
            setTranslateHome6(translateHome6 + 1);
        }

        if (translateHome7 > 0) {
            setTranslateHome7(translateHome7 + 1);
        }

        if (translateHome8 > 0) {
            setTranslateHome8(translateHome8 + 1);
        }

        if (translateHome9 > 0) {
            setTranslateHome9(translateHome9 + 1);
        }
    }

    const addTranslateHome5 = () => {
        setTranslateHome5(translateHome5 + 1);
        setRoad(1);
        setFfClass(true);

        if (translateHome1 > 0) {
            setTranslateHome1(translateHome1 + 1);
        }

        if (translateHome2 > 0) {
            setTranslateHome2(translateHome2 + 1);
        }

        if (translateHome3 > 0) {
            setTranslateHome3(translateHome3 + 1);
        }

        if (translateHome4 > 0) {
            setTranslateHome4(translateHome4 + 1);
        }

        if (translateHome6 > 0) {
            setTranslateHome6(translateHome6 + 1);
        }

        if (translateHome7 > 0) {
            setTranslateHome7(translateHome7 + 1);
        }

        if (translateHome8 > 0) {
            setTranslateHome8(translateHome8 + 1);
        }

        if (translateHome9 > 0) {
            setTranslateHome9(translateHome9 + 1);
        }
    }

    const addTranslateHome6 = () => {
        setTranslateHome6(translateHome6 + 1);
        setRoad(2);
        setBwClass(true);

        if (translateHome1 > 0) {
            setTranslateHome1(translateHome1 + 1);
        }

        if (translateHome2 > 0) {
            setTranslateHome2(translateHome2 + 1);
        }

        if (translateHome3 > 0) {
            setTranslateHome3(translateHome3 + 1);
        }

        if (translateHome4 > 0) {
            setTranslateHome4(translateHome4 + 1);
        }

        if (translateHome5 > 0) {
            setTranslateHome5(translateHome5 + 1);
        }

        if (translateHome7 > 0) {
            setTranslateHome7(translateHome7 + 1);
        }

        if (translateHome8 > 0) {
            setTranslateHome8(translateHome8 + 1);
        }

        if (translateHome9 > 0) {
            setTranslateHome9(translateHome9 + 1);
        }
    }

    const addTranslateHome7 = () => {
        setHdClass(true);

        if (translateHome1 > 0) {
            setTranslateHome1(translateHome2 + 1);
        }

        if (translateHome2 > 0) {
            setTranslateHome2(translateHome2 + 1);
        }

        if (translateHome3 > 0) {
            setTranslateHome3(translateHome3 + 1);
        }

        if (translateHome4 > 0) {
            setTranslateHome4(translateHome4 + 1);
        }

        if (translateHome5 > 0) {
            setTranslateHome5(translateHome5 + 1);
        }

        if (translateHome6 > 0) {
            setTranslateHome6(translateHome6 + 1);
        }

        if (translateHome8 > 0) {
            setTranslateHome8(translateHome8 + 1);
        }

        if (translateHome9 > 0) {
            setTranslateHome9(translateHome9 + 1);
        }
    }

    const addTranslateHome8 = () => {
        setTranslateHome8(translateHome8 + 1);

        if (translateHome2 > 0) {
            setTranslateHome2(translateHome2 + 1);
        }

        if (translateHome3 > 0) {
            setTranslateHome3(translateHome3 + 1);
        }

        if (translateHome4 > 0) {
            setTranslateHome4(translateHome4 + 1);
        }

        if (translateHome5 > 0) {
            setTranslateHome5(translateHome5 + 1);
        }

        if (translateHome6 > 0) {
            setTranslateHome6(translateHome6 + 1);
        }

        if (translateHome7 > 0) {
            setTranslateHome7(translateHome7 + 1);
        }

        if (translateHome9 > 0) {
            setTranslateHome9(translateHome9 + 1);
        }
    }

    const addTranslateHome9 = () => {
        setTranslateHome9(translateHome9 + 1);

        if (translateHome2 > 0) {
            setTranslateHome2(translateHome2 + 1);
        }

        if (translateHome3 > 0) {
            setTranslateHome3(translateHome3 + 1);
        }

        if (translateHome4 > 0) {
            setTranslateHome4(translateHome4 + 1);
        }

        if (translateHome5 > 0) {
            setTranslateHome5(translateHome5 + 1);
        }

        if (translateHome6 > 0) {
            setTranslateHome6(translateHome6 + 1);
        }

        if (translateHome7 > 0) {
            setTranslateHome7(translateHome7 + 1);
        }

        if (translateHome8 > 0) {
            setTranslateHome8(translateHome8 + 1);
        }
    }

    return (
        <Context.Provider value={{
            historial,
            translateHome1,
            translateHome2,
            translateHome3,
            translateHome4,
            translateHome5,
            translateHome6,
            translateHome7,
            translateHome8,
            translateHome9,
            road,
            bgClass,
            ffClass,
            bwClass,
            hdClass,
            setTranslateHome7,
            setHdClass,
            addHistorial,
            addTranslateHome1,
            addTranslateHome2,
            addTranslateHome3,
            addTranslateHome4,
            addTranslateHome5,
            addTranslateHome6,
            addTranslateHome7,
            addTranslateHome8,
            addTranslateHome9
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;