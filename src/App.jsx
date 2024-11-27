import { useEffect, useState } from "react";
import sound from "./assets/heythere.mp3";
import HomePage from "./components/HomePage";
import Slider from "./components/Slider";

function App() {
  const [isSlider, setisSlider] = useState(false);

  function play() {
    const audio = new Audio(sound); // Create a new Audio object
    audio.loop = true; // Enable looping
    audio.play(); // Autoplay the audio
  }

  const click = () => {
    setisSlider((prev) => !prev);
    play();
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     play();
  //   }, 2000);
  // }, []);

  return (
    <>
      {isSlider ? <Slider /> : <HomePage click={click} />}
      {/* <button onClick={() => {}}>click Me </button> */}
    </>
  );
}

export default App;
