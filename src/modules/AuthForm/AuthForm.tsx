import { Stack } from '@mui/material';
import { AuthSwitcher } from './components/AuthSwitcher';
import { LoginForm } from './components/LoginForm';

function AuthForm() {
  return (
    <Stack
      flexDirection='column'
      gap={{
        xs: 'var(--spacing-32)',
        md: 'var(--spacing-52)',
        lg: 'var(--spacing-48)',
      }}
      sx={{
        height: 'auto',
        backgroundColor: 'var(--white-main)',
        border: {
          xl: '1px solid var(--gray-border)',
        },
        borderRadius: {
          lg: 'var(--border-radius-16)',
        },
        minWidth: '360px',
        width: {
          xs: '100%',
          md: '560px',
          lg: '516px',
          xl: '518px',
        },
        padding: {
          xs: 'var(--spacing-16)',
          md: 'var(--spacing-48) var(--spacing-40)',
        },
      }}
    >
      <AuthSwitcher />
      <LoginForm />
    </Stack>
  );
}
export default AuthForm;
