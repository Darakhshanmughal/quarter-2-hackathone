import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import PageHeader from "../components/page-header";
import PageSortBy from "../components/page-sort-by";
import Products from "../components/products";
import Footer from "../components/footer";
import CopyrightBottom from "../components/copyright-bottom";
import styles from "./index.module.css";

const ShopList: NextPage = () => {
  return (
    <div className={styles.shopList}>
      <FrameComponent />
      <PageHeader />
      <section className={styles.filter}>
        <div className={styles.filterOptions}>
          <div className={styles.sortBy}>
            <PageSortBy />
          </div>
          <Products />
        </div>
      </section>
      <section className={styles.imageContainer}>
        <Image
          className={styles.image1174Icon}
          loading="lazy"
          width={904}
          height={93}
          alt=""
          src="/image-1174@2x.png"
        />
      </section>
      <section className={styles.footerContainer}>
        <Footer />
        <CopyrightBottom />
      </section>
    </div>
  );
};

export default ShopList;
