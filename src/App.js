import React, { useEffect, useState } from 'react'
import './App.css';

const soundClips = [
  {
  keyNum: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
},
{
  keyNum: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
},
{
  keyNum: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
},
{
  keyNum: 65,
  keyTrigger: 'A',
  id: 'Heater-4_1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
},
{
  keyNum: 83,
  keyTrigger: 'S',
  id: 'Heater-6',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
},
{
  keyNum: 68,
  keyTrigger: 'D',
  id: 'Dsc_0h',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
},
{
  keyNum: 90,
  keyTrigger: 'Z',
  id: 'Kick_n_Hat',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
},
{
  keyNum: 88,
  keyTrigger: 'X',
  id: 'RP4_KICK_1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
},
{
  keyNum: 67,
  keyTrigger: 'C',
  id: 'Cev_H2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}
]

const App = () => {

  const [display, setDisplay] = useState('-')

  return (
    <div className="App">
      <h1 id='title'>- D r u m M a c h i n e -</h1>
      <div id='drum-machine'>        
        <div id='display-container'>
          <div id='display'>
            <h1>{display}</h1>
          </div>
        </div>

        <div id='pad-container'>
          {soundClips.map(clip => (
            <Pad key={clip.id}clip={clip}setDisplay={setDisplay}/>
          ))}
        </div>
      </div>
    </div>
  );
}

const Pad = ({clip, setDisplay}) => {

  //Toggle between active and inactive classes of drum pads
  const [active, setActive] = useState('inactive')  
  
  //useEffect to handle key events
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => {
    document.removeEventListener('keydown', handleKeyPress)
    }
  })  
  
  const handleKeyPress = (e) => {
    if(e.key.toUpperCase() === clip.keyTrigger){
      playSound()      
    }
  }

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);    
    setActive('drum-pad_active')
    setTimeout(() => setActive((''), 200))
    audioTag.currentTime = 0;
    audioTag.play();
    setDisplay(() => clip.id)
  }

  return(    
    <button
      id={clip.id}
      onClick={playSound}
      className={`drum-pad ${active}`}>        
        <audio className='clip' src={clip.url} id={clip.keyTrigger}></audio>
        {clip.keyTrigger}
    </button>
  )
}

export default App;
