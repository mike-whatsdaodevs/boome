import { Container, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { Inter } from 'next/font/google';
import { Fragment } from 'react';
import Image from 'next/image';
import { Menu } from '@mui/icons-material';
import styles from './mobile.module.css'
import Script from 'next/script';
import { ParallaxText } from '@/components/ScrollText';
const inter = Inter({
  subsets: ['latin']
});
const block2_list = [{
  name: 'UNISWAP',
  img: '/home/block2_uniswap.png'
}, {
  name: 'COMPOUND',
  img: '/home/block2_compound.png'
}, {
  name: 'STARGATE',
  img: '/home/block2_stargate.png'
}, {
  name: 'CURVE',
  img: '/home/block2_curve.png'
}, {
  name: 'PARA',
  img: '/home/block2_para.png'
}, {
  name: 'SUSHI',
  img: '/home/block2_sushi.png'
}, {
  name: 'SPOOKYSWAP',
  img: '/home/block2_spookyswap.png'
}, {
  name: 'AAVE',
  img: '/home/block2_AAVE.png'
}, {
  name: '1INCH',
  img: '/home/block2_1inch.png'
}, {
  name: 'QUICKSWAP',
  img: '/home/block2_quickswap.png'
}, {
  name: 'MAKER',
  img: '/home/block2_maker.png'
}, {
  name: 'LIDO',
  img: '/home/block2_lido.png'
}, {
  name: 'YEARN-FINANCE',
  img: '/home/block2_yearn-finance.png'
}, {
  name: 'SYNTHETIX',
  img: '/home/block2_synthetix.png'
}]
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
      <div className={styles.firstContent}>
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
      </div>
      <div className={styles.scrollList}>
        <ParallaxText baseVelocity={-1}>
          {
            block2_list.slice(0, 7).map((item, index) => (
              <div key={index} className={styles.scrollitem}>
                <Image width={49} height={49} alt='boome' src={item.img} style={{ width: 24, height: 'auto', marginTop: '-3px' }} />
                <span color='#fff'>{item.name}</span>
              </div>
            ))
          }
        </ParallaxText>
        <ParallaxText baseVelocity={1}>
          {
            block2_list.slice(7).map((item, index) => (
              <div key={index} className={styles.scrollitem}>
                <Image width={49} height={49} alt='boome' src={item.img} style={{ width: 24, height: 'auto', marginTop: '-3px' }} />
                <span>{item.name}</span>
              </div>
            ))
          }
        </ParallaxText>

      </div>
    </Fragment>
  );
}
