'use client';
import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  cssVariables: true,

  typography: {
    fontFamily: 'var(--font-primary)',
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 768,
      lg: 1440,
      xl: 1920,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '--spacing-2': '2px',
          '--spacing-4': '4px',
          '--spacing-5': '5px',
          '--spacing-6': '6px',
          '--spacing-7': '7px',
          '--spacing-8': '8px',
          '--spacing-12': '12px',
          '--spacing-14': '14px',
          '--spacing-16': '16px',
          '--spacing-20': '20px',
          '--spacing-23': '23px',
          '--spacing-24': '24px',
          '--spacing-26': '26px',
          '--spacing-32': '32px',
          '--spacing-40': '40px',
          '--spacing-48': '48px',
          '--spacing-52': '52px',
          '--spacing-64': '64px',

          '--border-radius-8': '8px',
          '--border-radius-12': '12px',
          '--border-radius-16': '16px',

          '--font-12': '12px',
          '--font-14': '14px',
          '--font-16': '16px',
          '--font-40': '40px',

          '--line-height-16': '16px',
          '--line-height-20': '20px',
          '--line-height-24': '24px',
          '--line-height-52': '52px',

          '--gray-text': '#a6abb0',
          '--gray-border': '#dcdee0',
          '--gray-bg': '#f4f4f4',

          '--white-main': '#ffffff',
          '--red-error': '#ef4e57',
          '--black-text': '#101112',
          '--green-success': '#51d85e',

          '--blue-border': '#526ed3',
          '--blue-disabled': '#a1b1e7',
        },
      },
    },
  },
});

export default baseTheme;
