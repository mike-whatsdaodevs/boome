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
                <img alt='boome' src={item.img} style={{ height: 'auto', marginTop: '-3px' }} />
                <span>{item.name}</span>
              </div>
            ))
          }
        </ParallaxText>
      </div>
      <div className={styles.title}>
        WHAT IS<br />
        <span style={{ color: '#00F600' }}> ARBITRAGE?</span>
      </div>

      <p className={styles.textContent}>
        <strong>Arbitrage</strong> involves exploiting price differences<br />
        of the sameasset in different markets or <br />
        ondifferent platforms. For example, if an asset<br />
        ispriced lower on one exchange and higher<br />
        onanother, traders can buy the asset on<br />
        thecheaper platform and sell it on the<br />
        moreexpensive one, profiting from the price <br />
        differential.<br />
        <strong>Arbitrage</strong> opportunities are often fleeting and <br />
        require quick execution tocapitalize on the <br />
        price gaps.
      </p>
      <img className={styles.rat} src={'/home/block2_rat2.png'} />

      <div className={styles.title1}>
        WHAT IS<span style={{ color: '#00F600' }}>A DEFI
          FLASH LOAN?</span>
      </div>

      <p className={styles.textContent1}>
        <strong>Flash</strong> loans are a relatively new form of<br />
        uncollateralized loans available to traders<br />
        on some decentralized finance (DeFi)<br />
        protocols based on a blockchain networks.<br />
        This type of loan allows traders to borrow<br />
        unsecured loans from lenders without<br />
        intermediaries.
      </p>
      <img className={styles.rat} src={'/home/block2_rat1.png'} />
      <div className={styles.textContainer}>
        <img className={styles.quotaImg} alt='boome' src={'/home/block2_quota1.png'} />
        <div className={styles.textContent3}>
          When a flash loan has been issued, the<br />
          smart contract rules ensure that the<br />
          borrower pays back the loan before<br />
          the transaction ends. If this condition<br />
          isn't met, the smart contract reverses<br />
          the transaction and it's like the loan<br />
          never happened in the first place.
        </div>
        <img className={styles.quotaImg1} alt='boome' src={'/home/block2_quota2.png'} />
      </div>
      <p className={styles.title3}>This guarantees the safety of the funds in the reverse pool.</p>
      <div className={styles.title1} style={{ textAlign: 'center' }}>
        FLASH LOAN <br />
        <span style={{ color: '#00F600' }}>EXAMPLE</span>
      </div>
      <div>
        <div className={styles.item1}>
          <Image className={styles.itemImg} width={385} height={301} alt='boome' src={'/home/block3_flash1.png'} />
        </div>
        <div className={styles.arrow1}>
          <Image className={styles.arrowImg} width={61} height={54} alt='boome' src={'/mobile/arrowDown.png'} />
        </div>
        <div className={styles.item1}>
          <Image className={styles.itemImg} width={385} height={301} alt='boome' src={'/home/block3_flash2.png'} />
        </div>
        <div className={styles.arrow1}>
          <Image className={styles.arrowImg} width={61} height={54} alt='boome' src={'/mobile/arrowDown.png'} />
        </div>
        <div className={styles.item1}>
          <Image className={styles.itemImg} width={385} height={301} alt='boome' src={'/home/block3_flash3.png'} />
        </div>
        <div className={styles.arrow1}>
          <Image className={styles.arrowImg} width={61} height={54} alt='boome' src={'/mobile/arrowDown.png'} />
        </div>
        <div className={styles.item1}>
          <Image className={styles.itemImg} width={385} height={301} alt='boome' src={'/home/block3_flash5.png'} />
        </div>
        <div className={styles.arrow1}>
          <Image className={styles.arrowImg} width={61} height={54} alt='boome' src={'/mobile/arrowDown.png'} />
        </div>
        <div className={styles.item1}>
          <Image className={styles.itemImg} width={385} height={301} alt='boome' src={'/home/block3_flash4.png'} />
        </div>
      </div>
      <div className={styles.title1} style={{ textAlign: 'center' }}>
        CHALLENGES IN <br />
        <span style={{ color: '#00F600' }}>ARBITRAGE</span><br />
        <span style={{ color: '#00F600' }}>&</span><br />
        <span style={{ color: '#00F600' }}>FLASH LOANS</span>
      </div>
      <div className={styles.secondContent}>
        <div className={styles.hex1}>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>Arbitrage usually
              requires capital</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>Integration with
              DeFi Protocols</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>Risk Management
              Framework</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>Seeking Expert
              Advice</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Evaluating Risk
              and Reward</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Data-Driven
              Decision Making</div>
          </div>
        </div>
        <div className={styles.hex}>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Defining the
              Arbitrage Strategy</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Rigorous Testing
              and Backtesting</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Continuous Improvement and Adaptability</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Recognizing Untapped Opportunities</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Networking and Information Gathering</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Arbitrage requires from trader knowledge andexperience</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>Some of trades can have losses or have problem with execution</div>
          </div>
        </div>
        <div className={styles.hex1}>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Smart Contract
              Developmen</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Deployment and Monitoring</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Identifying Profitable Opportunities</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Continuous Monitoring</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>Many traders offer copying their strategy and trades</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Bots which traders userequires knowledge of programming</div>
          </div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </Fragment>
  );
}
