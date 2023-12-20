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
const pages = ['HOME', 'INTRODUCE', 'PRODUCT', 'COOPERATE', 'COMPANY'];

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

        </div>
    );
}
export default Home;
