import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import { FormControlCustom } from './FormControlCustom';
import MultipleSelectCheckmarks from './SelectInput';

// import seedData
import seedData from '../seedData/seed.json';
import TextInput from './TextInput';
import ButtonCustom from './Button';

const SurveyForm = () => {
  // every 1 question will be a component show in here not show all
  const [questionCount, setQuestionCount] = React.useState<number>(0);
  const [answer, setAnswer] = React.useState<string[]>([]);

  const handleNextQuestion = () => {
    setQuestionCount((prev) => prev + 1);
  };

  const handlePrevQuestion = () => {
    setQuestionCount((prev) => prev - 1);
  };

  // const handleAnswer = (value: string) => {
  //     setAnswer((prev) => [...prev, value]);
  // };

  return (
    <>
      <Box
        flex={1}
        marginTop={3}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box>
          <Link
            style={{ cursor: 'pointer', textDecoration: 'none', color: '#333' }}
            onClick={handlePrevQuestion}
          >
            {' '}
            &larr; Back
          </Link>
        </Box>

        <Box border={'1px solid #ccc'} display={'inline-block'} padding={1}>
          <Typography variant="subtitle1">
            <b>
              {questionCount < 10 ? `0${questionCount + 1}` : questionCount + 1}
            </b>
            /{seedData.length < 10 ? `0${seedData.length}` : seedData.length}
          </Typography>
        </Box>
      </Box>
      {seedData.map((item, index) => {
        if (questionCount === index) {
          return (
            <Box key={index + '' + item}>
              <Typography variant="h4" fontWeight={500} textAlign={'center'}>
                {item.question}
              </Typography>
              {/* create 3 option answer by MUI */}
              <Box>
                {item.questionType === 'multipleChoice' && (
                  <FormControlCustom answer={item.answer || []} />
                )}
                {item.questionType === 'selectCheckBox' && (
                  <MultipleSelectCheckmarks data={item.answer} />
                )}
                {item.questionType === 'textInput' && <TextInput />}
              </Box>
              <Box display={'flex'} justifyContent={'center'} marginBottom={2}>
                <ButtonCustom reverse onClick={handleNextQuestion}>
                  Continue
                </ButtonCustom>
              </Box>
            </Box>
          );
        }
      })}
    </>
  );
};

export default SurveyForm;
