import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import NavBar from '../NavBar/Fake';
import './styles.css'

const SectionAudios = () => {
  return (
    <>  
        <NavBar/>
        <div className='audio-wrapper'>
            <div className='audio-card'>
                <ReactAudioPlayer
                src="my_audio_file.ogg"
                autoPlay
                controls
                />
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src="my_audio_file.ogg"
                autoPlay
                controls
                />
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src="my_audio_file.ogg"
                autoPlay
                controls
                />
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src="my_audio_file.ogg"
                autoPlay
                controls
                />
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src="my_audio_file.ogg"
                autoPlay
                controls
                />
            </div>

            <div className='audio-card'>
                <ReactAudioPlayer
                src="my_audio_file.ogg"
                autoPlay
                controls
                />
            </div>
        </div>

        <p className='text-audios'>La definición de esa palabra (estas palabras dependen del input)</p>
    </>
  )
}

export default SectionAudios;