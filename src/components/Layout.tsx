import { Box, Container } from '@mui/material';
import { Footer, Navbar } from '.';
import { Outlet } from 'react-router-dom';
import Loading from './Loading';

const Layout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{ marginBottom: '50px', minHeight: '100vh' }}
      >
        <Box
          sx={{
            borderRadius: '5px',
            border: '1px solid #dee3e1',
            marginTop: '100px',
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              maxWidth: '800px',
            }}
          >
            <Outlet />
          </Container>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
