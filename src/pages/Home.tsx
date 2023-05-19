import { Box, Container, Divider, Typography } from '@mui/material';
import { Button } from '../components';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Home = () => {
  const [checkCaptcha, setCheckCaptcha] = React.useState<boolean>(false);
  const navagate = useNavigate();
  const onChange = (value: any) => {
    setCheckCaptcha(true);
  };
  const siteKey = import.meta.env.VITE_APP_SITE_KEY;

  return (
    <Box flex={1} flexDirection={'column'} marginTop={3} textAlign={'center'}>
      <Typography variant="h5" fontWeight={700}>
        Thank you for your interest
      </Typography>
      <Divider sx={{ my: 2 }}>
        <Typography variant="body1" fontWeight={400} fontStyle={'italic'}>
          Please read the information below
        </Typography>
      </Divider>
      <Container>
        <Typography variant="body1" fontWeight={400} marginBottom={2}>
          Once you have read and understood the information , if you agree to
          take part in the research, click on the <b>'I Agree'</b> button to
          begin the survey.
        </Typography>
        <Container>
          <Box
            sx={{
              bgcolor: '#e8e9eb',
              borderRadius: '5px',
              paddingX: 3,
              paddingY: 3,
              textAlign: 'start',
              color: '#021947',
            }}
          >
            <Box marginBottom={3}>
              <Typography
                variant="subtitle1"
                fontWeight={500}
                fontSize={'18px'}
                marginBottom={1}
              >
                Why are we asking you to take part?
              </Typography>
              <Typography variant="body1" lineHeight={1.7}>
                We would like to find out about how families use technology in
                their everyday lives. We are interested in how families use
                technology to communicate with each other, and how they use
                technology to support their children’s learning.
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography
                variant="subtitle1"
                fontWeight={500}
                fontSize={'18px'}
                marginBottom={1}
              >
                Why are we asking you to take part?
              </Typography>
              <Typography variant="body1" lineHeight={1.7}>
                We would like to find out about how families use technology in
                their everyday lives. We are interested in how families use
                technology to communicate with each other, and how they use
                technology to support their children’s learning.
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography
                variant="subtitle1"
                fontWeight={500}
                fontSize={'18px'}
                marginBottom={1}
              >
                Why are we asking you to take part?
              </Typography>
              <Typography variant="body1" lineHeight={1.7}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae porro aliquam tempora eaque eius explicabo a id?
                Consequatur sint, soluta blanditiis libero, id saepe, tempore
                rerum vel est ratione itaque. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Reiciendis, consequatur odio
                necessitatibus dolorem provident repudiandae deleniti, suscipit
                dolor ab molestias id in magni eveniet non nam enim beatae
                repellendus nihil. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Exercitationem iusto rem rerum deserunt aut
                pariatur. Tempore sed molestias rem, beatae incidunt itaque
                nobis, harum veniam delectus ex enim asperiores reiciendis!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                error non tenetur ducimus porro? Odit vero cumque aut aperiam a
                quo assumenda, maiores eum, error corrupti, culpa blanditiis
                corporis illum.
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography
                variant="subtitle1"
                fontWeight={500}
                fontSize={'18px'}
                marginBottom={1}
              >
                Why are we asking you to take part?
              </Typography>
              <Typography variant="body1" lineHeight={1.7}>
                We would like to find out about how families use technology in
                their everyday lives. We are interested in how families use
                technology to communicate with each other, and how they use
                technology to support their children’s learning.
              </Typography>
            </Box>
          </Box>
        </Container>
        <Box marginY={3}>
          {/* Capcha google */}
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={onChange}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </Box>
        <Box
          sx={{ display: 'flex', columnGap: '15px', justifyContent: 'center' }}
          marginBottom={5}
        >
          {/* button */}
          <Button>Cancel</Button>
          <Button
            reverse
            onClick={() => {
              if (!checkCaptcha) {
                return alert('Please check the captcha');
              }

              navagate('/survey');
            }}
          >
            I have read and agree with the terms of use
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
