import { ReactNode } from 'react';
import { Icon } from './components';
import { Box, Stack } from '@mui/material';
import { isEmail, normalizeString } from 'assets/utils';
import { Text } from 'components/ui/Text';

export const PasswordMessages = {
  required: 'Enter password',
  email: 'Can’t contain e-mail address',
  characters: 'At least 8 characters',
  number: 'Contains a number or(and) symbol',
  capitalized: 'One or more capitalized letter',
} as const;

interface ValidationProps {
  passwordValue: string;
  watchedEmailValue: string;
  error: boolean;
}

function Validation({
  passwordValue,
  watchedEmailValue,
  error,
}: ValidationProps) {
  const isEmailValid =
    isEmail(watchedEmailValue) &&
    !normalizeString(passwordValue).includes(
      normalizeString(watchedEmailValue.split('@')[0])
    );

  const isCharactersValid = passwordValue.length >= 8;
  const isNumberValid = /[\d\W_]/.test(passwordValue);
  const isCapitalizedValid = /[A-Z]/.test(passwordValue);

  const passwordRules = [
    {
      message: PasswordMessages.email,
      isValid: isEmailValid,
    },
    {
      message: PasswordMessages.characters,
      isValid: isCharactersValid,
    },
    {
      message: PasswordMessages.number,
      isValid: isNumberValid,
    },
    {
      message: PasswordMessages.capitalized,
      isValid: isCapitalizedValid,
    },
  ];

  const isValidPassword = passwordRules.every(rule => rule.isValid);

  let passwordStrength: ReactNode;
  if (passwordValue?.length === 0) {
    passwordStrength = '';
  } else if (passwordValue?.length > 0 && !isValidPassword) {
    passwordStrength = (
      <Text span color='var(--red-error)'>
        Weak password :(
      </Text>
    );
  } else if (passwordValue?.length > 0 && isValidPassword) {
    passwordStrength = (
      <Text span color='var(--green-success)'>
        Strong password :)
      </Text>
    );
  }

  return (
    <Box
      sx={{
        width: '100%',
        paddingTop: 'var(--spacing-4)',
      }}
    >
      <Text sx={{ paddingBottom: 'var(--spacing-8)' }}>
        {!error ? (
          <>Password strength: {passwordStrength}</>
        ) : (
          <Text span color='var(--red-error)'>
            {PasswordMessages.required}
          </Text>
        )}
      </Text>

      {passwordRules?.map(rule => {
        const textColor =
          passwordValue?.length === 0
            ? 'var(--gray-text)'
            : !rule.isValid
            ? 'var(--red-error)'
            : 'var(--green-success)';
        return (
          <Stack direction='row' gap='var(--spacing-8)' key={rule.message}>
            <Icon isValid={rule.isValid} passwordValue={passwordValue} />
            <Text span color={textColor}>
              {rule.message}
            </Text>
          </Stack>
        );
      })}
    </Box>
  );
}

export default Validation;
