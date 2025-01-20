import { Box } from '@mui/material';
import { AuthForm } from 'modules/AuthForm';

function Login() {
  return (
    <Box component='section' aria-label='authentication form'>
      <AuthForm />
    </Box>
  );
}
export default Login;
