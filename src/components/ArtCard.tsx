import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Path } from '../lib/constants/path.constants';

interface ArtCardProps {
  title: string;
  notes: string;
  thumbnail: string;
  id?: string;
}

const ArtCard: React.FC<ArtCardProps> = ({ title, notes, thumbnail, id }) => {
  const navigate = useNavigate();

  return (
    <Box overflow='hidden' boxShadow='sm' bg='#f1ffe9' textAlign='center' m={2}>
      <Image
        src={`${process.env.REACT_APP_API_URL}/artworks/${thumbnail}`}
        alt={title}
        objectFit='cover'
        w='100%'
        h='250px'
        onContextMenu={(e) => e.preventDefault()}
      />
      <Stack spacing={2} p={4}>
        <Heading as='h5' size='md'>
          {title}
        </Heading>
        <Text fontSize='sm' color='gray.600'>
          {notes}
        </Text>
        <VStack direction='row' spacing={2} justify='center'>
          {id && (
            <Button
              colorScheme='green'
              size='md'
              onClick={() => navigate(`${Path.ARTWORK_DETAILS}/${id}`)}
            >
              See Details
            </Button>
          )}
          <Button colorScheme='yellow' size='md' color='white'>
            Mark Favorite
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default ArtCard;
