import React, { useState, useRef, useEffect } from 'react';
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

  useEffect(() => {
    setIsPlaying(false);
  }, []);

  return (
    <>
      <audio ref={audioEl} src={src} />
      <Button onClick={togglePlay}
              borderRadius='md'
              shadow='lg'
              size='lg'
              cursor='pointer'
              _hover={{
                'shadow': 'sm',
              }}
              >
        { 
          (isPlaying) ? <FaPause /> : <FaPlay />
        }
      </Button>
    </>
  );
}

export default AudioPlayer;