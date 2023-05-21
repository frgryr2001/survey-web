import { Box, TextField } from '@mui/material';
import React, { FC } from 'react';

interface TextInputProps {
  questionId: number;
}

const TextInput: FC<TextInputProps> = ({ questionId }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        multiline
        maxRows={4}
        minRows={4}
        style={{ width: '100%' }}
      />
    </Box>
  );
};

export default TextInput;
