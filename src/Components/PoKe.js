import React from 'react';
import { Image, Heading, Flex, Box, Text, Link } from '@chakra-ui/react';
import CoWo from "../Images/CoWo.jpeg";
import PoKe from "../Images/PoKe.jpeg";
const ProjectCard = () => {
  return (
    <>
      <Flex direction="row" wrap="wrap">
        <Box pr={6} w={{ md: '60%' }}>
        <Heading as="h3">
            <button className='button'>
              <span className='actual-text'>
              Pokemon-Fight</span>
              <span className='hover-text' aria-hidden='true'>
              Pokemon-Fight</span></button>
          </Heading>
          <Text as="p" my={6}>
            Lorem Ipsum
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
          <Link href="https://pokemon-fight-nizami.netlify.app/" isExternal>
            <Image
              src={PoKe}
              borderRadius="md"
            />
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default ProjectCard;
