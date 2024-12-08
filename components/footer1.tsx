import type { NextPage } from "next";
import styles from "./footer1.module.css";

export type Footer1Type = {
  className?: string;
};

const Footer1: NextPage<Footer1Type> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerBackground} />
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.hektoWrapper}>
            <h1 className={styles.hekto}>Hekto</h1>
          </div>
          <div className={styles.newsletterContainerParent}>
            <div className={styles.newsletterContainer}>
              <div className={styles.emailInputWrapperParent}>
                <div className={styles.emailInputWrapper}>
                  <div className={styles.emailInput}>
                    <input className={styles.inputBorder} type="text" />
                    <div className={styles.enterEmailAddress}>
                      Enter Email Address
                    </div>
                  </div>
                </div>
                <div className={styles.contactInfo}>Contact Info</div>
              </div>
              <div className={styles.signUpButton}>
                <div className={styles.buttonBackground} />
                <div className={styles.signUp}>Sign Up</div>
              </div>
            </div>
            <div className={styles.princessRoadLondon}>
              17 Princess Road, London, Greater London NW1 8JR, UK
            </div>
          </div>
        </div>
      </div>
      <div className={styles.catagoriesParent}>
        <h3 className={styles.catagories}>Catagories</h3>
        <div className={styles.categoryList}>
          <div className={styles.laptopsComputers}>{`Laptops & Computers`}</div>
          <div
            className={styles.camerasPhotography}
          >{`Cameras & Photography`}</div>
          <div className={styles.smartPhones}>{`Smart Phones & Tablets`}</div>
          <div className={styles.videoGames}>{`Video Games & Consoles`}</div>
          <div className={styles.waterproofHeadphones}>
            Waterproof Headphones
          </div>
        </div>
      </div>
      <div className={styles.customerSupport}>
        <div className={styles.supportOptions}>
          <div className={styles.supportLinks}>
            <h3 className={styles.customerCare}>Customer Care</h3>
          </div>
          <div className={styles.supportList}>
            <div className={styles.myAccount}>My Account</div>
            <div className={styles.discount}>Discount</div>
            <div className={styles.returns}>Returns</div>
            <div className={styles.ordersHistory}>Orders History</div>
            <div className={styles.orderTracking}>Order Tracking</div>
          </div>
        </div>
        <div className={styles.pagesParent}>
          <h3 className={styles.pages}>Pages</h3>
          <div className={styles.pageList}>
            <div className={styles.blog}>Blog</div>
            <div className={styles.browseTheShop}>Browse the Shop</div>
            <div className={styles.category}>Category</div>
            <div className={styles.preBuiltPages}>Pre-Built Pages</div>
            <div className={styles.visualComposerElements}>
              Visual Composer Elements
            </div>
            <div className={styles.woocommercePages}>WooCommerce Pages</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
