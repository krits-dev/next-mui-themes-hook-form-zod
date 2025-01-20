import { Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import logo from 'assets/images/logo.svg';
import LogoMobile from 'assets/images/logo-mobile.svg';

function Logo() {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          width: '238px',
          height: '44px',
        }}
      >
        <Link href='#'>
          <Image src={logo} alt='mind-money logo' />
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          width: '146px',
          height: '32px',
        }}
      >
        <Link href='#'>
          <Image src={LogoMobile} alt='mind-money logo' />
        </Link>
      </Box>
    </>
  );
}
export default Logo;
