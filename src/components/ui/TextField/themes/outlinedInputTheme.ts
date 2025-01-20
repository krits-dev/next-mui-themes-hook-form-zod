'use client';
import { createTheme } from '@mui/material/styles';
import baseTheme from 'assets/themes/baseTheme';

const outlinedInputTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },

    // Label
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--font-16)',
          fontWeight: '400',
          lineHeight: 'var(--line-height-24)',
          color: 'var(--gray-text)',
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&.Mui-error': {
            color: 'var(--red-error)',
          },

          [baseTheme.breakpoints.down('md')]: {
            fontSize: 'var(--font-14)',
            lineHeight: 'var(--line-height-20)',
            transform: 'translate(var(--spacing-16), var(--spacing-14))',
          },
          '&.Mui-focused': {
            fontSize: 'var(--font-12)',
            lineHeight: 'var(--line-height-16)',
            color: 'var(--gray-text)',
            transform: 'translate(var(--spacing-16), var(--spacing-6))',
            '&.Mui-error': {
              color: 'var(--red-error)',
            },
          },
          '&.MuiFormLabel-filled': {
            fontSize: 'var(--font-12)',
            lineHeight: 'var(--line-height-16)',
            color: 'var(--gray-text)',
            transform: 'translate(var(--spacing-16), var(--spacing-6))',
            '&.Mui-error': {
              color: 'var(--red-error)',
            },
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // Input
          '& .MuiOutlinedInput-input': {
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--font-16)',
            fontWeight: '400',
            lineHeight: 'var(--line-height-24)',
            color: 'var(--black-text)',
            padding:
              'var(--spacing-26) var(--spacing-16) var(--spacing-6) var(--spacing-16)',
            height: 'var(--line-height-24)',

            [baseTheme.breakpoints.down('md')]: {
              fontSize: 'var(--font-14)',
              lineHeight: 'var(--line-height-20)',
              height: '20px',
              padding:
                'var(--spacing-23) var(--spacing-16) var(--spacing-5) var(--spacing-16)',
            },
          },

          // Border
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid var(--gray-border)',
            borderRadius: 'var(--border-radius-8)',
          },

          // Border(hovered)
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--gray-border)',
          },
          // Border(focused)
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid var(--blue-border)',
          },
          // Border(error)
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--red-error)',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          // Helper text
          marginLeft: 0,
          fontSize: 'var(--font-12)',
          lineHeight: 'var(--line-height-16)',
          '&.Mui-error': {
            color: 'var(--red-error)',
          },
        },
      },
    },
  },
});

export default outlinedInputTheme;
