import {
  keyframes,
} from '@chakra-ui/react';

// Freeze Shake animation:
// Does a small shift LTR with a background change.
// Used for social buttons in Hero.
export const freezeShakeAnimation = keyframes`
  from {
    color: inherit
  }

  to {
    color: yellow
  }

  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`

export const freezeShakeNoColorChangeAnimation = `keyframes {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}`