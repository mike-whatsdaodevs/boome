import { Container, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { Inter } from 'next/font/google';
import { Fragment } from 'react';
import Image from 'next/image';
import { Menu } from '@mui/icons-material';

const inter = Inter({
  subsets: ['latin']
});

export default function Mobile() {
  return (
    <Fragment>
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
        <Image src="/boomer.gif" objectFit="contain" alt="boomer" />
      </Container>
    </Fragment>
  );
}
