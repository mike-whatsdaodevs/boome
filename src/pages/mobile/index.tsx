import { Container, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { Inter } from 'next/font/google';
import { Fragment } from 'react';
import Image from 'next/image';
import { Menu } from '@mui/icons-material';
import Script from 'next/script';
const inter = Inter({
  subsets: ['latin']
});

export default function Mobile() {
  return (
    <Fragment>
      <Script src='/utils.js' strategy="beforeInteractive"></Script>
      <AppBar position="fixed" color="transparent" sx={{ backdropFilter: 'blur(20px)' }}>
        <Container maxWidth="sm" className={inter.className} disableGutters>
          <Toolbar>
            <Image src="/mobile/logo-mobile.png" width={100} height={32} alt="logo" />
            <Button sx={{ color: '#fff', ml: 'auto', fontFamily: 'Arial Rounded MT Bold' }}>SIGN UP</Button>
            <IconButton size="small" aria-label="menu" sx={{ color: '#fff' }}>
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="sm" disableGutters sx={{ position: 'relative', height: 834, overflow: 'hidden' }}>
        <Image src="/mobile/banner.png" objectFit="contain" width={600} height={834} alt="banner" style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }} />
        <img src="/mobile/logo3.png" style={{ width: '17.6rem', height: '2.6rem', margin: '8rem auto 0', display: 'block', position: 'relative', zIndex: 2 }} />
      </Container>
    </Fragment>
  );
}
