import React from 'react';
import {
  Image,
  Heading,
  IconButton,
  Flex,
  useMediaQuery,
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import '../index.css';

import { animateScroll as scroll } from 'react-scroll';
import { ArrowUpIcon } from '@chakra-ui/icons';

import About from './AboutMe';
import BoxTools from './BoxTools';
import ProjectsOverview from './ProjectsDetails';
import Contact from './Contact';

const Home = () => {
  const bg = useColorModeValue('gray.100', 'gray.400');
  const [isSmallerThan310] = useMediaQuery('(max-width: 310px)');

  return (
    <>
      <header>
        <Flex
          maxW="960px"
          mx="auto"
          id="home"
          direction="row"
          align="center"
          justify="center"
          pt={32}
          pb={16}
        >
          <Flex
            direction="row"
            align="start"
            justify={['center', 'center', 'start']}
            wrap="wrap"
            w="100%"
            mx={6}
          >
            <Image
              src=""
              borderRadius="md"
              alt="Profile picture Nizami Suleymanov"
              maxW={{ base: '220px', sm: '300px' }}
              // maxW="300px"
              mr={['0', '4', '8', '16']}
            />
            <Box grow="1" maxW={['100%', '100%', '50%']}>
              <Heading
                as="h2"
                mt="1.5rem"
                mr={{ md: '3rem' }}
                size={isSmallerThan310 ? 'md' : ['lg']}
                w="100%"
              >
                Hello, I am Nizami
              </Heading>

              <Heading
                as="h1"
                mt={['0.4rem', '0.8rem', '2rem']}
                mb="1rem"
                size={isSmallerThan310 ? 'md' : ['xl', '2xl', '3xl', '4xl']}
                w={['100%', '100%', '100%', '50%']}
                color="transparent"
                bgGradient="linear(to-l, cyan.400, teal.400, green.300)"
                bgClip="text"
              >
                Full-Stack Developer
              </Heading>
            </Box>
          </Flex>
        </Flex>
      </header>

      <main>
        <About />
        <BoxTools />
        <ProjectsOverview />
        <Contact />
      </main>
      <footer>
        <Flex mx={6} justify="end">
          <IconButton
            aria-label="scroll to top"
            icon={<ArrowUpIcon />}
            variant="solid"
            // colorScheme="gray"
            bg={bg}
            pos="fixed"
            right="6"
            bottom="6"
            zIndex={10}
            isRound
            onClick={() => scroll.scrollToTop()}
          ></IconButton>
        </Flex>
        <Box bg="orange.300" h="80px">
          <Flex justify={{ base: 'start', md: 'center' }} w="100%" h="100%">
            <Text
              my={10}
              mx={6}
              fontSize={isSmallerThan310 ? '10px' : ['0.65rem', '0.8rem']}
              color="#1A202C"
            >
              Nizami Suleymanov - Bahnhofstrase 45 - 29525 Uelzen
            </Text>
          </Flex>
        </Box>
      </footer>
    </>
  );
};

export default Home;
