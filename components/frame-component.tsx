import type { NextPage } from "next";
import HeadingBar from "./heading-bar";
import NavBar from "./nav-bar";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <header className={[styles.headingBarParent, className].join(" ")}>
      <HeadingBar />
      <div className={styles.content}>
        <NavBar />
      </div>
    </header>
  );
};

export default FrameComponent;
