// src/components/ArtworkDetails.tsx
import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { MdPhone } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { Path } from '../lib/constants/path.constants';

const carouselImages = [
  '/art1.png',
  '/art1.png',
  '/art1.png',
  '/art1.png',
  '/art1.png',
];

const ArtworkDetails: React.FC = () => {
  const { artworkId } = useParams();
  const navigate = useNavigate();

  const onContact = () => {
    navigate(`${Path.CONTACT}/${artworkId}`); // replace with artistId
  };

  return (
    <Box
      bgImage="url('/art-details-bg.jpg')"
      bgPosition='center'
      bgRepeat='repeat-y'
      pt={16}
    >
      {/* Hero Section */}
      <Container
        maxW='3xl'
        py={{ base: 4, md: 8 }}
        my={{ base: 4, md: 16 }}
        textAlign='center'
        bg='white'
      >
        <Heading as='h1' size='xl' mb={4} fontWeight='bold' color='#1f6463'>
          "I Wish It Would Rain"
        </Heading>
        <Text fontSize='lg' mb={6} color='#1f6463'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt labore dolore magna aliqua.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt labore dolore magna aliqua.
        </Text>
        <Button
          backgroundColor='#1f6463'
          colorScheme='green'
          rightIcon={<MdPhone />}
          _hover={{
            backgroundColor: '#1f6463',
            opacity: 0.9,
          }}
          onClick={() => onContact()}
        >
          Contact Artist
        </Button>
      </Container>

      {/* Carousel Section */}
      <Box py={16}>
        <Container maxW='6xl'>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={8}
            alignItems='center'
          >
            {carouselImages.map((src, idx) => (
              <Box key={idx} textAlign='center'>
                <Image
                  src={src}
                  alt={`Artwork ${idx + 1}`}
                  borderRadius='md'
                  mx='auto'
                  maxH='360px'
                  objectFit='cover'
                />
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Details Section */}
      <Box py={16} bg='#fffefa'>
        <Container maxW='4xl'>
          <VStack spacing={4} align='start'>
            <Text fontSize='lg'>
              <strong>Detail 1:</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed eiusmod tempor incididunt labore dolore magna
              aliqua.
            </Text>
            <Text fontSize='lg'>
              <strong>Detail 2:</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed eiusmod tempor incididunt labore dolore magna
              aliqua.
            </Text>
            <Text fontSize='lg'>
              <strong>Detail 3:</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed eiusmod tempor incididunt labore dolore magna
              aliqua.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default ArtworkDetails;
