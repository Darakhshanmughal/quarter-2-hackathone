import type { NextPage } from "next";
import Image from "next/image";
import styles from "./page-sort-by.module.css";

export type PageSortByType = {
  className?: string;
};

const PageSortBy: NextPage<PageSortByType> = ({ className = "" }) => {
  return (
    <div className={[styles.pageSortBy, className].join(" ")}>
      <div className={styles.ecommerceAcceoriesFashionParent}>
        <h3
          className={styles.ecommerceAcceories}
        >{`Ecommerce Acceories & Fashion item `}</h3>
        <div className={styles.about9620Results}>
          About 9,620 results (0.62 seconds)
        </div>
      </div>
      <div className={styles.perPage}>
        <div className={styles.pageOptions}>
          <div className={styles.pageCount}>
            <div className={styles.pageDropdown}>
              <div className={styles.pageLabel}>
                <div className={styles.perPage1}>Per Page:</div>
              </div>
              <div className={styles.dropdownBackgroundWrapper}>
                <div className={styles.dropdownBackground} />
              </div>
            </div>
          </div>
          <div className={styles.sortDropdown}>
            <div className={styles.sortOptions}>
              <div className={styles.sortLabel}>
                <div className={styles.sortBy}>Sort By:</div>
              </div>
              <div className={styles.sortSelection}>
                <div className={styles.sortSelectionBackgroundWrapper}>
                  <div className={styles.dropdownBackground} />
                </div>
                <div className={styles.sortSelectionInner}>
                  <div className={styles.bestMatchParent}>
                    <div className={styles.bestMatch}>Best Match</div>
                    <div className={styles.sortChevron}>
                      <Image
                        className={styles.akarIconschevronDown}
                        width={12}
                        height={12}
                        alt=""
                        src="/akariconschevrondown-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.viewOptions}>
            <div className={styles.viewSelection}>
              <div className={styles.view}>View:</div>
              <div className={styles.viewIcons}>
                <Image
                  className={styles.claritygridViewSolidIcon}
                  width={12}
                  height={12}
                  alt=""
                  src="/claritygridviewsolid.svg"
                />
              </div>
              <div className={styles.viewIcons}>
                <Image
                  className={styles.claritygridViewSolidIcon}
                  width={12}
                  height={12}
                  alt=""
                  src="/fasolidlist.svg"
                />
              </div>
            </div>
          </div>
          <input className={styles.pageOptionsChild} type="text" />
        </div>
      </div>
    </div>
  );
};

export default PageSortBy;
