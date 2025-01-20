'use client';
import { createTheme } from '@mui/material/styles';

const containedWhiteButtonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
          fontFamily: 'var(--font-primary)',
          fontWeight: '500',
          fontSize: 'var(--font-16)',
          lineHeight: 'var(--line-height-24)',
          color: 'var(--black-text)',
          borderRadius: 'var(--border-radius-12)',
          textTransform: 'none',
          paddingTop: 'var(--spacing-8)',
          paddingBottom: 'var(--spacing-8)',
          boxShadow: 'none',
          backgroundColor: 'var(--white-main)',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:disabled': {
            backgroundColor: 'var(--gray-bg)',
            color: 'var(--gray-text)',
          },
        },
      },
    },
  },
});

export default containedWhiteButtonTheme;
