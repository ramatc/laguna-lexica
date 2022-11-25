import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, orderBy, query } from 'firebase/firestore';
import Loading from '../Loading/Loading';
import NavBarReal from '../NavBar/Real';
import './styles.css';

const Historial = () => {

    const [historial, setHistorial] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = query(collection(db, 'historial'), orderBy('date', 'asc'));
        getDocs(queryCollection)
            .then(resp => setHistorial(resp.docs.map(hist => ({ id: hist.id, ...hist.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    return (
    <>
        <NavBarReal />
        <div className='main-container-real p-60'>
            <h1 className='title-historial'>HISTORIAL</h1>
            {loading ? <Loading/> : 
                <div className='historial-list'>
                    {historial.map((historial, i) => 
                                    <div className='historial-wrapper' key={i}>
                                        <p><span>FRASE INGRESADA:</span> {historial.frase}</p>
                                        <p><span>TRADUCCIÓN 01:</span> {historial.translate01}</p>
                                        <p><span>TRADUCCIÓN 02:</span> {historial.translate02}</p>
                                        <p><span>DESCARTE:</span> {historial.descarte}</p>
                                    </div>)
                    } 
                </div>
            }
        </div>
    </>
    )
}

export default Historial