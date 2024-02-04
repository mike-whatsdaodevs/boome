import { Container, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { Inter } from 'next/font/google';
import { Fragment } from 'react';
import Image from 'next/image';
import { Menu } from '@mui/icons-material';
import styles from './mobile.module.css';
import Script from 'next/script';
import { ParallaxText } from '@/components/ScrollText';
import { useState } from 'react';
const inter = Inter({
  subsets: ['latin'],
});
const flash_list = [
  {
    name: 'AAVE',
    img: '/home/block7_logo1.png',
  },
  {
    name: 'RADIANT',
    img: '/home/block7_logo2.png',
  },
  {
    name: 'DYDX',
    img: '/home/block7_logo3.png',
  },
  {
    name: 'UNISWAP',
    img: '/home/block7_logo4.png',
  },
];

const decentralized_list = [
  {
    name: 'UNISWAP',
    img: '/home/block8_logo1.png',
  },
  {
    name: 'PANCAKESWAP',
    img: '/home/block8_logo2.png',
  },
  {
    name: 'SUSHI',
    img: '/home/block8_logo3.png',
  },
  {
    name: 'CURVE',
    img: '/home/block8_logo4.png',
  },
  {
    name: 'BALANCER',
    img: '/home/block8_logo5.png',
  },
  {
    name: 'DODO',
    img: '/home/block8_logo6.png',
  },
  {
    name: 'APE',
    img: '/home/block8_logo7.png',
  },
  {
    name: 'WOOFI',
    img: '/home/block8_logo8.png',
  },
  {
    name: 'HASHFLOW',
    img: '/home/block8_logo9.png',
  },
  {
    name: 'PANGOLIN',
    img: '/home/block8_logo10.png',
  },
  {
    name: 'SPOOKYSWAP',
    img: '/home/block8_logo11.png',
  },
  {
    name: 'BISWAP',
    img: '/home/block8_logo12.png',
  },
  {
    name: 'QUICKSWAP',
    img: '/home/block8_logo13.png',
  },
  {
    name: 'GMX',
    img: '/home/block8_logo14.png',
  },
  {
    name: 'ORCA',
    img: '/home/block8_logo15.png',
  },
  {
    name: 'CLIPPER-DEX',
    img: '/home/block8_logo16.png',
  },
  {
    name: 'TRADER-JOE',
    img: '/home/block8_logo17.png',
  },
  {
    name: 'TRISOLARIS',
    img: '/home/block8_logo18.png',
  },
];

const wallets_list = [
  {
    name: 'trust Wallet',
    img: '/home/block9_logo1.png',
  },
  {
    name: 'Metamask',
    img: '/home/block9_logo2.png',
  },
  {
    name: 'Wallet Connect',
    img: '/home/block9_logo3.png',
  },
  {
    name: 'Rainbow',
    img: '/home/block9_logo4.png',
  },
];

const aggragators_list = [
  {
    name: 'Paraswap',
    img: '/home/block10_logo1.png',
  },
  {
    name: 'Paraswap',
    img: '/home/block10_logo2.png',
  },
  {
    name: '0x',
    img: '/home/block10_logo3.png',
  },
  {
    name: 'Openocean',
    img: '/home/block10_logo4.png',
  },
];

const block2_list = [
  {
    name: 'UNISWAP',
    img: '/home/block2_uniswap.png',
  },
  {
    name: 'COMPOUND',
    img: '/home/block2_compound.png',
  },
  {
    name: 'STARGATE',
    img: '/home/block2_stargate.png',
  },
  {
    name: 'CURVE',
    img: '/home/block2_curve.png',
  },
  {
    name: 'PARA',
    img: '/home/block2_para.png',
  },
  {
    name: 'SUSHI',
    img: '/home/block2_sushi.png',
  },
  {
    name: 'SPOOKYSWAP',
    img: '/home/block2_spookyswap.png',
  },
  {
    name: 'AAVE',
    img: '/home/block2_AAVE.png',
  },
  {
    name: '1INCH',
    img: '/home/block2_1inch.png',
  },
  {
    name: 'QUICKSWAP',
    img: '/home/block2_quickswap.png',
  },
  {
    name: 'MAKER',
    img: '/home/block2_maker.png',
  },
  {
    name: 'LIDO',
    img: '/home/block2_lido.png',
  },
  {
    name: 'YEARN-FINANCE',
    img: '/home/block2_yearn-finance.png',
  },
  {
    name: 'SYNTHETIX',
    img: '/home/block2_synthetix.png',
  },
];
export default function Mobile() {
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <Script src="/utils.js" strategy="beforeInteractive"></Script>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ backdropFilter: 'blur(20px)' }}
      >
        <Container maxWidth="sm" className={inter.className} disableGutters>
          <Toolbar className={styles.toolBar}>
            <img
              src="/mobile/logo-mobile.png"
              className={styles.headerLogo}
              alt="logo"
            />
            <div>
              <Button className={styles.headerBtn}>Launch App</Button>
              <IconButton size="small" aria-label="menu" sx={{ color: '#fff' }}>
                <Menu />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={styles.firstContent}>
        <div className={styles.bannerContent}>
          <img
            src="/mobile/logo2.png"
            objectFit="contain"
            className={styles.bannerContentImg}
          />
        </div>
        <div className={styles.btnsContainer}>
          <div className={styles.btnContent}>
            <img
              className={styles.btnContentImg}
              width={50}
              height={50}
              alt="boome"
              src={'/home/block1_openai.png'}
            />
            <span className={styles.btnContentText}>OpenAI</span>
          </div>
          <div className={styles.btnContent} style={{ marginLeft: '0.89rem' }}>
            <img
              className={styles.btnContentImg}
              width={50}
              height={50}
              alt="boome"
              src={'/home/block1_bard.png'}
            />
            <span className={styles.btnContentText}>Bard</span>
          </div>
          <div className={styles.btnContent} style={{ marginLeft: '0.89rem' }}>
            <img
              className={styles.btnContentImg}
              width={50}
              height={50}
              alt="boome"
              src={'/home/block1_gemini.png'}
            />
            <span className={styles.btnContentText}>GEMINI</span>
          </div>
        </div>
        <img src="/mobile/textLogo.png" className={styles.textLogo} alt="" />
      </div>
      <div className={styles.scrollList}>
        <ParallaxText baseVelocity={-1}>
          {block2_list.slice(0, 7).map((item, index) => (
            <div key={index} className={styles.scrollitem}>
              <Image
                width={49}
                height={49}
                alt="boome"
                src={item.img}
                style={{ width: 24, height: 'auto', marginTop: '-3px' }}
              />
              <span color="#fff">{item.name}</span>
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={1}>
          {block2_list.slice(7).map((item, index) => (
            <div key={index} className={styles.scrollitem}>
              <img
                alt="boome"
                src={item.img}
                style={{ height: 'auto', marginTop: '-3px' }}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </ParallaxText>
      </div>
      <div className={styles.title}>
        WHAT IS
        <br />
        <span style={{ color: '#00F600' }}> ARBITRAGE?</span>
      </div>

      <p className={styles.textContent}>
        <strong>Arbitrage</strong> involves exploiting price differences
        <br />
        of the sameasset in different markets or <br />
        ondifferent platforms. For example, if an asset
        <br />
        ispriced lower on one exchange and higher
        <br />
        onanother, traders can buy the asset on
        <br />
        thecheaper platform and sell it on the
        <br />
        moreexpensive one, profiting from the price <br />
        differential.
        <br />
        <strong>Arbitrage</strong> opportunities are often fleeting and <br />
        require quick execution tocapitalize on the <br />
        price gaps.
      </p>
      <img className={styles.rat} src={'/home/block2_rat2.png'} />

      <div className={styles.title1}>
        WHAT IS<span style={{ color: '#00F600' }}>A DEFI FLASH LOAN?</span>
      </div>

      <p className={styles.textContent1}>
        <strong>Flash</strong> loans are a relatively new form of
        <br />
        uncollateralized loans available to traders
        <br />
        on some decentralized finance (DeFi)
        <br />
        protocols based on a blockchain networks.
        <br />
        This type of loan allows traders to borrow
        <br />
        unsecured loans from lenders without
        <br />
        intermediaries.
      </p>
      <img className={styles.rat} src={'/home/block2_rat1.png'} />
      <div className={styles.textContainer}>
        <img
          className={styles.quotaImg}
          alt="boome"
          src={'/home/block2_quota1.png'}
        />
        <div className={styles.textContent3}>
          When a flash loan has been issued, the
          <br />
          smart contract rules ensure that the
          <br />
          borrower pays back the loan before
          <br />
          the transaction ends. If this condition
          <br />
          isn't met, the smart contract reverses
          <br />
          the transaction and it's like the loan
          <br />
          never happened in the first place.
        </div>
        <img
          className={styles.quotaImg1}
          alt="boome"
          src={'/home/block2_quota2.png'}
        />
      </div>
      <p className={styles.title3}>
        This guarantees the safety of the funds in the reverse pool.
      </p>
      <div className={styles.title1} style={{ textAlign: 'center' }}>
        FLASH LOAN <br />
        <span style={{ color: '#00F600' }}>EXAMPLE</span>
      </div>
      {open ? (
        <img
          className={styles.btnImg}
          alt="boome"
          src={'/closeDetail.png'}
          onClick={handleChange}
        />
      ) : (
        <img
          className={styles.btnImg}
          src="/openDetail.png"
          onClick={handleChange}
        />
      )}
      {open && (
        <div className={styles.bg3}>
          <div className={styles.item1}>
            <Image
              className={styles.itemImg}
              width={385}
              height={301}
              alt="boome"
              src={'/home/block3_flash1.png'}
            />
          </div>
          <div className={styles.arrow1}>
            <Image
              className={styles.arrowImg}
              width={61}
              height={54}
              alt="boome"
              src={'/mobile/arrowDown.png'}
            />
          </div>
          <div className={styles.item1}>
            <Image
              className={styles.itemImg}
              width={385}
              height={301}
              alt="boome"
              src={'/home/block3_flash2.png'}
            />
          </div>
          <div className={styles.arrow1}>
            <Image
              className={styles.arrowImg}
              width={61}
              height={54}
              alt="boome"
              src={'/mobile/arrowDown.png'}
            />
          </div>
          <div className={styles.item1}>
            <Image
              className={styles.itemImg}
              width={385}
              height={301}
              alt="boome"
              src={'/home/block3_flash3.png'}
            />
          </div>
          <div className={styles.arrow1}>
            <Image
              className={styles.arrowImg}
              width={61}
              height={54}
              alt="boome"
              src={'/mobile/arrowDown.png'}
            />
          </div>
          <div className={styles.item1}>
            <Image
              className={styles.itemImg}
              width={385}
              height={301}
              alt="boome"
              src={'/home/block3_flash5.png'}
            />
          </div>
          <div className={styles.arrow1}>
            <Image
              className={styles.arrowImg}
              width={61}
              height={54}
              alt="boome"
              src={'/mobile/arrowDown.png'}
            />
          </div>
          <div className={styles.item1}>
            <Image
              className={styles.itemImg}
              width={385}
              height={301}
              alt="boome"
              src={'/home/block3_flash4.png'}
            />
          </div>
        </div>
      )}

      <div className={styles.title1} style={{ textAlign: 'center' }}>
        CHALLENGES IN <br />
        <span style={{ color: '#00F600' }}>ARBITRAGE</span>
        <br />
        <span style={{ color: '#00F600' }}>&</span>
        <br />
        <span style={{ color: '#00F600' }}>FLASH LOANS</span>
      </div>
      <div className={styles.secondContent}>
        <div className={styles.hex1}>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>
              Arbitrage usually requires capital
            </div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>
              Integration with DeFi Protocols
            </div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>Risk Management Framework</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>Seeking Expert Advice</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Evaluating Risk and Reward</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>
              {' '}
              Data-Driven Decision Making
            </div>
          </div>
        </div>
        <div className={styles.hex}>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>
              {' '}
              Defining the Arbitrage Strategy
            </div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>
              {' '}
              Rigorous Testing and Backtesting
            </div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>
              {' '}
              Continuous Improvement and Adaptability
            </div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>
              {' '}
              Recognizing Untapped Opportunities
            </div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>
              {' '}
              Networking and Information Gathering
            </div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>
              {' '}
              Arbitrage requires from trader knowledge andexperience
            </div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>
              Some of trades can have losses or have problem with execution
            </div>
          </div>
        </div>
        <div className={styles.hex1}>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Smart Contract Developmen</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Deployment and Monitoring</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>
              {' '}
              Identifying Profitable Opportunities
            </div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}> Continuous Monitoring</div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>
              Many traders offer copying their strategy and trades
            </div>
          </div>
          <div className={styles.hexGrid}>
            <div className={styles.hexTitle}></div>
            <div className={styles.hexContent}>
              {' '}
              Bots which traders userequires knowledge of programming
            </div>
          </div>
        </div>
      </div>
      <Container maxWidth="sm" disableGutters className={styles.zero}>
        <img src="/mobile/img-zero-title.png" className={styles.zero_title} />
        <img src="/mobile/img-zero-pc.png" className={styles.zero_pc} />
      </Container>
      <div className={styles.zero_list}>
        {/* 1 */}
        <div className={styles.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-1.png"
            className={styles.zero_list_item_icon}
          />
          <p className={styles.zero_list_item_text}>
            Zero collateral loans - every user of Boomerang can receive loan for
            transaction
          </p>
        </div>
        {/* 2 */}
        <div className={styles.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-2.png"
            className={styles.zero_list_item_icon}
          />
          <p className={styles.zero_list_item_text}>
            Al scans available DEXs and will present the best available trade
            options
          </p>
        </div>
        {/* 3 */}
        <div className={styles.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-3.png"
            className={styles.zero_list_item_icon}
          />
          <p className={styles.zero_list_item_text}>
            No need to have experience or knowledge with trading bots to be
            successful trader
          </p>
        </div>
        {/* 4 */}
        <div className={styles.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-4.png"
            className={styles.zero_list_item_icon}
          />
          <p className={styles.zero_list_item_text}>
            Al presents only profitable trades - there is no option to exescute
            trade with loss
          </p>
        </div>
        {/* 5 */}
        <div className={styles.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-5.png"
            className={styles.zero_list_item_icon}
          />
          <p className={styles.zero_list_item_text}>Seamless user interface</p>
        </div>
        {/* 6 */}
        <div className={styles.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-6.png"
            className={styles.zero_list_item_icon}
          />
          <p className={styles.zero_list_item_text}>
            No need to have experience or knowledge with trading bots to be
            successful trader
          </p>
        </div>
        {/* 7 */}
        <div className={styles.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-7.png"
            className={styles.zero_list_item_icon}
          />
          <p className={styles.zero_list_item_text}>
            Aggregated flash loanslending
          </p>
        </div>
        {/* 8 */}
        <div className={styles.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-8.png"
            className={styles.zero_list_item_icon}
          />
          <p className={styles.zero_list_item_text}>
            Aggregated DEX marketplace
          </p>
        </div>
        {/* 9 */}
        <div className={styles.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-9.png"
            className={styles.zero_list_item_icon}
          />
          <p className={styles.zero_list_item_text}>Top pair suggestions</p>
        </div>
      </div>
      <div className={styles.point_bg}>
        <div className={styles.benefits}>
          <img src="/mobile/img-benefits.png" />
        </div>
        <div className={styles.networks}>
          <h3 className={styles.main_title_white}>NETWORKS</h3>
          <div className={styles.networks_list}>
            <div className={styles.networks_list_item}>
              <h5>ETHEREUM</h5>
              <img src="/mobile/networks-icon/networks-icon-1.png" />
            </div>
            <div className={styles.networks_list_item}>
              <h5>POLYGON</h5>
              <img src="/mobile/networks-icon/networks-icon-2.png" />
            </div>
            <div className={styles.networks_list_item}>
              <h5>BINANCE</h5>
              <img src="/mobile/networks-icon/networks-icon-3.png" />
            </div>
            <div className={styles.networks_list_item}>
              <h5>ARBITRUM</h5>
              <img src="/mobile/networks-icon/networks-icon-4.png" />
            </div>
            <div className={styles.networks_list_item}>
              <h5>AVALANCHE</h5>
              <img src="/mobile/networks-icon/networks-icon-5.png" />
            </div>
            <div className={styles.networks_list_item}>
              <h5>FANTOM</h5>
              <img src="/mobile/networks-icon/networks-icon-6.png" />
            </div>
            <div className={styles.networks_list_item}>
              <h5>METIS</h5>
              <img src="/mobile/networks-icon/networks-icon-7.png" />
            </div>
            <div className={styles.networks_list_item}>
              <h5>OPTIMISUM</h5>
              <img src="/mobile/networks-icon/networks-icon-8.png" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.flash}>
        <h3 className={styles.main_title_white}>FLASH LOAN</h3>
        <h3 className={styles.main_title_green}>LENDING</h3>
        <h3 className={styles.main_title_green}>PROTOCOL</h3>
        <div className={styles.flash_list}>
          {flash_list.map((item) => (
            <div className={styles.flash_list_item} key="index">
              <img src={item.img} />
              <h5>{item.name}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.decentralized}>
        <h3 className={styles.main_title_white}>DECENTRALIZED</h3>
        <h3 className={styles.main_title_green}>EXCHANGES</h3>
        <div className={styles.flash_list}>
          {decentralized_list.map((item) => (
            <div className={styles.flash_list_item} key="index">
              <img src={item.img} />
              <h5>{item.name}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.wallets}>
        <h3 className={styles.main_title_white}>WALLETS</h3>
        <div className={styles.flash_list}>
          {wallets_list.map((item) => (
            <div className={styles.flash_list_item} key="index">
              <img src={item.img} />
              <h5>{item.name}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.aggragators}>
        <h3 className={styles.main_title_white}>DECENTRALIZED</h3>
        <h3 className={styles.main_title_white}>EXCHANGES</h3>
        <h3 className={styles.main_title_green}>AGGRAGATORS</h3>
        <div className={styles.flash_list}>
          {aggragators_list.map((item) => (
            <div className={styles.flash_list_item} key="index">
              <img src={item.img} />
              <h5>{item.name}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.roadmap}>
        <h3 className={styles.main_title_white}>ROADMAP</h3>
        <img src="/mobile/img-roadmap.png" />
      </div>
      <div className={styles.choose}>
        <h3 className={styles.main_title_white}>WHY</h3>
        <h3 className={styles.main_title_green}>CHOOSE US</h3>
        <p>
          BOOMERANG prepares profitable trades and keeping the execution of
          arbitrage trades fortrader. Smart contracts lock in the trade
          parameters, ensure timely execution, and facilitatethe movement of
          assets between different markets or platforms. By using smart
          contracts and Al, MoWGLl protocol can achieve a high degree
          ofautomation, transparency, and reliability in executing arbitrage
          trades without the need for manual coding and analyzing.
        </p>
        <div className={styles.choose_video}>
          <video autoPlay loop muted>
            <source src="/home/kaola.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={styles.success}>
        <h5 className={styles.main_title_small}>Key elements of</h5>
        <h3 className={styles.main_title_white}>YOUR</h3>
        <h3 className={styles.main_title_green}>SUCCESS TRADES</h3>
        <div className={styles.success_list}>
          <div className={styles.success_item}>
            Arbitrage is the purchase and sale of an asset in order to profit
            from a difference in the asset's price between marketplaces.
          </div>
          <div className={styles.success_item}>
            There is no risk of losing money should a sequence of trades not
            execute as expected; the transactions will be reverted due to lack
            of funds, because the smart contract isn'table to repay a flash loan
            or before others do.
          </div>
          <div className={styles.success_item}>
            It does not require any kind of prediction algorithm or stop-loss
            strategy, but rather itdeals with finding profitable opportunities
            in the present moment before they disappear.
          </div>
        </div>
        {/* <div className={styles.success_video}>
          <video
            autoPlay
            loop
            muted
            className={styles.motion}
            poster="/home/block3_media_first.png"
          >
            <source src="/home/block3_media.mov" type="video/mp4" />
          </video>
        </div> */}
      </div>
      <div className={styles.footer}>
        <ul>
          <li className={styles.footerLeftIcon1}></li>
          <li className={styles.footerLeftIcon2}></li>
          <li className={styles.footerLeftIcon3}></li>
          <li className={styles.footerLeftIcon4}></li>
        </ul>
        <img src="/mobile/logo2.png" className={styles.footerIcon} alt="" />
      </div>
    </Fragment>
  );
}
