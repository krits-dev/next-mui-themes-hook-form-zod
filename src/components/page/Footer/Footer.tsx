import { Box, Stack } from '@mui/material';
import { Text } from 'components/ui/Text';
import Link from 'next/link';

function Footer() {
  const copyright = '© 2024 mind money limited';

  return (
    <Box
      component='footer'
      sx={{
        display: {
          xs: 'none',
          md: 'block',
        },
        padding: {
          md: 'var(--spacing-32) var(--spacing-24)',
          lg: 'var(--spacing-64) var(--spacing-64) var(--spacing-64) var(--spacing-24)',
          xl: 'var(--spacing-64) var(--spacing-32)',
        },
      }}
    >
      <Stack
        direction='row'
        justifyContent='space-between '
        alignItems='center'
      >
        <Text fontSize='var(--font-14)' lineHeight='var(--line-height-20)'>
          {copyright.toUpperCase()}
        </Text>
        <Text
          fontSize='var(--font-14)'
          lineHeight='var(--line-height-20)'
          sx={{ textAlign: 'right' }}
        >
          Have some issue?
          <Box
            component='br'
            sx={{
              display: { xs: 'none', lg: 'block', xl: 'none' },
            }}
          />{' '}
          Wrote us{' '}
          <Link href='#' style={{ color: 'var(--blue-border)' }}>
            info@mind-money.eu
          </Link>
        </Text>
      </Stack>
    </Box>
  );
}
export default Footer;
