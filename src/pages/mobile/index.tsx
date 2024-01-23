import { Container, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { Inter } from 'next/font/google';
import { Fragment } from 'react';
import Image from 'next/image';
import { Menu } from '@mui/icons-material';
import styles from './mobile.module.css'
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
          <Toolbar className={styles.toolBar}>
            <img src="/mobile/logo-mobile.png" className={styles.headerLogo} alt="logo" />
            <div>
              <Button className={styles.headerBtn}>SIGN UP</Button>
              <IconButton size="small" aria-label="menu" sx={{ color: '#fff' }}>
                <Menu />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={styles.bannerContent}>
        <img src="/mobile/logo2.png" objectFit="contain" className={styles.bannerContentImg} />
      </div>
      <div className={styles.btnsContainer}>

        <div className={styles.btnContent}>
          <img className={styles.btnContentImg} width={50} height={50} alt='boome' src={'/home/block1_openai.png'} />
          <span className={styles.btnContentText}>OpenAI</span>
        </div>
        <div className={styles.btnContent} style={{ marginLeft: '0.89rem' }}>
          <img className={styles.btnContentImg} width={50} height={50} alt='boome' src={'/home/block1_bard.png'} />
          <span className={styles.btnContentText}>Bard</span>
        </div>
        <div className={styles.btnContent} style={{ marginLeft: '0.89rem' }}>
          <img className={styles.btnContentImg} width={50} height={50} alt='boome' src={'/home/block1_gemini.png'} />
          <span className={styles.btnContentText}>GEMINI</span>
        </div>
      </div>
      <img src="/mobile/textLogo.png" className={styles.textLogo} alt="" />
    </Fragment>
  );
}
