import React from 'react';
import {
  Heading,
  Text,
  IconButton,
  ButtonGroup,
  Link,
  Flex,
  Box,
  Button,
  Image,
  Show,
} from '@chakra-ui/react';
import Obfuscate from 'react-obfuscate';
import batman from "../Images/batman.png";
// Icons
import { EmailIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faDiscord,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const contactOptions = [
    {
      option: 'LinkedIn',
      reactIcon: faLinkedinIn,
      href: 'https://www.linkedin.com/in/nizamisuleymanov/',
      aria: 'view LinkedIn profile',
    },
    {
      option: 'GitHub',
      reactIcon: faGithub,
      href: 'https://www.github.com/Nizami9',
      aria: 'view GitHub profile',
    },
    {
      option: 'Instagram',
      reactIcon: faInstagram,
      href: 'https://www.instagram.com/nizami_sov',
      aria: 'view instagram profile',
    },
  ];

  return (
    <>
      <Flex
        maxW="960px"
        mx="auto"
        id="contact"
        direction="row"
        align="center"
        justify="center"
      >
        <Flex
          w="100%"
          mx={6}
          pt={16}
          direction="column"
          borderTop="1px"
          borderColor="white"
        >
          <Heading as="h2" size="2xl">
            Get In Touch
          </Heading>
          <Flex direction="row">
            <Box>
              <Text py={1} mt={6} maxW="600px">
                Dropping a line to say "hello", get connected on social media or
                see if we can build something amazing together? I’d love to hear
                from you!
              </Text>

              <Flex justify="start">
                <ButtonGroup spacing="16px" my={12}>
                  <Obfuscate
                    email="nizami.suleymanoff@gmail.com"
                    headers={{
                      subject: 'Nice portfolio',
                      body: 'Hi Nizami, ...',
                    }}
                  >
                    <IconButton
                      variant="outline"
                      colorScheme="cyan"
                      aria-label="send email"
                      icon={<EmailIcon />}
                      p={2}
                      cursor="pointer"
                    />
                  </Obfuscate>
                  {contactOptions.map(option => (
                    <Link key={option.option} href={option.href} isExternal>
                      <Button
                        variant="outline"
                        aria-label={option.aria}
                        p={2}
                        cursor="pointer"
                        colorScheme="cyan"
                      >
                        <FontAwesomeIcon icon={option.reactIcon} size="lg" />
                      </Button>
                    </Link>
                  ))}
                </ButtonGroup>
              </Flex>
            </Box>
            <Show above="md">
              <Image
                src={batman}
                alt="illustration of a bird"
                align="center"
                maxW="250px"
              />
            </Show>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Contact;
