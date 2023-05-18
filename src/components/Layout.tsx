import { Box, Container } from '@mui/material';
import { Navbar } from '.';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: '#cfe8fc',
            borderRadius: '8px',
            border: '1px solid #dee3e1',
          }}
        >
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default Layout;
