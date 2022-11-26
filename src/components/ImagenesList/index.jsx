import React from 'react';
import Imagenes from '../Imagen'
import NavBar from '../NavBar/Fake';
import './styles.css';

import image1 from '../../assets/images/click-img/1.jpg';
import image2 from '../../assets/images/click-img/2.jpg';
import image3 from '../../assets/images/click-img/3.jpg';
import image4 from '../../assets/images/click-img/4.jpg';
import image5 from '../../assets/images/click-img/5.jpg';
import image6 from '../../assets/images/click-img/6.jpg';
import image7 from '../../assets/images/click-img/7.jpg';
import image8 from '../../assets/images/click-img/8.jpg';
import image9 from '../../assets/images/click-img/9.jpg';
import image10 from '../../assets/images/click-img/10.jpg';
import image11 from '../../assets/images/click-img/11.jpg';
import image12 from '../../assets/images/click-img/12.jpg';
import image13 from '../../assets/images/click-img/13.jpg';
import image14 from '../../assets/images/click-img/14.jpg';
import image15 from '../../assets/images/click-img/15.jpg';
import image16 from '../../assets/images/click-img/16.jpg';
import image17 from '../../assets/images/click-img/17.jpg';
import image18 from '../../assets/images/click-img/18.jpg';
import image19 from '../../assets/images/click-img/19.jpg';
import image20 from '../../assets/images/click-img/20.jpg';
import image21 from '../../assets/images/click-img/21.jpg';
import image22 from '../../assets/images/click-img/22.jpg';
import image23 from '../../assets/images/click-img/23.jpg';
import image24 from '../../assets/images/click-img/24.jpg';
import image25 from '../../assets/images/click-img/25.jpg';
import image26 from '../../assets/images/click-img/26.jpg';
import image27 from '../../assets/images/click-img/27.jpg';
import image28 from '../../assets/images/click-img/28.jpg';
import image29 from '../../assets/images/click-img/29.jpg';
import image30 from '../../assets/images/click-img/30.jpg';

const APruebaList = () => {
    const IMAGENES = [{id: 0, fuente: image1}, {id: 1, fuente: image22}, {id: 2, fuente: image17}, {id: 3, fuente: image4}, {id: 4, fuente: image5}, 
        {id: 5, fuente: image6}, {id: 6, fuente: image7}, {id: 7, fuente: image8}, {id: 8, fuente: image9}, {id: 9, fuente: image10}, 
        {id: 10, fuente: image11}, {id: 11, fuente: image12}, {id: 12, fuente: image13}, {id: 13, fuente: image14}, {id: 14, fuente: image15},
        {id: 15, fuente: image16}, {id: 16, fuente: image3}, {id: 17, fuente: image18}, {id: 18, fuente: image19}, {id: 19, fuente: image20},
        {id: 20, fuente: image21}, {id: 21, fuente: image2}, {id: 22, fuente: image23}, {id: 23, fuente: image24}, {id: 24, fuente: image25},
        {id: 25, fuente: image26}, {id: 26, fuente: image27}, {id: 27, fuente: image28}, {id: 28, fuente: image29}, {id: 29, fuente: image30}
    ];

    return (
        <>
            <NavBar/>
            <div className='ht-100 bg-fa'>
                <div className='main-btn-container images-container'>
                    {
                        IMAGENES.map(imagen => <Imagenes boton={imagen} key={imagen.id}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default APruebaList;