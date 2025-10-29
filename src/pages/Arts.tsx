import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import ArtCard from '../components/ArtCard';

const artsData = [
  {
    name: 'Name 1',
    description: 'Description',
    image: '/art1.png',
    artworkId: '1231',
  },
  {
    name: 'Name 2',
    description: 'Description',
    image: '/art1.png',
    artworkId: '/details',
  },
  {
    name: 'Name 3',
    description: 'Description',
    image: '/art1.png',
    artworkId: '/details',
  },
  {
    name: 'Name 4',
    description: 'Description',
    image: '/art1.png',
    artworkId: '/details',
  },
  {
    name: 'Name 5',
    description: 'Description',
    image: '/art1.png',
    artworkId: '/details',
  },
  {
    name: 'Name 1',
    description: 'Description',
    image: '/art1.png',
    artworkId: '/details',
  },
  {
    name: 'Name 2',
    description: 'Description',
    image: '/art1.png',
    artworkId: '/details',
  },
  {
    name: 'Name 3',
    description: 'Description',
    image: '/art1.png',
    artworkId: '/details',
  },
  {
    name: 'Name 4',
    description: 'Description',
    image: '/art1.png',
    artworkId: '/details',
  },
  {
    name: 'Name 5',
    description: 'Description',
    image: '/art1.png',
    artworkId: '/details',
  },
];

const Arts: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient='linear(to-r, teal.400, green.300)'
        color='white'
        paddingTop={{ base: 28, md: 32 }}
        paddingBottom={{ base: 8, md: 12 }}
        textAlign='center'
      >
        <Container maxW='container.lg'>
          <Heading as='h1' size='2xl' mb={4}>
            Arts
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} mb={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed eiusmod tempor incididunt labore dolore magna aliqua.
          </Text>
          <Button colorScheme='yellow' size='lg'>
            View More
          </Button>
        </Container>
      </Box>

      {/* Art Cards Section */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={1} p={4}>
        {artsData.map((art, idx) => (
          <ArtCard
            key={idx}
            name={art.name}
            description={art.description}
            image={art.image}
            artworkId={art.artworkId}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Arts;
