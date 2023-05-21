import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import SurveyForm from '../components/SurveyForm';

const Survey = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <SurveyForm />
    </Container>
  );
};

export default Survey;
