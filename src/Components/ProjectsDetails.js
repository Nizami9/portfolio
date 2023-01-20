import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import CowoProject from './CowoProject';
import PoKe from './PoKe';
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
          borderColor="white"
          direction="column"
        >
          <Heading as="h2" size="2xl">
            My Projects
          </Heading>
          <Box mt={16}>
            <CowoProject />
            <PoKe />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default ProjectsOverview;
