import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid } from '@mui/material';
import { AnimatePresence, motion } from "framer-motion";
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
                                <Image width={375} height={36} alt='boome' src='/logo2.png' />
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
                                    flexGrow: 2
                                }}>
                                <Image width={375} height={36} alt='boome' src='/logo2.png' />
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: 10 }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            color: 'rgba(255, 255, 255, 0.60)',
                                            display: 'block',
                                            padding: '10px 20px'
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0, fontSize: 2 }}>
                                <AccountCircleIcon />
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>


                <div className={styles.block1}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image className={styles.bigTitle} width={800} height={60} alt='boome' src={'/home/block6_title.png'} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className={styles.secondTitle}>A ZERO COLLATERAL AI ARBITRAGE PROTOCOL</p>
                    </motion.div>
                    <div className={styles.bar}>
                        <div className={styles.item}>
                            <Image className={styles.title} width={50} height={50} alt='boome' src={'/home/block1_openai.png'} />
                            <span className={styles.content}>OpenAI</span>
                        </div>
                        <div className={styles.item}>
                            <Image className={styles.title} width={50} height={50} alt='boome' src={'/home/block1_bard.png'} />
                            <span className={styles.content}>Bard</span>
                        </div>
                        <div className={styles.item}>
                            <Image className={styles.title} width={50} height={50} alt='boome' src={'/home/block1_gemini.png'} />
                            <span className={styles.content}>GEMINI</span>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        BOOMERANG is a fascinating concept thatcombines elements of Artificial IntelligenceZero Collateral Flash Loans and Arbitrage Trading
                    </div>
                </div>
                <motion.article
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                    variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
                    key={1}
                >
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible
                        }}
                        key={2}
                        style={
                            {
                                "--base-width": "24vw",
                                top: "-18vw",
                                letterSpacing: "-1.4vw",
                                x: "-50%"
                            } as any
                        }
                    >
                        <span style={{ color: 'pink', fontSize: '40px', background: 'yellow' }}>
                            Galleries
                            Galleries
                            Galleries
                            Galleries
                            Galleries
                            Galleries
                        </span>
                    </motion.h1>
                    <ul>
                        <motion.li variants={itemVariants}>
                            <div>Amsterdam Zuid nightwalk</div>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                            <div>White lines of Canary Wharf</div>
                        </motion.li>
                    </ul>
                </motion.article>
                <div className={styles.block2}>
                    <p className={styles.title}>
                        <span className={styles.left}>what is </span>
                        <span className={styles.blue}>arbitrage</span>
                        <span className={styles.right}>?</span>
                    </p>
                    <div className={styles.content}>
                        <Image width={420} height={420} alt='tb' src={'/home/block2_tb.png'} />
                        <p>Arbitrage involves exploiting price differences ofthe same asset in different markets or ondifferent platforms. For example, if an asset ispriced lower on one exchange and higher onanother, traders can buy the asset on thecheaper platform and sell it on the moreexpensive one, profiting from the pricedifferential. Arbitrage opportunities are oftenfleeting and require quick execution tocapitalize on the price gaps.</p>
                    </div>
                </div>
                <div className={styles.block3}>
                    <p className={styles.title}>
                        <span className={styles.left}>WHAT IS A</span>
                        <span className={styles.blue}>DEFI FLASH LOAN</span>
                        <span className={styles.right}>?</span>
                    </p>
                    <div className={styles.content}>
                        <p>Flash loans are a relatively new form of uncollateralized loans available to traders onsome decentralized finance (DeFi) protocols based on a blockchain networks. Thistype of loan allows traders to borrow unsecured loans from lenders without intermediaries.</p>
                    </div>
                </div>
                <div className={styles.block4}>
                    <p className={styles.title}>
                        <span className={styles.left}>FLASH LOAN</span>
                        <span className={styles.blue}>EXAMPLE</span>
                    </p>
                    <div className={styles.content}></div>
                    <p className={styles.info}>
                        When a flash loan has been issued, the smart contract rules ensure that theborrower pays back the loan before the transaction ends. If this condition isn'tmet, the smart contract reverses the transaction and it's like the loan neverhappened in the first place.
                    </p>
                    <p className={styles.bottom}>
                        This guarantees the safety of the funds in the reverse pool.
                    </p>
                </div>
                <div className={styles.block5}>
                    <p className={styles.title}>
                        <span className={styles.left}>PROBLEMS</span>
                    </p>
                    <Grid container className={styles.container}>
                        {
                            block5_list.map(item =>
                                <Grid item className={styles.item}>
                                    <Image width={42} height={42} alt='' src={'/home/block5_icon.png'} />
                                    <div className={styles.info}>{item}</div>
                                </Grid>)
                        }
                    </Grid>
                </div>
                <div className={styles.block6}>
                    <Image className={styles.title} width={1000} height={100} alt='boome' src={'/home/block6_title.png'} />
                    <p className={styles.info}>
                        HIGHLIGHTING PROFITABLE ARBITRAGE POSSIBILITIES
                    </p>
                    <div className={styles.content}></div>
                    <div className={styles.box}>
                        <div className={styles.card1}></div>
                        <div className={styles.card2}></div>
                    </div>
                    <Grid container spacing={3} className={styles.sudoku}>
                        <Grid item xs={4} className={styles.item}>
                            <Box className={styles.box}>
                                <Image width={60} height={60} alt='sudoku' src={'/home/block6_sudoku1.png'} />
                                <span>Zero collateral loans - every user of Boomerang can receive loan for transaction</span>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className={styles.item}>
                            <Box className={styles.box}>
                                <Image width={60} height={60} alt='sudoku' src={'/home/block6_sudoku2.png'} />
                                <span>Al scans available DEXs andwill present the best available trade options</span>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className={styles.item}>
                            <Box className={styles.box}>
                                <Image width={60} height={60} alt='sudoku' src={'/home/block6_sudoku3.png'} />
                                <span>No need to have experience or knowledge with trading bots to be successful trader</span>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className={styles.item}>
                            <Box className={styles.box}>
                                <Image width={60} height={60} alt='sudoku' src={'/home/block6_sudoku4.png'} />
                                <span>Al presents only profitable trades - there is no option to exescute trade with loss</span>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className={styles.item}>
                            <Box className={styles.box}>
                                <Image width={60} height={60} alt='sudoku' src={'/home/block6_sudoku5.png'} />
                                <span>Seamless user interface</span>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className={styles.item}>
                            <Box className={styles.box}>
                                <Image width={60} height={60} alt='sudoku' src={'/home/block6_sudoku6.png'} />
                                <span>No need to have experience or knowledge with trading bots to be successful trader</span>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className={styles.item}>
                            <Box className={styles.box}>
                                <Image width={60} height={60} alt='sudoku' src={'/home/block6_sudoku7.png'} />
                                <span>Aggregated flash loanslending</span>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className={styles.item}>
                            <Box className={styles.box}>
                                <Image width={60} height={60} alt='sudoku' src={'/home/block6_sudoku8.png'} />
                                <span>Aggregated DEX marketplace</span>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className={styles.item}>
                            <Box className={styles.box}>
                                <Image width={60} height={60} alt='sudoku' src={'/home/block6_sudoku9.png'} />
                                <span>Top pair suggestions</span>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.block7}>
                    <Image className={styles.title} width={1000} height={80} alt='boome' src={'/home/block7_title.png'} />
                    <div className={styles.content}>
                        <div className={styles.item}>
                            <p>Collateral-Fre</p>
                            <span>Flash loans do not require borrowers to provide collateral.</span>
                        </div>
                        <div className={styles.item}>
                            <p>Liquidity Provision</p>
                            <span>Flash loans can be used to provideliquidity to decentralized exchanges</span>
                        </div>
                        <div className={styles.item}>
                            <p>No Credit</p>
                            <span>Flash loans are permissionless and do not involve credit checks or traditional underwriting processes.</span>
                        </div>
                        <div className={styles.item}>
                            <p>Risk</p>
                            <span>Flash loans can be used as a risk management tool.</span>
                        </div>
                        <div className={styles.item}>
                            <p>Instant Access</p>
                            <span>Flash loans are executed instantly within a single blockchain transaction.</span>
                        </div>
                        <div className={styles.item}>
                            <p>Reduced Capital Lockup</p>
                            <span>Flash loans allow users to access capital without locking up their assets.</span>
                        </div>
                        <div className={styles.item}>
                            <p>Arbitrage</p>
                            <span>Flash loans enable traders and arbitrageurs to take advantage of price discrepancies between different cryptocurrency exchanges or DeFi platforms.</span>
                        </div>
                        <div className={styles.item}>
                            <p>Lower Costs</p>
                            <span>Flash loans can be more cost-effective compared to traditional lending platforms since they eliminate the need for intermediaries like banks and credit institutions.</span>
                        </div>
                    </div>
                </div>
                <div className={styles.block8}>
                    <p className={styles.title}>
                        <span className={styles.left}>NETWORKS</span>
                    </p>
                    <div className={styles.content}>
                        <div className={styles.item}>
                            <Image width={35} height={35} alt='icon' src={'/home/block8_icon1.png'} />
                            <div>ETHEREUM</div>
                        </div>
                        <div className={styles.item}>
                            <Image width={35} height={35} alt='icon' src={'/home/block8_icon2.png'} />
                            <div>POLYGON</div>
                        </div>
                        <div className={styles.item}>
                            <Image width={35} height={35} alt='icon' src={'/home/block8_icon3.png'} />
                            <div>BINANCE SMART CHAIN</div>
                        </div>
                        <div className={styles.item}>
                            <Image width={35} height={35} alt='icon' src={'/home/block8_icon4.png'} />
                            <div>ARBITRUM</div>
                        </div>
                        <div className={styles.item}>
                            <Image width={35} height={35} alt='icon' src={'/home/block8_icon5.png'} />
                            <div>AVALANCHE</div>
                        </div>
                        <div className={styles.item}>
                            <Image width={35} height={35} alt='icon' src={'/home/block8_icon6.png'} />
                            <div>FANTOM</div>
                        </div>
                        <div className={styles.item}>
                            <Image width={35} height={35} alt='icon' src={'/home/block8_icon7.png'} />
                            <div>METIS</div>
                        </div>
                        <div className={styles.item}>
                            <Image width={35} height={35} alt='icon' src={'/home/block8_icon8.png'} />
                            <div>OPTIMISUM</div>
                        </div>

                    </div>
                </div>
                <div className={styles.block9}>
                    <p className={styles.title}>
                        <span className={styles.left}>FLASH LOAN LENDING PROTOCOL</span>
                    </p>
                    <div className={styles.content}>
                        <div className={styles.item}>
                            <Image width={35} height={35} alt='icon' src={'/home/block9_icon1.png'} />
                            <div>AAVE</div>
                        </div>
                        <div className={styles.item}>
                            <Image width={35} height={35} alt='icon' src={'/home/block9_icon2.png'} />
                            <div>RADIANT</div>
                        </div>
                        <div className={styles.item}>
                            <Image width={35} height={35} alt='icon' src={'/home/block9_icon3.png'} />
                            <div>DYDX</div>
                        </div>
                        <div className={styles.item}>
                            <Image width={35} height={35} alt='icon' src={'/home/block9_icon4.png'} />
                            <div>UNISWAP</div>
                        </div>
                    </div>
                </div>
                <div className={styles.block10}>
                    <p className={styles.title}>
                        <span className={styles.left}>DECENTRALIZED EXCHANGES</span>
                    </p>
                    <div className={styles.content}>
                        <Image width={1000} height={250} alt='block10' src={'/home/block10_content.png'} />
                    </div>
                </div>
                <div className={styles.block11}>
                    <p className={styles.title}>
                        <span className={styles.left}>WALLETS</span>
                    </p>
                    <div className={styles.content}>
                        <Image width={1000} height={60} alt='bloc11' src={'/home/block11_content.png'} />
                    </div>
                </div>
                <div className={styles.block12}>
                    <p className={styles.title}>
                        <span className={styles.left}>DECENTRALIZED EXCHANGES AGGRAGATORS</span>
                    </p>
                    <div className={styles.content}>
                        <Image width={400} height={60} alt='bloc12' src={'/home/block12_content.png'} />
                    </div>
                </div>
                <div className={styles.block13}>
                    <p className={styles.title}>
                        <span className={styles.left}>ROADMAP</span>
                    </p>
                    <div className={styles.info}>(TIMELINE)</div>
                    <div className={styles.content}>
                        <Image width={959} height={749} alt='bloc12' src={'/home/block13_content.png'} />
                    </div>
                </div>
                <div className={styles.block14}>
                    <p className={styles.title}>
                        <span className={styles.left}>ABOUT US</span>
                    </p>
                    <div className={styles.content}>
                        <div className={styles.item}>
                            <p>WHY CHOOSE US？</p>
                            <span>BOOMERANG prepares profitable trades and keeping the execution of arbitrage trades fortrader. Smart contracts lock in the trade parameters, ensure timely execution, and facilitatethe movement of assets between different markets or platforms.By using smart contracts and Al, MoWGLl protocol can achieve a high degree ofautomation, transparency, and reliability in executing arbitrage trades without the need for manual coding and analyzing</span>
                        </div>
                        <div className={styles.item}>
                            <p>YOUR SUCCESS TRADES</p>
                            <span>·Arbitrage is the purchase and sale of an asset in order to profit from a difference in the asset's price between marketplaces.</span>
                            <span>·There is no risk of losing money should a sequence of trades not execute as expected;the transactions will be reverted due to lack of funds, because the smart contract isn'table to repay a flash loan or before others do</span>
                            <span>·It does not require any kind of prediction algorithm or stop-loss strategy, but rather itdeals with finding profitable opportunities in the present moment before they disappear</span>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <Image width={865} height={234} alt='block14' src={'/home/block14_bottom.png'} />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.left}>

                    </div>
                    <div className={styles.right}>

                    </div>
                </div>
            </div>
        </AnimatePresence>

    );
}
export default Home;
