import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  SimpleGrid,
  useToast,
} from '@chakra-ui/react';
import DulcineaInput from '../components/common/DulcineaInput';
import DulcineaTextarea from '../components/common/DulcineaTextarea';

const ContactForm: React.FC = () => {
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Message sent.',
      description: 'Thanks for filling out the form!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      bg='gray.50'
      minH='calc(100vh - 72px)'
      display='flex'
      alignItems='center'
      justifyContent='center'
      py={0}
    >
      <Container
        maxW='container.md'
        bg='white'
        p={8}
        borderRadius='md'
        boxShadow='md'
      >
        <Heading as='h2' size='xl' mb={8} textAlign='center' color='#1f6463'>
          Send Your Message
        </Heading>
        <form onSubmit={handleSubmit}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={4}>
            <FormControl id='name'>
              <FormLabel>Name</FormLabel>
              <DulcineaInput placeholder='Name' />
            </FormControl>
            <FormControl id='email'>
              <FormLabel>Email</FormLabel>
              <DulcineaInput type='email' placeholder='Email' />
            </FormControl>
            <FormControl id='phone'>
              <FormLabel>Phone</FormLabel>
              <DulcineaInput type='tel' placeholder='Phone' />
            </FormControl>
          </SimpleGrid>
          <FormControl id='message' mb={4}>
            <FormLabel>Your Message</FormLabel>
            <DulcineaTextarea placeholder='Your Message' rows={6} />
          </FormControl>
          <Box textAlign='center'>
            <Button
              backgroundColor='#1f6463'
              colorScheme='green'
              _hover={{
                backgroundColor: '#1f6463',
                opacity: 0.9,
              }}
              type='submit'
            >
              Send Now
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
