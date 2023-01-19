import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import ProjectCard from './CowoProject';

const ProjectsOverview = () => {
  return (
    <>
      <Flex
        maxW="960px"
        mx="auto"
        id="projectsOverview"
        direction="row"
        align="center"
        justify="center"
      >
        <Flex
          w="100%"
          mx={6}
          py={16}
          borderTop="1px"
          borderColor="orange.300"
          direction="column"
        >
          <Heading as="h2" size="2xl">
            My Projects
          </Heading>
          <Box mt={16}>
            <ProjectCard />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ProjectsOverview;
