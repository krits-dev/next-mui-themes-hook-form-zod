import { Stack, Box } from '@mui/material';
import { Header } from 'components/page/Header';
import { Footer } from 'components/page/Footer';
import { Title } from 'components/ui/Title';
import { Text } from 'components/ui/Text';
import Image from 'next/image';
import authBackground from 'assets/images/auth-background.png';
import { LoginPage } from 'constants/pages';

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack direction='row' sx={{ minHeight: '100vh' }}>
      {/* Left side */}
      <Box
        sx={{
          width: { xs: '100%', lg: '50%' },
          backgroundColor: { lg: 'var(--gray-bg)' },
        }}
      >
        <Stack
          direction='column'
          sx={{
            width: '100%',
            height: '100%',
            marginLeft: { lg: 'auto' },
            maxWidth: { lg: '604px', xl: '850px' },
          }}
        >
          <Header />
          <Stack
            sx={{
              width: '100%',
              flexGrow: '1',
              justifyContent: { lg: 'center', xs: 'start' },
              alignItems: { md: 'center', lg: 'end' },
              paddingRight: { lg: 'var(--spacing-64)', xl: '166px' },
            }}
          >
            {children}
          </Stack>
          <Footer />
        </Stack>
      </Box>

      {/* Right side */}
      <Box
        sx={{
          width: '50%',
          position: 'relative',
          paddingLeft: 'var(--spacing-64)',
          display: { xs: 'none', lg: 'block' },
        }}
      >
        <Image
          alt='authentication background'
          src={authBackground}
          quality={100}
          fill
          priority
          sizes='100vh'
          style={{
            objectFit: 'cover',
          }}
        />
        <Title titleText={LoginPage.title} />
        <Text
          fontSize='var(--font-16)'
          lineHeight='var(--line-height-24)'
          color='var(--white-main)'
          sx={{ position: 'relative' }}
        >
          {LoginPage.text.row1}
          <br />
          {LoginPage.text.row2}
        </Text>
      </Box>
    </Stack>
  );
}

export default AuthLayout;
