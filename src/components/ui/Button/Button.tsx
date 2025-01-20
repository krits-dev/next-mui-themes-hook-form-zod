'use client';
import {
  Button as ButtonMUI,
  CircularProgress,
  ThemeProvider,
  Theme,
} from '@mui/material';
import { ButtonTextType } from 'constants/ui';
import containedWhiteButtonTheme from './themes/containedWhiteButtonTheme';
import outlinedWhiteButtonTheme from './themes/outlinedWhiteButtonTheme';
import containedBlueButtonTheme from './themes/containedBlueButtonTheme';

interface ButtonProps {
  text: ButtonTextType;
  outlinedWhite?: boolean;
  containedWhite?: boolean;
  containedBlue?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

type variantType = 'outlined' | 'contained';

function Button({
  text,
  outlinedWhite,
  containedWhite,
  containedBlue,
  disabled,
  loading = false,
  type = 'button',
  onClick = () => {},
}: ButtonProps) {
  let variant: variantType;
  let theme: Theme;

  switch (true) {
    case outlinedWhite:
      variant = 'outlined';
      theme = outlinedWhiteButtonTheme;
      break;
    case containedWhite:
      variant = 'contained';
      theme = containedWhiteButtonTheme;
      break;
    case containedBlue:
      variant = 'contained';
      theme = containedBlueButtonTheme;
      break;
    default:
      variant = 'outlined';
      theme = outlinedWhiteButtonTheme;
      break;
  }

  return (
    <ThemeProvider theme={theme}>
      <ButtonMUI
        variant={variant}
        disableTouchRipple
        disabled={disabled}
        type={type}
        onClick={onClick}
      >
        {loading ? <CircularProgress size={24} color='inherit' /> : text}
      </ButtonMUI>
    </ThemeProvider>
  );
}

export default Button;
