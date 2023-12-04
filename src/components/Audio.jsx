import styles from "./Audio.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRef } from "react";
library.add(fas, faCirclePlay, faCirclePause);
//faCirclePause
//fa-circle-pause
function Audio({ audio }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioEl = useRef();
  function controlPlayer() {
    if (audioEl.current.duration > 0 && !audioEl.current.paused) {
      console.log("Audio Is Paused");
      audioEl.current.pause();
      setIsPlaying(false);
    } else {
      console.log("Audio is playing");
      audioEl.current.play();
      setIsPlaying(true);
    }
  }

  function onEnded() {
    setIsPlaying(false);
  }

  return (
    <>
      <audio onEnded={onEnded} ref={audioEl} className={styles.audio}>
        <source src={audio} type="audio/mp3" />
      </audio>
      <button className={styles.btn} type="button">
        <FontAwesomeIcon
          onClick={(e) => controlPlayer()}
          className={styles.icon}
          icon={`fa-solid fa-circle-${isPlaying ? "pause" : "play"}`}
        />
      </button>
    </>
  );
}

export default Audio;
