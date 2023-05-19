import { Box, CircularProgress, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems={'center'}
      height="calc(100vh - 200px)"
      flexDirection={'column'}
    >
      <Typography sx={{ mb: 3 }} variant="h4" fontWeight={200}>
        Loading...
      </Typography>
      <CircularProgress thickness={2} />
    </Box>
  );
};

export default Loading;
