import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Project from './Components/CowoProject';
import theme from './Theme';
import './index.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="projects/:name" element={<Project />} />
      </Routes>
    </ChakraProvider>
  );
}
