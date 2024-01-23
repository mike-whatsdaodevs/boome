import { Container, AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { Inter } from "next/font/google";
import { Fragment } from "react";
import Image from "next/image";
import { Menu } from "@mui/icons-material";
import Script from "next/script";
import style from "./mobile1.module.css";
const inter = Inter({
  subsets: ["latin"],
});

export default function Mobile() {
  return (
    <Fragment>
      <Script src="/utils.js" strategy="beforeInteractive"></Script>
      <Container maxWidth="sm" disableGutters className={style.zero}>
        <img src="/mobile/img-zero-title.png" className={style.zero_title} />
        <img src="/mobile/img-zero-pc.png" className={style.zero_pc} />
      </Container>
      <div className={style.zero_list}>
        {/* 1 */}
        <div className={style.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-1.png"
            className={style.zero_list_item_icon}
          />
          <p className={style.zero_list_item_text}>
            Zero collateral loans - every user of Boomerang can receive loan for
            transaction
          </p>
        </div>
        {/* 2 */}
        <div className={style.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-2.png"
            className={style.zero_list_item_icon}
          />
          <p className={style.zero_list_item_text}>
            Al scans available DEXs and will present the best available trade
            options
          </p>
        </div>
        {/* 3 */}
        <div className={style.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-3.png"
            className={style.zero_list_item_icon}
          />
          <p className={style.zero_list_item_text}>
            No need to have experience or knowledge with trading bots to be
            successful trader
          </p>
        </div>
        {/* 4 */}
        <div className={style.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-4.png"
            className={style.zero_list_item_icon}
          />
          <p className={style.zero_list_item_text}>
            Al presents only profitable trades - there is no option to exescute
            trade with loss
          </p>
        </div>
        {/* 5 */}
        <div className={style.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-5.png"
            className={style.zero_list_item_icon}
          />
          <p className={style.zero_list_item_text}>Seamless user interface</p>
        </div>
        {/* 6 */}
        <div className={style.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-6.png"
            className={style.zero_list_item_icon}
          />
          <p className={style.zero_list_item_text}>
            No need to have experience or knowledge with trading bots to be
            successful trader
          </p>
        </div>
        {/* 7 */}
        <div className={style.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-7.png"
            className={style.zero_list_item_icon}
          />
          <p className={style.zero_list_item_text}>
            Aggregated flash loanslending
          </p>
        </div>
        {/* 8 */}
        <div className={style.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-8.png"
            className={style.zero_list_item_icon}
          />
          <p className={style.zero_list_item_text}>
            Aggregated DEX marketplace
          </p>
        </div>
        {/* 9 */}
        <div className={style.zero_list_item}>
          <img
            src="/mobile/zero-icon/img-icon-9.png"
            className={style.zero_list_item_icon}
          />
          <p className={style.zero_list_item_text}>Top pair suggestions</p>
        </div>
      </div>
    </Fragment>
  );
}
