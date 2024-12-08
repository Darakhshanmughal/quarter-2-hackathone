import type { NextPage } from "next";
import Image from "next/image";
import styles from "./nav-bar.module.css";

export type NavBarType = {
  className?: string;
};

const NavBar: NextPage<NavBarType> = ({ className = "" }) => {
  return (
    <div className={[styles.navBar, className].join(" ")}>
      <div className={styles.searchInput}>
        <div className={styles.searchField}>
          <a className={styles.hekto}>Hekto</a>
          <div className={styles.navigationLinks}>
            <div className={styles.navLinkItems}>
              <div className={styles.homeLink}>
                <div className={styles.homeWrapper}>
                  <a className={styles.home}>Home</a>
                </div>
                <div className={styles.chevron}>
                  <Image
                    className={styles.akarIconschevronDown}
                    width={12}
                    height={12}
                    alt=""
                    src="/akariconschevrondown.svg"
                  />
                </div>
              </div>
              <div className={styles.navLinkElements}>
                <a className={styles.pages}>Pages</a>
              </div>
              <div className={styles.navLinkElements1}>
                <a className={styles.products}>Products</a>
              </div>
              <div className={styles.navLinkElements2}>
                <a className={styles.blog}>{`Blog `}</a>
              </div>
              <div className={styles.navLinkElements3}>
                <a className={styles.shop}>Shop</a>
              </div>
              <a className={styles.contact}>Contact</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.searchRectParent}>
        <div className={styles.searchRect} />
        <div className={styles.searchIconRectWrapper}>
          <div className={styles.searchIconRect} />
        </div>
        <Image
          className={styles.uilsearchIcon}
          width={24}
          height={24}
          alt=""
          src="/uilsearch.svg"
        />
      </div>
    </div>
  );
};

export default NavBar;
