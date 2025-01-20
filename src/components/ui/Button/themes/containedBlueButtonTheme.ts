'use client';
import { createTheme } from '@mui/material/styles';

const containedBlueButtonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100%',
          fontFamily: 'var(--font-primary)',
          fontWeight: '600',
          fontSize: 'var(--font-16)',
          lineHeight: 'var(--line-height-24)',
          color: 'var(--white-main)',
          borderRadius: 'var(--border-radius-8)',
          textTransform: 'none',
          paddingTop: 'var(--spacing-12)',
          paddingBottom: 'var(--spacing-12)',
          boxShadow: 'none',
          backgroundColor: 'var(--blue-border)',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:disabled': {
            backgroundColor: 'var(--blue-disabled)',
            color: 'var(--white-main)',
          },
          '&:active': {
            top: '1px',
          },
        },
      },
    },
  },
});

export default containedBlueButtonTheme;
