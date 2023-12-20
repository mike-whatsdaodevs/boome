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

function Home() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div>
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
                <Image className={styles.title} width={800} height={100} alt='boome' src={'/home/block1_title.png'} />
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

            </div>
        </div>
    );
}
export default Home;
