import Button from '@mui/material/Button';
import { FC } from 'react';

interface ButtonCustomProps {
  children: React.ReactNode;
  disabled?: boolean;
  reverse?: boolean;

  onClick?: () => void;
}

const ButtonCustom: FC<ButtonCustomProps> = ({
  children,
  disabled = false,
  reverse,
  onClick,
}) => {
  return (
    <Button
      variant={reverse ? 'contained' : 'outlined'}
      disableElevation
      disabled={disabled}
      size="large"
      onClick={onClick}
      sx={{
        color: reverse ? '#fff' : '#021947',
        borderColor: reverse ? '#fff' : '#021947',
        bgcolor: reverse ? '#021947' : '#fff',
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonCustom;
