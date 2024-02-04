import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { Grid, styled } from '@mui/material';
import {
  AnimatePresence,
  motion,
  useInView,
  useWillChange,
} from 'framer-motion';
import { ParallaxText } from '@/components/ScrollText';
import { useRef, useState } from 'react';
import { Section } from '@/components/Section';
const pages = ['HOME', 'INTRODUCE', 'PRODUCT', 'COOPERATE', 'COMPANY'];
const block5_list = [
  'Arbitrage usually requires capital',
  'Defining the Arbitrage Strategy',
  'Defining the Arbitrage Strategy',
  'Integration with DeFi Protocols',
  'Rigorous Testing and Backtesting',
  'Risk Management Framework',
  'Continuous Improvement and Adaptability',
  'ldentifying Profitable Opportunities',
  'Understanding Market lnefficiencies',
  'ldentifying Undervalued Assets',
  'Understanding Market Inefficiencies',
  'ldentifying Undervalued Assets',
  'Exploiting Market Mispricing',
  'Understanding Market lnefficiencies',
  'ldentifying Undervalued Assets',
  'Recognizing Untapped Opportunities',
  'Continuous Monitoring',
  'Networking and Information Gathering',
  'Evaluating Risk and Reward',
  'Seeking Expert Advice',
  'Data-Driven Decision Making',
  'Arbitrage requires fromtrader knowledge and experience',
  'Bots which traders userequires knowledge ofprogramming',
  'Some of trades can havelosses or have problem with execution',
  'Many traders offer copying their strategy and trades',
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

const block8_list = [
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

const block9_list = [
  {
    name: 'UNISWAP',
    img: '/home/block9_logo1.png',
  },
  {
    name: 'PANCAKESWAP',
    img: '/home/block9_logo2.png',
  },
  {
    name: 'TRADER-JOE',
    img: '/home/block9_logo3.png',
  },
  {
    name: 'TRISOLARIS',
    img: '/home/block9_logo4.png',
  },
];

const block10_list = [
  {
    name: 'UNISWAP',
    img: '/home/block10_logo1.png',
  },
  {
    name: 'PANCAKESWAP',
    img: '/home/block10_logo2.png',
  },
  {
    name: 'TRADER-JOE',
    img: '/home/block10_logo3.png',
  },
  {
    name: 'TRISOLARIS',
    img: '/home/block10_logo4.png',
  },
];

const LoginButton = styled(Button)`
  color: rgba(255, 255, 255, 0.75);
  border-color: rgba(255, 255, 255, 0.6);
  &:hover {
    border-color: rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
`;

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

function Home() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen(!open);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const willChange = useWillChange();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <AnimatePresence mode="wait">
      <div key={'00'}>
        <AppBar position="fixed" className={styles.nav}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Image
                  width={375}
                  height={36}
                  alt="boome"
                  src="/logo2.png"
                  style={{ width: 280, height: 'auto', marginTop: '-3px' }}
                />
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                    marginLeft: 200,
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 2,
                  width: 100,
                  height: 'auto',
                }}
              >
                <Image width={375} height={36} alt="boome" src="/logo2.png" />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  marginLeft: 20,
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: '#FFFFFF',
                      display: 'block',
                      padding: '10px 20px',
                      opacity: 0.6,
                      transition: 'all .3s',
                      ':hover': {
                        color: '#FFFFFF',
                        opacity: 1,
                      },
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0, fontSize: 2 }}>
                <LoginButton variant="outlined">Launch App</LoginButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <div className={styles.block1}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ width: '80%', zIndex: 10 }}
          >
            <Image
              className={styles.bigTitle}
              width={1140}
              height={174}
              alt="boome"
              src={'/home/block1_title.png'}
            />
          </motion.div>
          <div className={styles.bar} style={{ zIndex: 10 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={styles.title}
              whileHover={{ borderColor: '#ffffff' }}
              style={{ willChange }}
            >
              <Image
                className={styles.img}
                width={56}
                height={56}
                alt="boome"
                src={'/home/block1_openai.png'}
              />
              <span>Open AI</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={styles.title}
              whileHover={{ borderColor: '#ffffff' }}
              style={{ willChange }}
            >
              <Image
                className={styles.img}
                width={56}
                height={56}
                alt="boome"
                src={'/home/block1_bard.png'}
              />
              <span>Bard</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={styles.title}
              whileHover={{ borderColor: '#ffffff' }}
              style={{ willChange }}
            >
              <Image
                className={styles.img}
                width={56}
                height={56}
                alt="boome"
                src={'/home/block1_gemini.png'}
              />
              <span>Gemini</span>
            </motion.div>
          </div>
          <div style={{ zIndex: 10, width: '80%', textAlign: 'center' }}>
            <Image
              className={styles.bottom}
              width={1320}
              height={108}
              alt="boome"
              src={'/home/block1_bottom.png'}
            />
          </div>
          {/* <video
                        autoPlay
                        loop
                        muted
                        className={styles.motion}
                        style={{width: '100%', height: '100%'}}
                        poster="/home/first.png"
                    >
                        <source src="/home/motion.mp4" type="video/mp4" />
                    </video> */}
        </div>
        <div className={styles.block2}>
          <div className={styles.scroll}>
            <ParallaxText baseVelocity={-1}>
              {block2_list.slice(0, 7).map((item, index) => (
                <div key={index} className={styles.item}>
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
                <div key={index} className={styles.item}>
                  <Image
                    width={49}
                    height={49}
                    alt="boome"
                    src={item.img}
                    style={{ width: 24, height: 'auto', marginTop: '-3px' }}
                  />
                  <span>{item.name}</span>
                </div>
              ))}
            </ParallaxText>
          </div>
          <div className={styles.container}>
            <div>
              <Image
                className={styles.rat}
                width={422}
                height={621}
                alt="boome"
                src={'/home/block2_rat2.png'}
              />
            </div>
            <Section>
              <div className={styles.content}>
                <div className={styles.title}>
                  WHAT IS
                  <span style={{ color: '#00F600' }}> ARBITRAGE?</span>
                </div>
                <p className={styles.info}>
                  <span style={{ color: '#fff', fontWeight: 'bold' }}>
                    Arbitrage
                  </span>{' '}
                  involves exploiting price differences of the sameasset in
                  different markets or ondifferent platforms. For example, if an
                  asset ispriced lower on one exchange and higher onanother,
                  traders can buy the asset on thecheaper platform and sell it
                  on the moreexpensive one, profiting from the price
                  differential. Arbitrage opportunities are often fleeting and
                  require quick execution tocapitalize on the price gaps.
                </p>
              </div>
            </Section>
          </div>
          <div className={styles.container}>
            <Section>
              <div className={styles.content}>
                <div className={styles.title}>
                  WHAT IS
                  <div style={{ color: '#00F600' }}>A DEFI FLASH LOAN?</div>
                </div>
                <p className={styles.info}>
                  <span style={{ color: '#fff', fontWeight: 'bold' }}>
                    Flash loans{' '}
                  </span>
                  are a relatively new form of uncollateralized loans available
                  to traders on some decentralized finance (DeFi) protocols
                  based on a blockchain networks. This type of loan allows
                  traders to borrow unsecured loans from lenders without
                  intermediaries.
                </p>
              </div>
            </Section>
            <div>
              <Image
                className={styles.rat}
                width={404}
                height={585}
                alt="boome"
                src={'/home/block2_rat1.png'}
              />
            </div>
          </div>
        </div>
        <div className={styles.block3}>
          <div className={styles.bg}>
            <video
              autoPlay
              loop
              muted
              style={{ width: '100%', height: 'auto', marginTop: 0 }}
              className={styles.motion}
              poster="/home/block3_media_first.png"
            >
              <source src="/home/block3_media.mov" type="video/mp4" />
            </video>
            <div className={styles.meme}>
              <Image
                className={styles.img}
                width={1920}
                height={333}
                alt="boome"
                src={'/home/block3_bg0.png'}
              />
            </div>
            <div className={styles.memeLeft}>
              <Image
                className={styles.img}
                width={542}
                height={175}
                alt="boome"
                src={'/home/block3_meme2.png'}
              />
            </div>
            <div className={styles.memeLeft}>
              <Image
                className={styles.img}
                width={542}
                height={175}
                alt="boome"
                src={'/home/block3_meme2.png'}
              />
            </div>
            <div className={styles.memeLeft}>
              <Image
                className={styles.img}
                width={542}
                height={175}
                alt="boome"
                src={'/home/block3_meme2.png'}
              />
            </div>
            <div className={styles.memeLeft}>
              <Image
                className={styles.img}
                width={542}
                height={175}
                alt="boome"
                src={'/home/block3_meme2.png'}
              />
            </div>
            <div className={styles.memeLeft}>
              <Image
                className={styles.img}
                width={542}
                height={175}
                alt="boome"
                src={'/home/block3_meme2.png'}
              />
            </div>
            <div className={styles.memeLeft}>
              <Image
                className={styles.img}
                width={542}
                height={175}
                alt="boome"
                src={'/home/block3_meme2.png'}
              />
            </div>
            <div className={styles.memeLeft}>
              <Image
                className={styles.img}
                width={542}
                height={175}
                alt="boome"
                src={'/home/block3_meme2.png'}
              />
            </div>
            <div className={styles.memeRight}>
              <Image
                className={styles.img}
                width={542}
                height={175}
                alt="boome"
                src={'/home/block3_bg3.png'}
              />
            </div>
            <div className={styles.memeRight}>
              <Image
                className={styles.img}
                width={542}
                height={175}
                alt="boome"
                src={'/home/block3_bg3.png'}
              />
            </div>
            <div className={styles.memeRight}>
              <Image
                className={styles.img}
                width={542}
                height={175}
                alt="boome"
                src={'/home/block3_bg3.png'}
              />
            </div>
            <div className={styles.memeRight}>
              <Image
                className={styles.img}
                width={542}
                height={175}
                alt="boome"
                src={'/home/block3_bg3.png'}
              />
            </div>
            <div className={styles.memeRight}>
              <Image
                className={styles.img}
                width={542}
                height={175}
                alt="boome"
                src={'/home/block3_bg3.png'}
              />
            </div>
            <div className={styles.memeRight}>
              <Image
                className={styles.img}
                width={542}
                height={175}
                alt="boome"
                src={'/home/block3_bg3.png'}
              />
            </div>
            <div className={styles.memeRight}>
              <Image
                className={styles.img}
                width={542}
                height={175}
                alt="boome"
                src={'/home/block3_bg3.png'}
              />
            </div>
            <div className={styles.bottom}>
              <Image
                className={styles.img}
                width={1921}
                height={1280}
                alt="boome"
                src={'/home/block3_bg2.png'}
              />
            </div>
          </div>
          <div
            className={styles.container}
            style={{ maxWidth: '1000px', marginTop: '130px', zIndex: 1000 }}
          >
            <Section>
              <div className={styles.bar} style={{ zIndex: 1000 }}>
                <div className={styles.quota}>
                  <Image
                    className={styles.quotaImg}
                    width={34}
                    height={22}
                    alt="boome"
                    src={'/home/block2_quota1.png'}
                  />
                </div>
                <p className={styles.barInfo} style={{ zIndex: 1000 }}>
                  When a flash loan has been issued, the smart contract rules
                  ensure that the borrower pays back the loan before the
                  transaction ends. If this condition isn't met, the smart
                  contract reverses the transaction and it's like the loan never
                  happened in the first place.
                </p>

                <div className={styles.quota} style={{ zIndex: 1000 }}>
                  <Image
                    className={styles.quotaImg}
                    width={34}
                    height={22}
                    alt="boome"
                    src={'/home/block2_quota2.png'}
                  />
                </div>
              </div>
            </Section>
          </div>
          <div className={styles.container}>
            <div className={styles.greenText} style={{ zIndex: 1000 }}>
              <Section>
                This guarantees the safety of the funds in the reverse pool.
              </Section>
            </div>
          </div>
          <div
            className={styles.title}
            style={{ zIndex: 1000, position: 'relative' }}
          >
            <div>
              FLASH LOAN
              <span style={{ color: '#00F600', zIndex: 1000 }}> EXAMPLE</span>
            </div>
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
            <>
              <div className={styles.content}>
                <div className={styles.item}>
                  <Image
                    className={styles.itemImg}
                    width={385}
                    height={301}
                    alt="boome"
                    src={'/home/block3_flash1.png'}
                  />
                </div>
                <div className={styles.arrow}>
                  <Image
                    className={styles.arrowImg}
                    width={61}
                    height={54}
                    alt="boome"
                    src={'/home/block3_arrow.png'}
                  />
                </div>
                <div className={styles.item}>
                  <Image
                    className={styles.itemImg}
                    width={385}
                    height={301}
                    alt="boome"
                    src={'/home/block3_flash2.png'}
                  />
                </div>
                <div className={styles.arrow}>
                  <Image
                    className={styles.arrowImg}
                    width={61}
                    height={54}
                    alt="boome"
                    src={'/home/block3_arrow.png'}
                  />
                </div>
                <div className={styles.item}>
                  <Image
                    className={styles.itemImg}
                    width={385}
                    height={301}
                    alt="boome"
                    src={'/home/block3_flash3.png'}
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.arrow}>
                  <Image
                    className={styles.arrowImg}
                    width={61}
                    height={54}
                    alt="boome"
                    src={'/home/block3_arrow.png'}
                  />
                </div>
                <div className={styles.item}>
                  <Image
                    className={styles.itemImg}
                    width={385}
                    height={301}
                    alt="boome"
                    src={'/home/block3_flash4.png'}
                  />
                </div>
                <div className={styles.arrow}>
                  <Image
                    className={styles.arrowImg}
                    width={61}
                    height={54}
                    alt="boome"
                    src={'/home/block3_arrow.png'}
                  />
                </div>
                <div className={styles.item}>
                  <Image
                    className={styles.itemImg}
                    width={385}
                    height={301}
                    alt="boome"
                    src={'/home/block3_flash5.png'}
                  />
                </div>
                <div className={styles.arrow}>
                  <Image
                    className={styles.arrowImg}
                    width={61}
                    height={54}
                    alt="boome"
                    src={'/home/block3_arrow.png'}
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.block4}>
          <p className={styles.title}>
            CHALLENGES IN
            <span style={{ color: '#00F600', zIndex: 1000 }}>
              {' '}
              ARBITRAGE & FLASH LOANS
            </span>
          </p>
          <div className={styles.hexGrid}>
            <div className={styles.hexRow}>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>
                  Arbitrage usually requires capital
                </div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>
                  Defining the Arbitrage Strategy
                </div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>Smart Contract Development</div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>
                  Integration with DeFi Protocols
                </div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>
                  Rigorous Testing and Backtesting
                </div>
              </div>
            </div>
            <div className={styles.hexRow}>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>Deployment and Monitoring</div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>Risk Management Framework</div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>
                  Continuous Improve-ment and Adaptability
                </div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>
                  Identifying Profitable Opportunities
                </div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>Seeking Expert Advice</div>
              </div>
            </div>
            <div className={styles.hexRow}>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>
                  Recognizing Untapped Opportunities
                </div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>Continuous Monitoring</div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>
                  Networking and Infor-mation Gathering
                </div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>Evaluating Risk and Reward</div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>
                  Many traders offer copyingtheir strategy and trades
                </div>
              </div>
            </div>
            <div className={styles.hexRow}>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>
                  Data-Driven Decision Making
                </div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>
                  Arbitrage requires from trader knowledge andexperience
                </div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>
                  Bots which traders userequires knowledge of programming
                </div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>
                  Some of trades can have losses or have problem with execution
                </div>
              </div>
              <div className={styles.hex}>
                <div className={styles.hexTitle}></div>
                <div className={styles.hexInfo}>...</div>
              </div>
            </div>
          </div>
          <p
            className={styles.title}
            style={{ width: '1000px', marginTop: '200px' }}
          >
            <Image
              width={1199}
              height={183}
              alt="boome"
              src={'/home/block4_bottom.png'}
              style={{ width: '100%', height: 'auto' }}
            />
          </p>
        </div>
      </div>
      <div className={styles.block5}>
        <div className={styles.bg}>
          <video
            autoPlay
            loop
            muted
            className={styles.motion}
            poster="/home/block3_media_first.png"
          >
            <source src="/home/motion2.mp4" type="video/mp4" />
          </video>
          <div className={styles.meme}>
            <Image
              className={styles.img}
              width={1920}
              height={333}
              alt="boome"
              src={'/home/block3_bg0.png'}
            />
          </div>
          <div className={styles.memedaoli}>
            <Image
              className={styles.img}
              width={1920}
              height={333}
              alt="boome"
              src={'/home/block3_bg0.png'}
            />
          </div>
        </div>
        <div className={styles.computer}>
          <Image
            className={styles.double}
            width={1370}
            height={602}
            src={'/home/block5_computer.png'}
            alt=""
          ></Image>
        </div>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <Image
                className={styles.cardImg}
                width={95}
                height={95}
                alt="boome"
                src={'/home/block5_logo1.png'}
              />
            </div>
            <div className={styles.cardInfo}>
              Zero collateral loans - every user of Boomerang can receive loan
              for transaction
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <Image
                className={styles.cardImg}
                width={84}
                height={95}
                alt="boome"
                src={'/home/block5_logo2.png'}
              />
            </div>
            <div className={styles.cardInfo}>
              Al scans available DEXs and will present the best available trade
              options
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <Image
                className={styles.cardImg}
                width={105}
                height={82}
                alt="boome"
                src={'/home/block5_logo3.png'}
              />
            </div>
            <div className={styles.cardInfo}>
              No need to have experience or knowledge with trading bots to be
              successful trader
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <Image
                className={styles.cardImg}
                width={81}
                height={95}
                alt="boome"
                src={'/home/block5_logo4.png'}
              />
            </div>
            <div className={styles.cardInfo}>
              Al presents only profitable trades - there is no option to
              exescute trade with loss
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <Image
                className={styles.cardImg}
                width={93}
                height={76}
                alt="boome"
                src={'/home/block5_logo5.png'}
              />
            </div>
            <div className={styles.cardInfo}>Seamless user interface</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <Image
                className={styles.cardImg}
                width={105}
                height={92}
                alt="boome"
                src={'/home/block5_logo6.png'}
              />
            </div>
            <div className={styles.cardInfo}>
              No need to have experience or knowledge with trading bots to be
              successful trader
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <Image
                className={styles.cardImg}
                width={95}
                height={95}
                alt="boome"
                src={'/home/block5_logo7.png'}
              />
            </div>
            <div className={styles.cardInfo}>Aggregated flash loanslending</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <Image
                className={styles.cardImg}
                width={94}
                height={91}
                alt="boome"
                src={'/home/block5_logo8.png'}
              />
            </div>
            <div className={styles.cardInfo}>Aggregated DEX marketplace</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <Image
                className={styles.cardImg}
                width={112}
                height={95}
                alt="boome"
                src={'/home/block5_logo9.png'}
              />
            </div>
            <div className={styles.cardInfo}>Top pair suggestions</div>
          </div>
        </div>
      </div>
      <div className={styles.block6}>
        <div className={styles.bg}>
          <video
            autoPlay
            loop
            muted
            className={styles.motion}
            poster="/home/block3_media_first.png"
          >
            <source src="/home/block3_media.mov" type="video/mp4" />
          </video>
          <div className={styles.meme}>
            <Image
              className={styles.img}
              width={1920}
              height={333}
              alt="boome"
              src={'/home/block3_bg0.png'}
            />
          </div>
          <div className={styles.memeLeft}>
            <Image
              className={styles.img}
              width={542}
              height={175}
              alt="boome"
              src={'/home/block3_meme2.png'}
            />
          </div>
          {/* <div className={styles.meme6}>
                        <Image className={styles.img} width={1920} height={1152} alt='boome' src={'/home/block6_bg.png'} />
                    </div> */}
        </div>
        <div className={styles.content}>
          <Image
            className={styles.contentImg}
            width={1337}
            height={855}
            alt="boome"
            src={'/home/block6_map.png'}
          />
        </div>
        <p className={styles.title} style={{ marginTop: '100px' }}>
          NETWORKS
        </p>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>ETHEREUM</div>
            <div className={styles.cardLogo}>
              <Image
                className={styles.logo}
                width={70}
                height={70}
                alt="boome"
                src={'/home/block6_logo1.png'}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>POLYGON</div>
            <div className={styles.cardLogo}>
              <Image
                className={styles.logo}
                width={70}
                height={70}
                alt="boome"
                src={'/home/block6_logo2.png'}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>BINANCE</div>
            <div className={styles.cardLogo}>
              <Image
                className={styles.logo}
                width={70}
                height={70}
                alt="boome"
                src={'/home/block6_logo3.png'}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>ARBITRUM</div>
            <div className={styles.cardLogo}>
              <Image
                className={styles.logo}
                width={70}
                height={70}
                alt="boome"
                src={'/home/block6_logo4.png'}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>AVALANCHE</div>
            <div className={styles.cardLogo}>
              <Image
                className={styles.logo}
                width={70}
                height={70}
                alt="boome"
                src={'/home/block6_logo5.png'}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>FANTOM</div>
            <div className={styles.cardLogo}>
              <Image
                className={styles.logo}
                width={70}
                height={70}
                alt="boome"
                src={'/home/block6_logo6.png'}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>METIS</div>
            <div className={styles.cardLogo}>
              <Image
                className={styles.logo}
                width={70}
                height={70}
                alt="boome"
                src={'/home/block6_logo7.png'}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>OPTIMISUM</div>
            <div className={styles.cardLogo}>
              <Image
                className={styles.logo}
                width={70}
                height={70}
                alt="boome"
                src={'/home/block6_logo8.png'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.block7}>
        <p className={styles.title} style={{ marginTop: '0px' }}>
          FLASH LOAN
          <span style={{ color: '#00F600', zIndex: 1000 }}>
            {' '}
            LENDING PROTOCOL
          </span>
        </p>
        <div className={styles.container}>
          <div className={styles.card}>
            <Image
              className={styles.logo}
              width={70}
              height={70}
              src={'/home/block7_logo1.png'}
              alt=""
            />
            <div className={styles.cardInfo}>AAVE</div>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.logo}
              width={70}
              height={70}
              src={'/home/block7_logo2.png'}
              alt=""
            />
            <div className={styles.cardInfo}>RADIANT</div>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.logo}
              width={70}
              height={70}
              src={'/home/block7_logo3.png'}
              alt=""
            />
            <div className={styles.cardInfo}>DYDX</div>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.logo}
              width={70}
              height={70}
              src={'/home/block7_logo4.png'}
              alt=""
            />
            <div className={styles.cardInfo}>UNISWAP</div>
          </div>
        </div>
      </div>
      <div className={styles.block8} style={{ marginTop: '100px' }}>
        <p className={styles.title} style={{ marginTop: '0px' }}>
          DECENTRALIZED
          <span style={{ color: '#00F600', zIndex: 1000 }}>EXCHANGES</span>
        </p>
        <div className={styles.container}>
          {block8_list.map((item, index) => (
            <div className={styles.card} key={index}>
              <Image
                className={styles.logo}
                width={70}
                height={70}
                src={item.img}
                alt=""
              />
              <div className={styles.cardInfo}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.block9} style={{ marginTop: '100px' }}>
        <p className={styles.title} style={{ marginTop: '0px' }}>
          WALLETS
        </p>
        <div className={styles.container}>
          {block9_list.map((item, index) => (
            <div className={styles.card} key={index}>
              <Image
                className={styles.logo}
                width={70}
                height={70}
                src={item.img}
                alt=""
              />
              <div className={styles.cardInfo}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.block10} style={{ marginTop: '100px' }}>
        <p className={styles.title} style={{ marginTop: '0px' }}>
          DECENTRALIZED
          <span style={{ color: '#00F600', zIndex: 1000 }}>
            {' '}
            EXCHANGES AGGRAGATORS
          </span>
        </p>
        <div className={styles.container}>
          {block10_list.map((item, index) => (
            <div className={styles.card} key={index}>
              <Image
                className={styles.logo}
                width={70}
                height={70}
                src={item.img}
                alt=""
              />
              <div className={styles.cardInfo}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.block11} style={{ marginTop: '100px' }}>
        <div className={styles.bg}>
          <video autoPlay loop muted className={styles.motion}>
            <source src="/home/kaola.mp4" type="video/mp4" />
          </video>
          {/* <div className={styles.meme}>
                        <Image className={styles.img} width={1920} height={333} alt='boome' src={'/home/block3_bg0.png'} />
                    </div> */}
        </div>
        <p className={styles.title} style={{ marginTop: '0px' }}>
          ROADMAP
        </p>
        <div className={styles.container}>
          <Image
            className={styles.content}
            width={1727}
            height={1140}
            src={'/home/block11_content.png'}
            alt=""
          />
        </div>
        <div className={styles.container2}>
          <div>
            {/* <Image className={styles.rat} width={422} height={621} alt='boome' src={'/home/block2_rat2.png'} /> */}
          </div>
          <Section>
            <div className={styles.content}>
              <div className={styles.title}>
                WHY
                <span style={{ color: '#00F600' }}> CHOOSE US?</span>
              </div>
              <p className={styles.info}>
                <span style={{ color: '#fff', fontWeight: 'bold' }}>
                  BOOMERANG{' '}
                </span>
                prepares profitable trades and keeping the execution of
                arbitrage trades fortrader. Smart contracts lock in the trade
                parameters, ensure timely execution, and facilitatethe movement
                of assets between different markets or platforms. By using smart
                contracts and Al, MoWGLl protocol can achieve a high degree
                ofautomation, transparency, and reliability in executing
                arbitrage trades without the need for manual coding and
                analyzing
              </p>
            </div>
          </Section>
        </div>
      </div>
      <div className={styles.block12}>
        <div className={styles.bg}>
          <video
            autoPlay
            loop
            muted
            className={styles.motion}
            poster="/home/block3_media_first.png"
          >
            <source src="/home/block3_media.mov" type="video/mp4" />
          </video>
          <div className={styles.meme}>
            <Image
              className={styles.img}
              width={1920}
              height={333}
              alt="boome"
              src={'/home/block6_bg_top.png'}
            />
          </div>
          <div className={styles.meme2}>
            <Image
              className={styles.img}
              width={1920}
              height={1171}
              alt="boome"
              src={'/home/block13_bg_big.png'}
            />
          </div>
          {/* <div className={styles.memeLeft}>
                        <Image className={styles.img} width={542} height={175} alt='boome' src={'/home/block3_meme2.png'} />
                    </div> */}
        </div>
        <p className={styles.add}>Key elements of</p>
        <p className={styles.title} style={{ marginTop: '0px' }}>
          YOUR
          <span style={{ color: '#00F600', zIndex: 1000 }}>
            {' '}
            SUCCESS TRADES
          </span>
        </p>
        <div className={styles.container}>
          <div className={styles.item}>
            Arbitrage is the purchase and sale of an asset in order to profit
            from a difference in the asset's price between marketplaces.
          </div>
          <div className={styles.item}>
            There is no risk of losing money should a sequence of trades not
            execute as expected; the transactions will be reverted due to lack
            of funds, because the smart contract isn'table to repay a flash loan
            or before others do.
          </div>
          <div className={styles.item}>
            It does not require any kind of prediction algorithm or stop-loss
            strategy, but rather itdeals with finding profitable opportunities
            in the present moment before they disappear.
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <Image width={1920} height={122} alt="" src={'/home/bottom.png'} />
      </div>
    </AnimatePresence>
  );
}
export default Home;
