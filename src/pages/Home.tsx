import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaPaintBrush } from 'react-icons/fa';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const MotionGridItem = motion(GridItem);
const MotionBox = motion(Box);

const Home = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]); // slower background scroll

  return (
    <Box mt='80px' position='relative'>
      {/* Parallax Background */}
      <MotionBox
        position='fixed'
        top={0}
        left={0}
        width='100%'
        height='100vh'
        bgImage="url('/home-bg.jpg')"
        bgSize='cover'
        bgPosition='center'
        style={{ y }}
        zIndex={-1}
        opacity={0.5}
      />

      {/* Hero Section */}
      <Box position='relative' py={{ base: 10, md: 20 }} overflow='hidden'>
        <Container maxW='7xl'>
          <Flex
            align='center'
            justify='space-between'
            direction={{ base: 'column', md: 'row' }}
            gap={10}
          >
            {/* Text Section */}
            <Stack
              spacing={10}
              flex={{ base: '1', md: '1' }}
            >
              <Heading as='h1' size='xl' color='#1f6463'>
                ✨ Dulcinea-Art
              </Heading>
              <Text fontSize='lg' color='black'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt labore dolore magna aliqua.
              </Text>
              <Text fontSize='lg' color='black'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt labore dolore magna aliqua.
              </Text>
              <Button
                backgroundColor='#1f6463'
                colorScheme='green'
                rightIcon={<FaPaintBrush />}
                _hover={{
                  backgroundColor: '#1f6463',
                  opacity: 0.9,
                }}
                width='200px'
              >
                About Artist
              </Button>
            </Stack>

            {/* Image Section */}
            <Box
              flex={{ base: '1', md: '1' }}
              maxW={{ base: '100%', md: '50%' }}
              w='100%'
              display='flex'
              justifyContent='center'
            >
              <Image
                src='/home-hero.png'
                alt='Hero Art'
                borderRadius='lg'
                boxShadow='md'
                objectFit='contain'
                maxH={{ base: '200px', md: '400px' }}
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Box bg='white' py={20}>
        <Container maxW='7xl' textAlign='center'>
          <Heading mb={10} color='#1f6463'>Art Gallery ✨</Heading>
          <Flex
            overflowX='auto'
            gap={6}
            px={4}
            css={{ '&::-webkit-scrollbar': { display: 'none' } }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Box
                key={i}
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                minW='300px'
                bg='green.100'
                borderRadius='lg'
                boxShadow='md'
                overflow='hidden'
              >
                <Image
                  src={`https://picsum.photos/seed/art${i}/300/200`}
                  alt={`Art ${i}`}
                  objectFit='cover'
                />
                <Box p={4} textAlign='left'>
                  <Heading as='h3' size='md'>
                    Name
                  </Heading>
                  <Text fontSize='sm' color='gray.600'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* Categories Section */}
      <Box bg='gray.50' py={20}>
        <Container maxW='7xl'>
          <Heading textAlign='center' mb={10} color='#ffa600'>
            Categories
          </Heading>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={8}
          >
            {[1, 2, 3, 4].map((i) => (
              <MotionGridItem
                key={i}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                bg='white'
                borderRadius='lg'
                boxShadow='md'
                p={5}
              >
                <Image
                  src={`https://picsum.photos/seed/cat${i}/300/200`}
                  alt='Category'
                  borderRadius='md'
                  mb={3}
                />
                <Heading size='sm' mb={1} color='#60bd24'>
                  Category Name
                </Heading>
                <Text fontSize='xs' color='gray.500'>
                  Lorem ipsum
                </Text>
                <Button mt={3} size='md' color='white' colorScheme='yellow' backgroundColor='#ffa600'>
                  View Arts
                </Button>
              </MotionGridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Artist Spotlight */}
      <Box py={20}>
        <Container maxW='7xl'>
          <Heading mb={10}>Artist Spotlight</Heading>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={8}
          >
            {[1, 2, 3, 4].map((i) => (
              <Box
                key={i}
                bg='white'
                borderRadius='lg'
                overflow='hidden'
                boxShadow='md'
              >
                <Image
                  src={`https://picsum.photos/seed/artist${i}/400/300`}
                  alt='Artist Work'
                />
                <Box p={4}>
                  <Text fontSize='xs' color='gray.500'>
                    {25 + i} Dec · Design
                  </Text>
                  <Heading size='sm' mt={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Heading>
                </Box>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
