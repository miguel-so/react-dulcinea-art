// components/ArtistSpotlight.tsx
import {
  Box,
  Grid,
  Heading,
  Text,
  Image,
  Container,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useParallax } from "../../hooks/useParallax";

const MotionBox = motion(Box);

interface SpotlightCardProps {
  image: string;
  date: { day: string; month: string };
  type: string;
  title: string;
  isFirst?: boolean;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  image,
  date,
  type,
  title,
  isFirst,
}) => {
  return (
    <MotionBox className={`card ${isFirst ? "first" : ""}`}>
      <VStack align="flex-start" spacing={4} className="card-wrapper">
        <Box className="card-box align-left">
          <Box
            className="item-img"
            position="relative"
            w="100%"
            pt="130%" // Maintain aspect ratio
            overflow="hidden"
          >
            <Image
              src={image}
              alt={title}
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Text
              className="card-date mbr-fonts-style display-4"
              position="absolute"
              top={4}
              left={4}
              bg="white"
              p={3}
              borderRadius="md"
              textAlign="center"
              lineHeight="short"
            >
              {date.day}
              <br />
              {date.month}
            </Text>
            <Text
              className="card-type mbr-fonts-style display-4"
              position="absolute"
              top={4}
              right={4}
              bg="white"
              p={3}
              borderRadius="md"
            >
              {type}
            </Text>
          </Box>

          <Heading
            as="h5"
            className="card-title mbr-fonts-style display-7"
            fontSize={{ base: "1.1rem", md: "1.2rem" }}
            mt={4}
            fontWeight="normal"
            lineHeight="1.4"
          >
            {title}
          </Heading>
        </Box>
      </VStack>
    </MotionBox>
  );
};

const spotlightItems = [
  {
    image: "/art1.png",
    date: { day: "27", month: "Dec" },
    type: "Design",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    image: "/art2.png",
    date: { day: "29", month: "Dec" },
    type: "Art",
    title: "Praesent tortor arcu, rhoncus dignissim id ac sapien.",
  },
  {
    image: "/art3.png",
    date: { day: "30", month: "Dec" },
    type: "Branding",
    title: "Morbi suscipit velit elementum volutpat pharetra.",
  },
];

export const ArtistSpotlight = () => {
  const { ref: parallaxRef } = useParallax();

  return (
    <Box
      as="section"
      ref={parallaxRef}
      position="relative"
      className="features6 cid-v0naGQnH76 mbr-parallax-background"
      sx={{
        backgroundImage: "url('/home-bg.jpg')", // Add your background image
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.7,
          backgroundColor: "rgb(239, 255, 228)",
          zIndex: 1,
        },
      }}
    >
      <Container
        maxW="container.fluid"
        position="relative"
        zIndex={2}
        py={{ base: 10, md: 16 }}
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
          className="row"
        >
          <GridItem colSpan={1} className="col-12 align-left">
            <MotionBox>
              <Heading
                className="mbr-section-title mbr-fonts-style mb-3 display-5"
                fontSize={{ base: "1.5rem", md: "1.8rem" }}
                fontWeight="bold"
              >
                Artist Spotlight
              </Heading>
            </MotionBox>
          </GridItem>

          <GridItem colSpan={1} className="col-12 col-md-6 col-lg-3 md-pb">
            <Box className="card-wrapper">
              <Box className="card-box align-left">
                <Box className="link-wrapper">
                  <Text
                    className="link mbr-fonts-style display-4"
                    fontSize={{ base: "1rem", md: "1.1rem" }}
                    cursor="pointer"
                    _hover={{ color: "green.500" }}
                  >
                    View All
                  </Text>
                </Box>
              </Box>
            </Box>
          </GridItem>

          {spotlightItems.map((item, index) => (
            <GridItem
              key={index}
              colSpan={1}
              className={`col-12 col-md-6 col-lg-3 md-pb`}
            >
              <SpotlightCard {...item} isFirst={index === 0} />
            </GridItem>
          ))}
        </Grid>

        <Box
          className="line mt-4 pt-5"
          borderTop="1px solid"
          borderColor="gray.200"
          mt={16}
          pt={5}
        />
      </Container>
    </Box>
  );
};
