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
      <Script src='/utils.js'></Script>
      <AppBar position="sticky" color="transparent" sx={{ backdropFilter: 'blur(20px)' }}>
        <Container maxWidth="sm" className={inter.className} disableGutters>
          <Toolbar>
            <Image src="/logo-mobile.png" width={200} height={32} alt="logo" />
            <Button sx={{ color: '#fff', ml: 'auto' }}>SIGN UP</Button>
            <IconButton size="small" aria-label="menu" color="primary">
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="sm" disableGutters>
        <img src="/logo3.png" style={{ width: '17.6rem', height: '2.6rem', margin: '0 auto', display: 'block' }} />
      </Container>
    </Fragment>
  );
}
