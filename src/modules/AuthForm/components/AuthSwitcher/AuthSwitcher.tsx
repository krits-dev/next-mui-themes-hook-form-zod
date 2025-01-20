'use client';
import { useState } from 'react';
import { Stack, Box } from '@mui/material';
import { Button } from 'components/ui/Button';
import { ButtonText } from 'constants/ui';

function AuthSwitcher() {
  const [auth, setAuth] = useState<boolean>(true);

  const handleChange = () => {
    setAuth(prev => !prev);
  };
  return (
    <Stack
      direction='row'
      gap='var(--spacing-8)'
      sx={{
        width: '100%',
        padding: 'var(--spacing-4)',
        backgroundColor: 'var(--gray-bg)',
        borderRadius: 'var(--border-radius-12)',
      }}
    >
      <Box width='50%'>
        <Button
          text={ButtonText.signin}
          containedWhite
          disabled={!auth}
          onClick={handleChange}
        />
      </Box>
      <Box width='50%'>
        <Button
          text={ButtonText.login}
          containedWhite
          disabled={auth}
          onClick={handleChange}
        />
      </Box>
    </Stack>
  );
}
export default AuthSwitcher;
