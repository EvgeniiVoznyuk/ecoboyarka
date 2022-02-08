import Carousel from 'react-elastic-carousel';
import { SLIDER_ITEMS } from 'constants/shared';
import { Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import SliderCard from './SliderCard';

export default function Slider() {
  const myArrow = ({ type, onClick, isEdge }: any) => {
    const pointer =
      type === 'PREV' ? (
        <ChevronLeftIcon
          _hover={{ color: 'white' }}
          w="50px"
          h="34px"
          color="black"
        />
      ) : (
        <ChevronRightIcon
          _hover={{ color: 'white' }}
          w="50px"
          h="34px"
          color="black"
        />
      );
    return (
      <Button
        borderRadius="50%"
        w="40px"
        h="40px"
        top="40%"
        onClick={onClick}
        disabled={isEdge}
        _hover={{ bg: 'green.500', color: 'white' }}
      >
        {pointer}
      </Button>
    );
  };
  return (
    <Carousel
      renderArrow={myArrow}
      breakPoints={[
        { width: 1, itemsToShow: 1 },
        { width: 650, itemsToShow: 2, itemsToScroll: 2 },
        { width: 870, itemsToShow: 2 },
        { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 3 },
      ]}
      itemsToShow={3}
      isRTL={false}
    >
      {SLIDER_ITEMS.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SliderCard key={`${item.title} - ${index}`} {...item} />
      ))}
    </Carousel>
  );
}
