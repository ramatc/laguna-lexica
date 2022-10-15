import React from 'react';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import './styles.css';

import video1 from '../../assets/videos/video1.mp4';
// import video2 from '../../assets/videos/video2.mp4';
// import video3 from '../../assets/videos/video3.mp4';


//TODO COMPONETIZAR VIDEOS
const SectionVideos = () => {
    return (
        <>  
            <Link to="/random" className='silence-wrapper'>
                <button className='silence-button'>
                    Silenciar todos los videos
                </button>
            </Link>
            
            <div className='video-wrapper'>
                <div className='video-card'>
                    <ReactPlayer 
                        url={video1} 
                        playing={true}
                        volume={1}
                    />
                    <p className='video-title'>Nombre | pequeña descripción que aparezca en el material</p>
                </div>

                <div className='video-card'>
                    <ReactPlayer 
                        url={video1} 
                        playing={true}
                        volume={1}
                    />
                    <p className='video-title'>Nombre | pequeña descripción que aparezca en el material</p>
                </div>

                <div className='video-card'>
                    <ReactPlayer 
                        url={video1} 
                        playing={true}
                        volume={1}
                    />
                    <p className='video-title'>Nombre | pequeña descripción que aparezca en el material</p>
                </div>
            </div>
        </>
    )
}

export default SectionVideos