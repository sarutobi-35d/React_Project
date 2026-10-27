import Image from './assets/images/Jennie.jpg';
import Video from './assets/vidéos/VID_6.mp4';
import { FaCar } from "react-icons/fa6";

import './App.css'

function App() {


  return (
    
    <>
      
      <img src={Image} style={{width:"150px"}} alt="" />
      <video src={Video} controls loop width={500}></video>

      <FaCar />
    </>

  )
}

export default App
