import type { NextPage } from "next";
import Image from "next/image";
import styles from "./group-component1.module.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.dividerParent}>
        <div className={styles.divider} />
        <div className={styles.webecyAll}>©Webecy - All Rights Reserved</div>
      </div>
      <div className={styles.socialIconsRight}>
        <div className={styles.frameGroup}>
          <Image
            className={styles.frameChild}
            width={19}
            height={19}
            alt=""
            src="/group-202.svg"
          />
          <Image
            className={styles.frameItem}
            width={19}
            height={19}
            alt=""
            src="/group-203.svg"
          />
          <Image
            className={styles.frameInner}
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

export default GroupComponent1;
