import { Box, Stack } from '@mui/material';
import { Text } from 'components/ui/Text';
import { Checkbox } from 'components/ui/Checkbox';
import Link from 'next/link';

function TermsCheckbox() {
  return (
    // flex items-center space-x-3
    <Stack direction='row' spacing='var(--spacing-12)' alignItems='center'>
      <Checkbox />
      {/* 'text-content text-gray-300 */}
      <Text fontSize='var(--font-14)' lineHeight='var(--line-height-20)'>
        I accept the{' '}
        <Link href='#' style={{ color: 'var(--blue-border)' }}>
          Therms of Use
        </Link>{' '}
        and have read
        <Box
          component='br'
          sx={{
            display: {
              xs: 'block',
              md: 'none',
            },
          }}
        />{' '}
        <Link href='#' style={{ color: 'var(--blue-border)' }}>
          Privacy Policy
        </Link>
      </Text>
    </Stack>
  );
}
export default TermsCheckbox;
