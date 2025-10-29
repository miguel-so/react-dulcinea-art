import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react';
import { MdPhone } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { Path } from '../lib/constants/path.constants';
import urlConstants from '../lib/constants/url.constants';
import useApi from '../lib/hooks/useApi';
import { ApiCommand } from '../lib/Api';
import useToastNotification from '../lib/hooks/useToastNotification';

const carouselImages = [
  '/art1.png',
  '/art2.png',
  '/art3.png',
  '/art4.png',
  '/art5.png',
];

const mainWidth = 400;
const mainHeight = 400;

// ✅ Increased zoom effect and bigger zoom window
const zoomFactor = 3; // was 2 before
const zoomWidth = 400; // was 300 before
const zoomHeight = 400; // was 300 before

const { getArtworkById: getArtworkByIdUrl } = urlConstants.artworks;

const ArtworkDetails: React.FC = () => {
  const { artworkId } = useParams();
  const [artwork, setArtwork] = useState<Artwork>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(carouselImages[0]);
  const [zoomVisible, setZoomVisible] = useState(false);
  const [zoomPos, setZoomPos] = useState({
    x: 0,
    y: 0,
    zoomLeft: 0,
    zoomTop: 0,
  });

  const mainRef = useRef<HTMLDivElement>(null);

  const { sendRequest: getArtworkById } = useApi<GetArtworkByIdResopnse>();
  const showToast = useToastNotification();

  useEffect(() => {
    fetchArtwrok();
  }, []);

  const fetchArtwrok = () => {
    if (artworkId) {
      getArtworkById({
        callback(data: GetArtworkByIdResopnse | null, error) {
          if (error) {
            showToast({
              title: 'Failed',
              description: error,
              status: 'error',
            });
            return;
          }
          setArtwork(data?.data);
          setSelectedImage(data?.data?.thumbnail as string);
        },
        command: ApiCommand.GET,
        url: getArtworkByIdUrl(artworkId),
      });
    }
  };
  console.log('artwokr', artwork);

  const onContact = () => {
    navigate(`${Path.CONTACT}/${artworkId}`);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mainRef.current) return;

    const rect = mainRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    x = Math.max(0, Math.min(x, mainWidth));
    y = Math.max(0, Math.min(y, mainHeight));

    let zoomLeft = e.clientX + 20;
    let zoomTop = e.clientY + 20;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (zoomLeft + zoomWidth > viewportWidth)
      zoomLeft = e.clientX - zoomWidth - 20;
    if (zoomTop + zoomHeight > viewportHeight)
      zoomTop = e.clientY - zoomHeight - 20;

    setZoomPos({ x, y, zoomLeft, zoomTop });
  };

  const getBgPosition = () => {
    const maxX = mainWidth * zoomFactor - zoomWidth;
    const maxY = mainHeight * zoomFactor - zoomHeight;

    let bgX = zoomPos.x * zoomFactor - zoomWidth / 2;
    let bgY = zoomPos.y * zoomFactor - zoomHeight / 2;

    bgX = Math.max(0, Math.min(bgX, maxX));
    bgY = Math.max(0, Math.min(bgY, maxY));

    return `${-bgX}px ${-bgY}px`;
  };

  return (
    <Box
      bgImage="url('/art-details-bg.jpg')"
      bgPosition='center'
      bgRepeat='repeat-y'
      pt={16}
    >
      <Container
        maxW='3xl'
        py={{ base: 4, md: 8 }}
        my={{ base: 4, md: 16 }}
        textAlign='center'
        bg='white'
        boxShadow='lg'
        borderRadius='md'
      >
        <Heading as='h1' size='xl' mb={4} fontWeight='bold' color='#1f6463'>
          "{artwork?.title}"
        </Heading>
        <Text fontSize='lg' mb={6} color='#1f6463'>
          {artwork?.notes}
        </Text>
        <Button
          backgroundColor='#1f6463'
          colorScheme='green'
          rightIcon={<MdPhone />}
          _hover={{ backgroundColor: '#1f6463', opacity: 0.9 }}
          onClick={onContact}
        >
          Contact Artist
        </Button>
      </Container>

      <Box py={16}>
        <Container maxW='6xl' textAlign='center'>
          <Box
            ref={mainRef}
            display='inline-block'
            width={`${mainWidth}px`}
            height={`${mainHeight}px`}
            position='relative'
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setZoomVisible(true)}
            onMouseLeave={() => setZoomVisible(false)}
            cursor='crosshair'
            borderRadius='md'
            overflow='hidden'
          >
            <Image
              src={`${process.env.REACT_APP_API_URL}/artworks/${selectedImage}`}
              alt='Main Artwork'
              width='100%'
              height='100%'
              objectFit='cover'
              borderRadius='md'
              onContextMenu={(e) => e.preventDefault()}
            />
          </Box>

          {zoomVisible && (
            <Box
              position='fixed'
              width={`${zoomWidth}px`}
              height={`${zoomHeight}px`}
              top={`${zoomPos.zoomTop}px`}
              left={`${zoomPos.zoomLeft}px`}
              border='2px solid #1f6463'
              borderRadius='md'
              pointerEvents='none'
              bgImage={`url(${process.env.REACT_APP_API_URL}/artworks/${selectedImage})`}
              bgRepeat='no-repeat'
              bgSize={`${mainWidth * zoomFactor}px ${
                mainHeight * zoomFactor
              }px`}
              bgPosition={getBgPosition()}
            />
          )}

          <HStack mt={4} spacing={4} justify='center'>
            {artwork
              ? [...artwork.images, artwork.thumbnail].map((img, idx) => (
                  <Box
                    key={idx}
                    border={
                      img === selectedImage
                        ? '2px solid #1f6463'
                        : '2px solid transparent'
                    }
                    borderRadius='md'
                    cursor='pointer'
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image
                      src={`${process.env.REACT_APP_API_URL}/artworks/${img}`}
                      alt={`Artwork ${idx + 1}`}
                      boxSize='80px'
                      objectFit='cover'
                      borderRadius='md'
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </Box>
                ))
              : null}
          </HStack>
        </Container>
      </Box>

      {/* <Box py={16} bg='#fffefa'>
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
      </Box> */}
    </Box>
  );
};

export default ArtworkDetails;
