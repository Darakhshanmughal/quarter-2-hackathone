import type { NextPage } from "next";
import Image from "next/image";
import styles from "./copyright-bottom.module.css";

export type CopyrightBottomType = {
  className?: string;
};

const CopyrightBottom: NextPage<CopyrightBottomType> = ({ className = "" }) => {
  return (
    <div className={[styles.copyrightBottom, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.webecyAll}>©Webecy - All Rights Reserved</div>
        <div className={styles.socialMediaIcons}>
          <Image
            className={styles.socialMediaIconsChild}
            width={19}
            height={19}
            alt=""
            src="/group-202.svg"
          />
          <Image
            className={styles.socialMediaIconsChild}
            width={19}
            height={19}
            alt=""
            src="/group-203.svg"
          />
          <Image
            className={styles.socialMediaIconsChild}
            width={19}
            height={19}
            alt=""
            src="/group-204.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CopyrightBottom;
