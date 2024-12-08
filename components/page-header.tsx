import type { NextPage } from "next";
import Image from "next/image";
import styles from "./page-header.module.css";

export type PageHeaderType = {
  className?: string;
};

const PageHeader: NextPage<PageHeaderType> = ({ className = "" }) => {
  return (
    <section className={[styles.pageHeader, className].join(" ")}>
      <div className={styles.breadcrumb}>
        <Image
          className={styles.breadcrumbChild}
          loading="lazy"
          width={1920}
          height={286}
          alt=""
          src="/rectangle-115.svg"
        />
        <div className={styles.shopListParent}>
          <h1 className={styles.shopList}>Shop List</h1>
          <div className={styles.breadcrumList}>
            <div className={styles.breadcrumItems}>
              <a className={styles.home}>{`Home `}</a>
              <div className={styles.breadcrumLinks}>.</div>
              <div className={styles.pages}>Pages</div>
              <div className={styles.breadcrumLinks1}>.</div>
              <div className={styles.shopList1}>Shop List</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
