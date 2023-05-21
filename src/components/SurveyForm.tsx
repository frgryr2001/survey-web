import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import { FormControlCustom } from './FormControlCustom';
import MultipleSelectCheckmarks from './SelectInput';
import TextInput from './TextInput';
import ButtonCustom from './Button';
import seedData from '../seedData/seed.json';

const SurveyForm = () => {
  const [questionCount, setQuestionCount] = React.useState<number>(0);

  const handleNextQuestion = () => {
    setQuestionCount((prev) => prev + 1);
  };

  const handlePrevQuestion = () => {
    setQuestionCount((prev) => prev - 1);
  };

  return (
    <>
      <Box
        flex={1}
        marginTop={3}
        display={'flex'}
        justifyContent={questionCount > 0 ? 'space-between' : 'flex-end'}
        alignItems={'center'}
      >
        {
          // if questionCount > 0 then show button prev
          questionCount > 0 && (
            <Box>
              <Link
                style={{
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: '#333',
                }}
                onClick={handlePrevQuestion}
              >
                {' '}
                &larr; Back
              </Link>
            </Box>
          )
        }

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
                  <FormControlCustom
                    answer={item.answer || []}
                    questionId={item.id}
                  />
                )}
                {item.questionType === 'selectCheckBox' && (
                  <MultipleSelectCheckmarks
                    data={item.answer}
                    questionId={item.id}
                  />
                )}
                {item.questionType === 'textInput' && (
                  <TextInput questionId={item.id} />
                )}
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
