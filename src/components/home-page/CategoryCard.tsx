// components/CategoryCard.tsx
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface CategoryCardProps {
  image: string;
  title: string;
  description: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <MotionBox whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Box borderRadius="lg" overflow="hidden" bg="white">
        <Box overflow="hidden">
          <Image
            src={image}
            alt={title}
            w="100%"
            h="auto"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.05)" }}
          />
        </Box>
        <Box p={4}>
          <Heading size="md" fontWeight="bold" color="primary.green" mb={2}>
            {title}
          </Heading>
          <Text color="gray.600" mb={4}>
            {description}
          </Text>
          <Button
            as="a"
            href="/arts"
            colorScheme="yellow"
            bg="primary.yellow"
            width="full"
            _hover={{ bg: "primary.yellow", opacity: 0.9 }}
          >
            View Arts
          </Button>
        </Box>
      </Box>
    </MotionBox>
  );
};
