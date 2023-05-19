import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FormControlCustom } from '../components/FormControlCustom';
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
