import type { NextPage } from "next";
import Image from "next/image";
import styles from "./heading-bar.module.css";

export type HeadingBarType = {
  className?: string;
};

const HeadingBar: NextPage<HeadingBarType> = ({ className = "" }) => {
  return (
    <div className={[styles.headingBar, className].join(" ")}>
      <div className={styles.headingRect} />
      <div className={styles.headingContent}>
        <div className={styles.userInfo}>
          <div className={styles.userLeft}>
            <div className={styles.userIcon}>
              <Image
                className={styles.uilenvelopeAltIcon}
                loading="lazy"
                width={16}
                height={16}
                alt=""
                src="/uilenvelopealt.svg"
              />
            </div>
            <a className={styles.mhhasanulgmailcom}>mhhasanul@gmail.com</a>
          </div>
          <div className={styles.userRight}>
            <Image
              className={styles.bxbxPhoneCallIcon}
              loading="lazy"
              width={16}
              height={16}
              alt=""
              src="/bxbxphonecall.svg"
            />
            <a className={styles.a}>(12345)67890</a>
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.brand}>
          <a className={styles.english}>English</a>
        </div>
        <div className={styles.menu}>
          <Image
            className={styles.menuChild}
            loading="lazy"
            width={301}
            height={24}
            alt=""
            src="/group-17.svg"
          />
          <div className={styles.menuItems}>
            <a className={styles.usd}>USD</a>
          </div>
          <div className={styles.menuItems1}>
            <a className={styles.login}>Login</a>
          </div>
          <div className={styles.menuItems2}>
            <a className={styles.wishlist}>Wishlist</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingBar;
