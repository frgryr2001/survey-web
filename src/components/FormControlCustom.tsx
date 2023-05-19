import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { FC, useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface FormControlCustomProps {
  answer?: string[];
}

export const FormControlCustom: FC<FormControlCustomProps> = ({ answer }) => {
  const [valueChoice, setValueChoice] = useState<string>('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueChoice(event.target.value);
  };
  return (
    <FormControl sx={{ m: 3, width: '100%' }} variant="standard">
      <RadioGroup name="quiz" onChange={handleRadioChange}>
        {answer?.map((item, index) => {
          return (
            <FormControlLabel
              key={index + item}
              value={item}
              control={
                <Radio
                  checkedIcon={<CheckCircleIcon style={{ color: '#021947' }} />}
                  sx={{
                    '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
                      {
                        color: valueChoice === item ? '#021947' : '#f0eeeb',
                      },
                    '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
                      color: 'blue',
                    },
                  }}
                />
              }
              label={item}
              style={{
                border: `1px solid ${
                  valueChoice === item ? '#021947' : '#ccc'
                } `,
                borderRadius: '5px',
                padding: '10px',
                width: '100%',
                color: valueChoice === item ? '#021947' : '#ccc',
                marginBottom: '10px',
              }}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
