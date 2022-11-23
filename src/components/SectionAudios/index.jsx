import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/Fake';
import './styles.css'

import audio1 from '../../assets/audios/Alaköna-observar.ogg'
import audio2 from '../../assets/audios/Lushá-rojo.ogg'
import audio3 from '../../assets/audios/Miatána-sonreír.ogg'
import audio4 from '../../assets/audios/Tapóin-padre.ogg'
import audio5 from '../../assets/audios/Tön-tierra.ogg'
import audio6 from '../../assets/audios/Yampímata-conversar.ogg'

const SectionAudios = () => {
    
    const alertAudio = () => {
        alert("Esta palabra si pertenece a la serie");
    }

    return (
    <>  
        <NavBar/>
        <p className='main-text-audio'>Seleccioná la palabra que no corresponde a la serie</p>
        <div className='audio-wrapper'>
            <div className='audio-card'>
                <ReactAudioPlayer
                src={audio1}
                autoPlay
                controls
                />
                <p className='text-audio' onClick={() => alertAudio()}>alaköna (observar)</p>
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src={audio2}
                autoPlay
                controls
                />
                <Link to='/palabras' style={{width: '100%', color: 'black'}}>
                    <p className='text-audio'>lusha (rojo)</p>
                </Link>
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src={audio3}
                autoPlay
                controls
                />
                <p className='text-audio' onClick={() => alertAudio()}>miatána (sonreír)</p>
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src={audio4}
                autoPlay
                controls
                />
                <p className='text-audio' onClick={() => alertAudio()}>tapóin (padre)</p>
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src={audio5}
                autoPlay
                controls
                />
                <p className='text-audio' onClick={() => alertAudio()}>tön (tierra)</p>
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src={audio6}
                autoPlay
                controls
                />
                <p className='text-audio' onClick={() => alertAudio()}>yampímata (conversar)</p>
            </div>
        </div>
    </>
    )
    }

export default SectionAudios;