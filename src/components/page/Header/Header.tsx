import { Box } from '@mui/material';
import { Logo } from 'components/page/Logo';

function Header() {
  return (
    <Box
      component='header'
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: {
          xs: 'var(--spacing-20) var(--spacing-16)',
          md: 'var(--spacing-14) var(--spacing-24)',
          lg: 'var(--spacing-24) var(--spacing-24)',
          xl: 'var(--spacing-24) var(--spacing-32)',
        },
      }}
    >
      <Logo />
    </Box>
  );
}
export default Header;
