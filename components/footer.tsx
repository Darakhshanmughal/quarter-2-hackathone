import type { NextPage } from "next";
import Footer1 from "./footer1";
import GroupComponent1 from "./group-component1";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <Footer1 />
      <GroupComponent1 />
    </div>
  );
};

export default Footer;
