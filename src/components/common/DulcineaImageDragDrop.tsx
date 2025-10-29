import React, { useState, useEffect } from 'react';
import { Box, VStack, Icon, Image, CloseButton, Text } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { MdCloudUpload } from 'react-icons/md';

interface DulcineaImageDragDropProps {
  onFileSelect: (file: File | null) => void;
  defaultImageUrl?: string;
}

const DulcineaImageDragDrop: React.FC<DulcineaImageDragDropProps> = ({
  onFileSelect,
  defaultImageUrl,
}) => {
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(
    defaultImageUrl || null
  );

  useEffect(() => {
    if (defaultImageUrl) {
      setPreviewUrl(`${process.env.REACT_APP_API_URL}/artworks/${defaultImageUrl}`);
    }
  }, [defaultImageUrl]);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setThumbnail(file);
      setPreviewUrl(URL.createObjectURL(file));
      onFileSelect(file);
    }
  };

  const removeImage = () => {
    setThumbnail(null);
    setPreviewUrl(null);
    onFileSelect(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
  });

  return (
    <Box
      {...getRootProps()}
      p={4}
      border='2px dashed'
      borderColor={isDragActive ? 'teal.500' : 'gray.300'}
      borderRadius='md'
      textAlign='center'
      bg={isDragActive ? 'teal.50' : 'gray.50'}
      cursor='pointer'
    >
      <input {...getInputProps()} />
      {previewUrl ? (
        <Box position='relative'>
          <Image
            src={previewUrl}
            alt='Uploaded thumbnail'
            borderRadius='md'
            mb={2}
            maxHeight="400px"
            objectFit="contain"
            width="100%"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
          />
          <CloseButton
            position='absolute'
            top='0'
            right='0'
            size='sm'
            onClick={removeImage}
          />
        </Box>
      ) : (
        <VStack spacing={2}>
          <Icon as={MdCloudUpload} boxSize={8} color='teal.400' />
          <Text color='gray.600'>
            {isDragActive
              ? 'Drop the image here'
              : 'Drag & drop a main image here, or click to select'}
          </Text>
          <Text fontSize='sm' color='gray.500'>
            Only image files are accepted
          </Text>
        </VStack>
      )}
    </Box>
  );
};

export default DulcineaImageDragDrop;
