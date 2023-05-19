import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';
const Navbar = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const hoverStyle = {
    opacity: 1,
  };

  return (
    <AppBar sx={{ bgcolor: '#08285c' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Link to={'/'} style={{ textDecoration: 'none', color: '#fff' }}>
            <Typography variant="h6" textTransform={'uppercase'}>
              Families using technology survey
            </Typography>
          </Link>
          <Box flex={1} />
          <Link
            to={'/test'}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              textDecoration: 'none',
              color: '#fff',
              opacity: 0.5,
              display: 'flex',
              alignItems: 'center',
              ...(isHover && hoverStyle),
            }}
          >
            <Typography variant="subtitle1" textTransform={'uppercase'}>
              I have changed my mind
            </Typography>
            <KeyboardArrowRightIcon style={{ marginLeft: '5px' }} />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
