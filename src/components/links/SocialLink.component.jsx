import React from 'react';
import FreezeShakeAnimatedBox from '../boxes/animated-boxes/FreezeShakeAnimatedBox';
import { 
  FaSoundcloud, 
  FaSpotify,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
 } from 'react-icons/fa';

const SocialLink = (link) => {
  const { linkTo, href, ariaLabel, target } = link;
  return (
    <a  href={href}
        aria-label={ariaLabel}
        target={target}>
          <FreezeShakeAnimatedBox>
            {
              (linkTo === 'soundcloud') ? <FaSoundcloud/> :
              (linkTo === 'spotify')    ? <FaSpotify /> :
              (linkTo === 'facebook')   ? <FaFacebook /> :
              (linkTo === 'linkedin')   ? <FaLinkedin /> :
              (linkTo === 'instagram')  ? <FaInstagram /> :
              ''
            }
          </FreezeShakeAnimatedBox>
    </a>
  );
}

export default SocialLink;

{/* <a  href="https://www.soundcloud.com" 
              aria-label='Soundcloud profile link' 
              target='_blank'>
              <FreezeShakeAnimatedBox>
                <FaSoundcloud />
              </FreezeShakeAnimatedBox>
          </a> */}