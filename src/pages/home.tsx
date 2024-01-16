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
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import { Grid, styled } from '@mui/material';
import { AnimatePresence, motion } from "framer-motion";
import { ParallaxText } from '@/components/ScrollText';
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
]
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

const LoginButton = styled(Button)`
    color: rgba(255,255,255,0.75);
    border-color: rgba(255,255,255,0.6);
    &:hover {
        border-color: rgba(255,255,255,1);
    color: rgba(255,255,255,1);
}
`

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
};

function Home() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AnimatePresence mode="wait">
            <div key={'00'}>
                <AppBar position="fixed" className={styles.nav}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Image width={375} height={36} alt='boome' src='/logo2.png' style={{ width: 280, height: 'auto', marginTop: '-3px' }} />
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
                                        marginLeft: 200
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
                                    height: 'auto'
                                }}>
                                <Image width={375} height={36} alt='boome' src='/logo2.png' />
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: 20 }}>
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
                                            ":hover": {
                                                color: '#FFFFFF',
                                                opacity: 1
                                            }
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                            <Box sx={{ flexGrow: 0, fontSize: 2 }}>
                                <LoginButton variant='outlined'>SIGN UP</LoginButton>
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
                        <Image className={styles.bigTitle} width={1140} height={174} alt='boome' src={'/home/block1_title.png'} />
                    </motion.div>
                    <div className={styles.bar} style={{ zIndex: 10 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className={styles.title}
                        >
                            <Image className={styles.img} width={56} height={56} alt='boome' src={'/home/block1_openai.png'} />
                            <span>Open AI</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                            className={styles.title}
                        >
                            <Image className={styles.img} width={56} height={56} alt='boome' src={'/home/block1_bard.png'} />
                            <span>Bard</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                            className={styles.title}
                        >
                            <Image className={styles.img} width={56} height={56} alt='boome' src={'/home/block1_gemini.png'} />
                            <span>Gemini</span>
                        </motion.div>
                    </div>
                    <div style={{ zIndex: 10, width: '80%', textAlign: 'center' }}>
                        <Image className={styles.bottom} width={1320} height={108} alt='boome' src={'/home/block1_bottom.png'} />
                    </div>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{ width: '100%', height: '100%' }}
                        className={styles.motion}
                        poster="/home/first.png"
                    >
                        <source src="/home/motion.mp4" type="video/mp4" />
                    </video>

                </div>
                <div className={styles.block2}>
                    <div className={styles.scroll}>
                        <ParallaxText baseVelocity={-1}>
                            {
                                block2_list.slice(0, 7).map((item, index) => (
                                    <div key={index} className={styles.item}>
                                        <Image width={49} height={49} alt='boome' src={item.img} style={{ width: 24, height: 'auto', marginTop: '-3px' }} />
                                        <span color='#fff'>{item.name}</span>
                                    </div>
                                ))
                            }
                        </ParallaxText>
                        <ParallaxText baseVelocity={1}>
                            {
                                block2_list.slice(7).map((item, index) => (
                                    <div key={index} className={styles.item}>
                                        <Image width={49} height={49} alt='boome' src={item.img} style={{ width: 24, height: 'auto', marginTop: '-3px' }} />
                                        <span>{item.name}</span>
                                    </div>
                                ))
                            }
                        </ParallaxText>
                    </div>
                    <div className={styles.spannel}>
                        <div className={styles.toptitle}>
                            WHAT IS ARBITRAGE?
                        </div>
                        <p className={styles.leftinfo}>
                        Arbitrage involves exploiting price differences of the sameasset in different markets or ondifferent platforms. For example, if an asset ispriced lower on one exchange and higher onanother, traders can buy the asset on thecheaper platform and sell it on the moreexpensive one, profiting from the price differential. Arbitrage opportunities are often fleeting and require quick execution tocapitalize on the price gaps.
                        </p>
                        <div className={styles.bottomtitle}>
                            WHAT IS A DEFI FLASH LOAN?
                        </div>
                    </div>
                </div>
                <div className={styles.block3}>
                    <p className={styles.title}>
                        FLASH LOAN EXAMPLE
                    </p>
                    <div className={styles.content}>
                        <Image style={{ width: '76%', height: 'auto', marginTop: '30px' }} width={1141} height={214} alt='boome' src={'/home/block3_flash1.png'} />
                        <Image style={{ width: '100%', height: 'auto', marginTop: '30px' }} width={1498} height={260} alt='boome' src={'/home/block3_flash2.png'} />
                        <Image style={{ width: '100%', height: 'auto', marginTop: '30px' }} width={1498} height={260} alt='boome' src={'/home/block3_flash3.png'} />
                        <Image style={{ width: '76%', height: 'auto', marginTop: '30px' }} width={1137} height={216} alt='boome' src={'/home/block3_flash4.png'} />
                        <Image style={{ width: '76%', height: 'auto', marginTop: '30px' }} width={1149} height={228} alt='boome' src={'/home/block3_flash5.png'} />
                    </div>
                    <p className={styles.info}>
                        {
                            `
                            WHEN A FLASH LOAN HAS BEEN ISSUED, THE SMART CONTRACT RULES ENSURE THAT THEBORROWER PAYS BACK THE LOAN
                        BEFORE THE TRANSACTION ENDS. IF THIS CONDITION ISN'TMET, THE SMART CONTRACT REVERSES THE TRANSACTION AND
                        IT'S LIKE THE LOAN NEVERHAPPENED IN THE FIRST PLACE.
                            `
                        }
                    </p>
                    <p className={styles.bottom}>
                        THIS GUARANTEES THE SAFETY OF THE FUNDS IN THE REVERSE POOL
                    </p>
                </div>
                <div className={styles.block4}>
                    <p className={styles.title}>
                        PROBLEMS
                    </p>
                    <div className={styles.content}>
                        <Image className={styles.info} width={1565} height={1173} alt='info' src={'/home/block4_info.png'} />
                    </div>
                </div>
                <div className={styles.block5}>
                    <p className={styles.title}>
                        HIGHLIGHTING PROFITABLE ARBITRAGE POSSIBILITIES
                    </p>
                    <div className={styles.computer}>
                        <Image className={styles.double} width={1370} height={602} src={'/home/block5_computer.png'} alt=''></Image>
                        <Image className={styles.left} width={398} height={476} src={'/home/block5_left.png'} alt=''></Image>
                        <Image className={styles.center} width={536} height={1199} src={'/home/block5_center.png'} alt=''></Image>
                        <Image className={styles.right} width={292} height={235} src={'/home/block5_right.png'} alt=''></Image>
                    </div>
                    <div className={styles.main}>
                        <Image className={styles.big} width={1399} height={1523} src={'/home/block5_main.png'} alt=''></Image>
                        <div className={styles.container}>
                            <div className={styles.item}>
                                ZERO COLLATERAL LOANS - EVERY USER OF BOOMERANG CAN RECEIVE LOAN FOR TRANSACTION. L SCANS AVAILABLE DEXS ANDWILL PRESENT THE BEST AVAILABLE TRADE OPTIONS. NO NEED TO HAVE EXPERIENCE OR KNOWLEDGE WITH TRADING BOTS TO BE SUCCESSFUL TRADER.
                            </div>
                            <div className={styles.item}>
                                AL PRESENTS ONLY PROFITABLE TRADES - THERE IS NO OPTION TO EXESCUTE TRADE WITH LOSS.  SEAMLESS USER INTERFACE. NO NEED TO HAVE EXPERIENCE OR KNOWLEDGE WITH TRADING BOTS TO  BE SUCCESSFUL TRADER
                            </div>
                            <div className={styles.item}>
                                AGGREGATED FLASH LOANSLENDING AGGREGATED DEX MARKETPLACE TOP PAIR SUGGESTIONS
                            </div>
                        </div>
                    </div>
                    <div className={styles.pannel}>
                        <Image className={styles.big} width={1362} height={1240} src={'/home/block5_pannel_big.png'} alt=''></Image>
                        <Image className={styles.info} width={1231} height={991} src={'/home/block5_pannel_info.png'} alt=''></Image>
                        <Image className={styles.title} width={1369} height={174} src={'/home/block5_pannel_title.png'} alt=''></Image>
                        <Image className={styles.bottom} width={303} height={303} src={'/home/block5_pannel_bottom.png'} alt=''></Image>
                    </div>

                </div>

                <div className={styles.block6}>
                    <p className={styles.title}>
                        ROADMAP
                    </p>
                    <div className={styles.main}>
                        <Image className={styles.info} width={1527} height={1126} src={'/home/block6_main.png'} alt=''></Image>
                    </div>
                </div>

                <div className={styles.block7}>
                    <p className={styles.title}>
                        ABOUT US
                    </p>
                    <div className={styles.main}>
                        <div className={styles.item}>
                            <h3>
                                WHY <br />CHOOSE US？
                            </h3>
                            <p>
                                BOOMERANG PREPARES PROFITABLE TRADES AND KEEPING THE EXECUTION OF ARBITRAGE TRADES FORTRADER. SMART CONTRACTS LOCK IN THE TRADE PARAMETERS, ENSURE TIMELY EXECUTION, AND FACILITATETHE MOVEMENT OF ASSETS BETWEEN DIFFERENT MARKETS OR PLATFORMS.BY USING SMART CONTRACTS AND AL, MOWGLL PROTOCOL CAN ACHIEVE A HIGH DEGREE OFAUTOMATION, TRANSPARENCY, AND RELIABILITY IN EXECUTING ARBITRAGE TRADES WITHOUT THE NEED FOR MANUAL CODING AND ANALYZING
                            </p>
                        </div>
                        <div className={styles.item}>
                            <h3>
                                WHY <br />CHOOSE US？
                            </h3>
                            <p>
                                BOOMERANG PREPARES PROFITABLE TRADES AND KEEPING THE EXECUTION OF ARBITRAGE TRADES FORTRADER. SMART CONTRACTS LOCK IN THE TRADE PARAMETERS, ENSURE TIMELY EXECUTION, AND FACILITATETHE MOVEMENT OF ASSETS BETWEEN DIFFERENT MARKETS OR PLATFORMS.BY USING SMART CONTRACTS AND AL, MOWGLL PROTOCOL CAN ACHIEVE A HIGH DEGREE OFAUTOMATION, TRANSPARENCY, AND RELIABILITY IN EXECUTING ARBITRAGE TRADES WITHOUT THE NEED FOR MANUAL CODING AND ANALYZING
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <Image width={1920} height={122} alt='' src={'/home/bottom.png'} />
                </div>
            </div>
        </AnimatePresence>

    );
}
export default Home;
