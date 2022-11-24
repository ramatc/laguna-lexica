import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import NavBarFake from '../NavBar/Fake';
import './styles.css';

import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';
import video3 from '../../assets/videos/video3.mp4';

//TODO COMPONETIZAR VIDEOS
const SectionVideos = () => {

    const [position, setPosition] = useState(1);

    return (
        <>  
            <NavBarFake/>
            {
                position < 3
                ?
                <div className={'silence-wrapper'+position}>
                    <button 
                        className='silence-button'
                        onClick={() => setPosition(position+1)}
                        >
                        Silenciar todos los videos
                    </button>

                </div>
                :
                <Link to="/imagen" className={'silence-wrapper'+position}>
                    <button 
                        className='silence-button'
                        >
                        Silenciar todos los videos
                    </button>
                </Link>
            }
            
            <div className='video-wrapper'>
                <div className='video-card'>
                    <ReactPlayer 
                        url={video1} 
                        playing={true}
                        volume={1}
                    />
                    <p className='video-title'>Chile paralelo 56 (1964) - Rafael Sánchez</p>
                    <p className='video-description'>Por breves minutos muestra a una familia de Yaganes saliendo a navegar. Rescate fílmico.</p>
                </div>

                <div className='video-card'>
                    <ReactPlayer 
                        url={video2} 
                        playing={true}
                        volume={1}
                    />
                    <p className='video-title'> La última huella (2001) - Paola Castillo</p>
                    <p className='video-description'>Úrsula navega por la Bahía Helada hasta El paso del Indio en busca de Imi, 
                    pigmento que se usaba para pintarse la cara durante ceremonias. Esta pintura de tonalidad rojiza se extrae escarbando tierra húmeda.</p>
                </div>

                <div className='video-card'>
                    <ReactPlayer 
                        url={video3} 
                        playing={true}
                        volume={1}
                    />
                    <p className='video-title'>Tánana (2016) - Alberto Serrano Fillol / Cristóbal Azócar</p>
                    <p className='video-description'>TÁNANA, estar listo para zarpar en lengua yagán, es el regreso de Martín González Calderón 
                    al corazón del archipiélago del Cabo de Hornos.</p>
                </div>
            </div>
        </>
    )
}

export default SectionVideos