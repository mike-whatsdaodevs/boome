import { Container, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { Inter } from "next/font/google";
import { Fragment } from "react";
import Image from "next/image";
import { Menu } from "@mui/icons-material";
import Script from "next/script";
import styles from "./mobile1.module.css";
const inter = Inter({
  subsets: ["latin"],
});

const flash_list = [
  {
    name: "AAVE",
    img: "/home/block7_logo1.png",
  },
  {
    name: "RADIANT",
    img: "/home/block7_logo2.png",
  },
  {
    name: "DYDX",
    img: "/home/block7_logo3.png",
  },
  {
    name: "UNISWAP",
    img: "/home/block7_logo4.png",
  },
];

const decentralized_list = [
  {
    name: "UNISWAP",
    img: "/home/block8_logo1.png",
  },
  {
    name: "PANCAKESWAP",
    img: "/home/block8_logo2.png",
  },
  {
    name: "SUSHI",
    img: "/home/block8_logo3.png",
  },
  {
    name: "CURVE",
    img: "/home/block8_logo4.png",
  },
  {
    name: "BALANCER",
    img: "/home/block8_logo5.png",
  },
  {
    name: "DODO",
    img: "/home/block8_logo6.png",
  },
  {
    name: "APE",
    img: "/home/block8_logo7.png",
  },
  {
    name: "WOOFI",
    img: "/home/block8_logo8.png",
  },
  {
    name: "HASHFLOW",
    img: "/home/block8_logo9.png",
  },
  {
    name: "PANGOLIN",
    img: "/home/block8_logo10.png",
  },
  {
    name: "SPOOKYSWAP",
    img: "/home/block8_logo11.png",
  },
  {
    name: "BISWAP",
    img: "/home/block8_logo12.png",
  },
  {
    name: "QUICKSWAP",
    img: "/home/block8_logo13.png",
  },
  {
    name: "GMX",
    img: "/home/block8_logo14.png",
  },
  {
    name: "ORCA",
    img: "/home/block8_logo15.png",
  },
  {
    name: "CLIPPER-DEX",
    img: "/home/block8_logo16.png",
  },
  {
    name: "TRADER-JOE",
    img: "/home/block8_logo17.png",
  },
  {
    name: "TRISOLARIS",
    img: "/home/block8_logo18.png",
  },
];

const wallets_list = [
  {
    name: "trust Wallet",
    img: "/home/block9_logo1.png",
  },
  {
    name: "Metamask",
    img: "/home/block9_logo2.png",
  },
  {
    name: "Wallet Connect",
    img: "/home/block9_logo3.png",
  },
  {
    name: "Rainbow",
    img: "/home/block9_logo4.png",
  },
];

const aggragators_list = [
  {
    name: "Paraswap",
    img: "/home/block10_logo1.png",
  },
  {
    name: "Paraswap",
    img: "/home/block10_logo2.png",
  },
  {
    name: "0x",
    img: "/home/block10_logo3.png",
  },
  {
    name: "Openocean",
    img: "/home/block10_logo4.png",
  },
];

export default function Mobile() {
  return (
    <Fragment>
      <Script src="/utils.js" strategy="beforeInteractive"></Script>
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
              <h5>ETHEREUM</h5>
              <img src="/mobile/networks-icon/networks-icon-2.png" />
            </div>
            <div className={styles.networks_list_item}>
              <h5>ETHEREUM</h5>
              <img src="/mobile/networks-icon/networks-icon-3.png" />
            </div>
            <div className={styles.networks_list_item}>
              <h5>ETHEREUM</h5>
              <img src="/mobile/networks-icon/networks-icon-4.png" />
            </div>
            <div className={styles.networks_list_item}>
              <h5>ETHEREUM</h5>
              <img src="/mobile/networks-icon/networks-icon-5.png" />
            </div>
            <div className={styles.networks_list_item}>
              <h5>ETHEREUM</h5>
              <img src="/mobile/networks-icon/networks-icon-6.png" />
            </div>
            <div className={styles.networks_list_item}>
              <h5>ETHEREUM</h5>
              <img src="/mobile/networks-icon/networks-icon-7.png" />
            </div>
            <div className={styles.networks_list_item}>
              <h5>ETHEREUM</h5>
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
    </Fragment>
  );
}
