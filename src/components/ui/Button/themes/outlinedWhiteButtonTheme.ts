'use client';
import { createTheme } from '@mui/material/styles';

const outlinedWhiteButtonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-primary)',
          fontWeight: '600',
          fontSize: 'var(--font-12)',
          lineHeight: 'var(--line-height-16)',
          color: 'var(--black-text)',
          border: '1px solid var(--gray-text)',
          borderRadius: 'var(--border-radius-8)',
          textTransform: 'none',
          padding: 'var(--spacing-7) var(--spacing-12)',
          letterSpacing: '-0.1px',
          backgroundColor: 'var(--white-main)',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&:active': {
            top: '1px',
          },
        },
      },
    },
  },
});

export default outlinedWhiteButtonTheme;
