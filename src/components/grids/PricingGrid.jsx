import React from 'react';
import { priceDetails as data } from '../../data/price-details.data';
import PriceCard from '../cards/price-card/PriceCard';
// import PriceCardBadge from '../cards/price-card/PriceCardBadge';
import PriceCardBody from '../cards/price-card/PriceCardBody';
import {
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';

/***
 * The Grid will always contain 6 items.
 * The 2nd position (going top-bottom & LTR) is the promo card.
 * The 4th position, is a horizontal variant of card.
 */
const PricingGrid = () => {
  return (
    <Grid
    templateRows='repeat(5, 1fr)'
    templateColumns='repeat(4, 1fr)'
    gap='32px'
    w='full'
    pt='128px'
    px='64px'
    >
      <GridItem rowStart={1} rowEnd={3} colStart={1} colEnd={2}>
        <PriceCard height='full'>
          <PriceCardBody details={data[0]} />
        </PriceCard>
      </GridItem>

      <GridItem rowStart={1} rowEnd={4} colStart={2} colEnd={4}>
        <PriceCard height='full' shouldClip={false}>
          <PriceCardBody details={data[1]} />
        </PriceCard>
      </GridItem>

      <GridItem rowStart={1} rowEnd={3} colStart={4} colEnd={5}>
        <PriceCard height='full'>
          <PriceCardBody details={data[5]}/>
        </PriceCard>
      </GridItem>

      <GridItem rowStart={3} rowEnd={5} colStart={1} colEnd={2}>
        <PriceCard height='full'>
          <PriceCardBody details={data[2]}/>
        </PriceCard>
      </GridItem>

      <GridItem rowStart={4} rowEnd={5} colStart={2} colEnd={4}>
        <PriceCard height='full'>
          <PriceCardBody details={data[3]} isHorizontalLayout={true}/>
        </PriceCard>
      </GridItem> 

      <GridItem rowStart={3} rowEnd={5} colStart={4} colEnd={5}>
        <PriceCard height='full'>
          <PriceCardBody details={data[4]} /> 
        </PriceCard>
      </GridItem>
    </Grid>
  );
}

export default PricingGrid;