import React from 'react';
import { Box, Image, Heading, Text, Button, Stack, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Path } from '../lib/constants/path.constants';

interface ArtCardProps {
  name: string;
  description: string;
  image: string;
  artworkId?: string;
}

const ArtCard: React.FC<ArtCardProps> = ({ name, description, image, artworkId }) => {

  const navigate = useNavigate();

  return (
    <Box
      overflow="hidden"
      boxShadow="sm"
      bg="#f1ffe9"
      textAlign="center"
      m={2}
    >
      <Image src={image} alt={name} objectFit="cover" w="100%" h="250px" />
      <Stack spacing={2} p={4}>
        <Heading as="h5" size="md">{name}</Heading>
        <Text fontSize="sm" color="gray.600">{description}</Text>
        <VStack direction="row" spacing={2} justify="center">
          {artworkId && (
            <Button colorScheme="green" size="md" onClick={() => navigate(`${Path.ARTWORK_DETAILS}/${artworkId}`)}>
              See Details
            </Button>
          )}
          <Button colorScheme="yellow" size="md" color="white">
            Mark Favorite
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default ArtCard;
