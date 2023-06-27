import Works from './Woks';
import Home from './Home';
import Gallery from './Gallery';
import Posts from './Posts';
import NavBar from '../components/NavBar'
import { Box, Container, Image } from '@chakra-ui/react'
import Footer from '../components/footer'
import VoxelDogLoader from '../components/voxel-dog-loader'




import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react'

function App() {
  return (
  <ChakraProvider theme={theme}>
        <Router>
        <Box as="main" pb={8}>


      <NavBar />

      <Container maxW="container.md" pt={14}>
        {/* <VoxelDogLoader /> */}
        {/* <Image
    src={'https://images.unsplash.com/photo-1484291470158-b8f8d608850d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
  /> */}
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/posts" element={<Posts />} />
        </Routes>



        <Footer />
      </Container>
    </Box>













        


        </Router>
    </ChakraProvider>
  );
}
export default App;
