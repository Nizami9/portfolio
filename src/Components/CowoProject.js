import React from 'react';
import { Image, Heading, Flex, Box, Text, Link } from '@chakra-ui/react';

const ProjectCard = () => {
  return (
    <>
      <Flex direction="row" wrap="wrap">
        <Box pr={6} w={{ md: '60%' }}>
          <Heading as="h3" color="orange.300" sx={{ 'font-style': 'italic' }}>
            Monkey Plan
          </Heading>
          <Text as="p" my={6}>
            The final project of my professional training at WBS CODING SCHOOL
            was a web application for yoga teachers. The application was
            developed within 2.5 weeks and a team of four people. Users can
            easily and quickly prepare, structure and schedule their classes.
            Content like planned classes, recurring sequences and custom
            exercises are automatically saved to be reused in later plannings.
          </Text>
          <Text as="p" my={6}>
            My part was taking over the product owner role and developing the
            dashboard, planning section, sequence storage and the back-end
            connection.
          </Text>
          <Text as="p" my={6}>
            Technologies used: <br /> HTML, SCSS, Tailwind CSS, ReactJS, NodeJS,
            ExpressJS, MongoDB
          </Text>
        </Box>
        <Box w={{ md: '40%' }} mt={{ sm: 6, md: 16 }}>
          <Link href="https://monkeyplan.ey.r.appspot.com" isExternal>
            <Image
              src="https://storage.googleapis.com/portfolioly-bucket/preview_yogalessoncreator.jpg"
              borderRadius="md"
            />
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default ProjectCard;
