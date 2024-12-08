import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
  rectangle32: string;
  porttitorCum?: string;
  group35: string;

  /** Style props */
  porttitorCumMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  rectangle32,
  porttitorCum,
  porttitorCumMinWidth,
  group35,
}) => {
  const porttitorCumStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: porttitorCumMinWidth,
    };
  }, [porttitorCumMinWidth]);

  return (
    <div className={[styles.parent, className].join(" ")}>
      <div className={styles.div}>(32)</div>
      <div className={styles.sofa}>Sofa</div>
      <div className={styles.arm}>arm</div>
      <div className={styles.frameChild} />
      <Image
        className={styles.frameItem}
        width={314}
        height={218}
        alt=""
        src={rectangle32}
      />
      <div className={styles.productContainer}>
        <div className={styles.innerProductContainer}>
          <div className={styles.productDetails}>
            <div className={styles.innerProductDetails}>
              <div className={styles.productTitleContainer}>
                <div className={styles.productTitles}>
                  <div
                    className={styles.porttitorCum}
                    style={porttitorCumStyle}
                  >
                    {porttitorCum}
                  </div>
                  <div className={styles.priceDotsWrapper}>
                    <div className={styles.priceDots}>
                      <div className={styles.priceDotsChild} />
                      <div className={styles.priceDotsItem} />
                      <div className={styles.priceDotsInner} />
                    </div>
                  </div>
                </div>
                <div className={styles.ratingStars}>
                  <div className={styles.rating}>$26.00</div>
                  <div className={styles.blankRating}>
                    <div className={styles.blank}>$52.00</div>
                  </div>
                  <div className={styles.filledRating}>
                    <Image
                      className={styles.antDesignstarFilledIcon}
                      width={13}
                      height={13}
                      alt=""
                      src="/antdesignstarfilled.svg"
                    />
                    <Image
                      className={styles.antDesignstarFilledIcon}
                      width={13}
                      height={13}
                      alt=""
                      src="/antdesignstarfilled-1.svg"
                    />
                    <Image
                      className={styles.antDesignstarFilledIcon}
                      width={13}
                      height={13}
                      alt=""
                      src="/antdesignstarfilled-2.svg"
                    />
                    <Image
                      className={styles.antDesignstarFilledIcon}
                      width={13}
                      height={13}
                      alt=""
                      src="/antdesignstarfilled-3.svg"
                    />
                    <Image
                      className={styles.antDesignstarFilledIcon}
                      width={13}
                      height={13}
                      alt=""
                      src="/antdesignstarfilled-4.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </div>
            </div>
          </div>
          <Image
            className={styles.innerProductContainerChild}
            width={145}
            height={34}
            alt=""
            src={group35}
          />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
