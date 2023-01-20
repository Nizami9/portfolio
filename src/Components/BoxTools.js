import React from 'react';
import { Grid, Text, Heading, Flex, GridItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGitAlt,
  faGithub,
  faNodeJs,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

const techStack = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3 },
  { name: 'JavaScript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'Git', icon: faGitAlt },
  { name: 'GitHub', icon: faGithub },
  { name: 'NodeJS', icon: faNodeJs },
  { name: 'Figma', icon: faFigma },
  { name: 'Responsive Websites', icon: faMobileScreenButton },
];

const BoxTools = () => {
  return (
    <>
      <Flex
        maxW="960px"
        mx="auto"
        id="skills"
        direction="row"
        align="center"
        justify="center"
      >
        <Flex
          w="100%"
          mx={6}
          py={16}
          borderTop="1px"
          borderColor="white"
          direction="column"
        >
          <Heading as="h2" size="2xl">
            My Toolbox
          </Heading>
          <Flex
            direction="row"
            justify="center"
            align="stretch"
            mt={8}
            bgGradient="linear(to-tl, cyan.400, transparent, purple.300)"
            borderRadius="md"
          >
            <Grid
              templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
              gap={4}
              my={8}
              maxW={{ base: '90%', sm: '400px' }}
            >
              {techStack.map(skill => (
                <GridItem key={skill.name}>
                  <Flex
                    w="100%"
                    h="100%"
                    direction="column"
                    align="center"
                    justify="center"
                  >
                    <FontAwesomeIcon
                      icon={skill.icon}
                      size="4x"
                      color="white"
                    />
                    <Text
                      fontSize="md"
                      color="white"
                      textAlign={'center'}
                      pt={1}
                    >
                      {skill.name}
                    </Text>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default BoxTools;
