import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./product-items.module.css";

export type ProductItemsType = {
  className?: string;
  productImage: string;
  accumsanTincidunt?: string;
  group35: string;

  /** Style props */
  productTitleWrapHeight?: CSSProperties["height"];
  productBrandJustifyContent?: CSSProperties["justifyContent"];
  productBrandGap?: CSSProperties["gap"];
  productBrandFlex?: CSSProperties["flex"];
  accumsanTinciduntFlex?: CSSProperties["flex"];
  accumsanTinciduntDisplay?: CSSProperties["display"];
  accumsanTinciduntMinWidth?: CSSProperties["minWidth"];
};

const ProductItems: NextPage<ProductItemsType> = ({
  className = "",
  productImage,
  productTitleWrapHeight,
  productBrandJustifyContent,
  productBrandGap,
  productBrandFlex,
  accumsanTincidunt,
  accumsanTinciduntFlex,
  accumsanTinciduntDisplay,
  accumsanTinciduntMinWidth,
  group35,
}) => {
  const productTitleWrapStyle: CSSProperties = useMemo(() => {
    return {
      height: productTitleWrapHeight,
    };
  }, [productTitleWrapHeight]);

  const productBrandStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: productBrandJustifyContent,
      gap: productBrandGap,
      flex: productBrandFlex,
    };
  }, [productBrandJustifyContent, productBrandGap, productBrandFlex]);

  const accumsanTinciduntStyle: CSSProperties = useMemo(() => {
    return {
      flex: accumsanTinciduntFlex,
      display: accumsanTinciduntDisplay,
      minWidth: accumsanTinciduntMinWidth,
    };
  }, [
    accumsanTinciduntFlex,
    accumsanTinciduntDisplay,
    accumsanTinciduntMinWidth,
  ]);

  return (
    <div className={[styles.productItems, className].join(" ")}>
      <div className={styles.parent}>
        <div className={styles.div}>(32)</div>
        <div className={styles.sofa}>Sofa</div>
        <div className={styles.arm}>arm</div>
        <div className={styles.frameChild} />
        <Image
          className={styles.productImageIcon}
          loading="lazy"
          width={314}
          height={218}
          alt=""
          src={productImage}
        />
        <div className={styles.productInfo}>
          <div className={styles.productName}>
            <div className={styles.productNameContainer}>
              <div className={styles.productTitle}>
                <div
                  className={styles.productTitleWrap}
                  style={productTitleWrapStyle}
                >
                  <div
                    className={styles.productBrand}
                    style={productBrandStyle}
                  >
                    <div
                      className={styles.accumsanTincidunt}
                      style={accumsanTinciduntStyle}
                    >
                      {accumsanTincidunt}
                    </div>
                    <div className={styles.productRating}>
                      <div className={styles.productStarRating}>
                        <div className={styles.productStarRatingChild} />
                        <div className={styles.productStarRatingItem} />
                        <div className={styles.productStarRatingInner} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.group}>
                    <div className={styles.div1}>$26.00</div>
                    <div className={styles.productSeparator}>
                      <div className={styles.stars}>$52.00</div>
                    </div>
                    <div className={styles.priceRating}>
                      <Image
                        className={styles.antDesignstarFilledIcon}
                        loading="lazy"
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
              className={styles.productNameChild}
              loading="lazy"
              width={145}
              height={34}
              alt=""
              src={group35}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
