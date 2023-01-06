import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import {
  Button,
} from '@chakra-ui/react';

const AudioPlayer = ({ src='' }) => {

  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState('false');

  function togglePlay() {
    if (audioEl.current.paused) {
      audioEl.current.play();
      setIsPlaying(true);
    } else {
      audioEl.current.pause();
      setIsPlaying(false);
    }
  }

  return (
    <>
      <audio ref={audioEl} src={src} />
      <Button onClick={togglePlay}
              borderRadius='md'
              shadow='md'
              >
        { 
          (isPlaying) ? <FaPause /> : <FaPlay />
        }
      </Button>
    </>
  );
}

export default AudioPlayer;