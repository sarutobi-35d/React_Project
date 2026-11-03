import { useState, useEffect, useRef } from 'react';
import Video from './assets/vidéos/VID_6.mp4';

import './App.css'

function App() {

  const [toggle, setToggle] = useState(false);
  const ref = useRef();

  const toggleFunc = () => {
    setToggle(!toggle);
  }

  useEffect(() => {

    if(toggle){
      ref.current.play();
    }else{
      ref.current.pause();
    }

  }, [toggle])


  return (
    
    <>
      <div className="App">
        <video ref={ref} width="300px" autoPlay muted controls>
          <source src={Video} type='video/mp4' />
        </video>

        <button onClick={toggleFunc} >Toggle</button>

      </div>
    </>

  )
}

export default App
