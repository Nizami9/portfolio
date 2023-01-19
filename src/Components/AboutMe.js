import React from 'react';
import { Text, Heading, Box, Flex, Image } from '@chakra-ui/react';
import ChakraBox from './ChakraBox';
import '../Styles/about.css';

const About = () => {
  const bubbles = [
    {
      id: 1,
      image: 'https://storage.googleapis.com/portfolioly-bucket/bubbles_1.png',
      zIndex: 12,
      animate: {
        y: [0, -100],
        x: [0, 50],
        rotate: 10,
        opacity: 1,
      },
    },
    {
      id: 2,
      image: 'https://storage.googleapis.com/portfolioly-bucket/bubbles_1.png',
      zIndex: 11,
      animate: {
        y: [0, -100],
        x: [0, 30],
        rotate: 10,
      },
    },
    {
      id: 3,
      image: 'https://storage.googleapis.com/portfolioly-bucket/bubbles_3.png',
      zIndex: 10,
      animate: {
        y: [0, -100],
        x: [0, 20],
        rotate: 10,
        opacity: 1,
      },
    },
  ];

  return (
    <>
      <Flex maxW="960px" mx="auto" id="about" pb={{ base: 8, lg: 16 }}>
        <Flex
          mx={6}
          pt={16}
          w="100%"
          borderTop="1px"
          borderColor="orange.300"
          direction="row"
          align="center"
          justify="start"
          wrap="wrap"
        >
          <Box maxW={{ base: '100%', lg: '500px' }} zIndex={15}>
            <Heading as="h2" size="2xl">
              Who I Am
            </Heading>
            <Text my={6}>
              As a curiosity-driven full-stack devoper I am interested in
              experimenting with design and technologies to continually expand
              my knowledge.
            </Text>
            <Text my={6}>
              I'm happiest when I'm creating user friendly, well designed and
              technically smooth working products. I love working in a diverse
              and inspiring team and together making things better.
            </Text>
            <Text my={6}>
              Currently I am improving my design skills by playing around and
              creating illustrations using figma.
            </Text>
          </Box>
          <Flex direction="column" align="start" justify="start">
            <Box
              className="bubbleBox"
              mt={{ base: '-20rem', lg: '-20rem' }}
              ml={{ base: '1rem', sm: '5rem', md: '20rem', lg: '0' }}
            >
              {bubbles &&
                bubbles.map(bubble => (
                  <ChakraBox
                    key={bubble.id}
                    initial={{ opacity: 0.2, scale: 0.7 }}
                    animate={bubble.animate}
                    exit={{ opacity: 0.2 }}
                    transition={{
                      duration: 15,
                      ease: 'easeOut',
                      delay: bubble.id * 1.8,
                      repeat: Infinity,
                    }}
                    className="bubbles"
                  >
                    <Image
                      src={bubble.image}
                      alt="illustration air bubbles when the wale exhales"
                      maxW="100px"
                      zIndex={bubble.zIndex}
                    />
                  </ChakraBox>
                ))}
            </Box>
            <ChakraBox
              animate={{
                x: [30, 0, 30],
                rotate: [7, -5, 7],
              }}
              transition={{
                duration: 15,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <Image
                src="https://storage.googleapis.com/portfolioly-bucket/wale_transparent.png"
                alt="illustration of a wale"
                align="center"
                maxW={{ base: '80%', sm: '50%', md: '350px' }}
                mb={{ base: '0', lg: '-20rem' }}
                ml={{ base: '1rem', sm: '5rem', md: '20rem', lg: '0' }}
              />
            </ChakraBox>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
