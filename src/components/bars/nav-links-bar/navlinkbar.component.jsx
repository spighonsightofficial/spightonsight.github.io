import React from 'react';

import {
  responsiveNavLinkBarFontSize,
  responsiveBarWidth,
  responsiveNavLinkBarVerticalPadding,
  responsiveNavLinkBarHorizontalPadding,
  responsiveNavLinkBarFlexDirection,
  responsiveNavLinkBarFlexColumnJustify,
  responsiveNavLinkBarFlexColumnAlign,
} from './navlinkbar.responsive_styles';

import NavLink from '../../links/nav-link/navlink.component';
import {
  Flex,
} from '@chakra-ui/react';

const NavLinkBar = ({ links=[] }) => {
  return (
    <Flex px='64px'
          justify='center'
          align='center'
          >
      <Flex w={responsiveBarWidth}
            direction={responsiveNavLinkBarFlexDirection}
            justify={responsiveNavLinkBarFlexColumnJustify}
            align={responsiveNavLinkBarFlexColumnAlign}
            fontWeight='thin'
            py='32px'
            >
        {
          links.map(
            (link) => 
              <NavLink key={link.id} 
                       link={link} 
                       verticalPadding={responsiveNavLinkBarVerticalPadding}
                       horizontalPadding={responsiveNavLinkBarHorizontalPadding}
                       fontSize={responsiveNavLinkBarFontSize}
                       />
          )
        }
      </Flex>
    </Flex>
  );
}

export default NavLinkBar;