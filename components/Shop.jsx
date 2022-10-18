import styles from "../styles/Shop.module.scss";
import chrome from "../public/assets/chrome.svg";
import apple from "../public/assets/apple.svg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
const Shop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.app}>
          <div className={styles.image}>
            <a
              href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={chrome} alt="chrome logo" width={60} height={50} />
            </a>
          </div>
          <div className={styles.text}>
            available in the <br /> <span>chrome web store</span>
          </div>
        </div>
        <div className={styles.app}>
          <div className={styles.image}>
            <a
              href="https://apps.apple.com/app/ratepunk/id1607823726"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={apple} alt="apple logo" width={60} height={50} />
            </a>{" "}
          </div>
          <div className={styles.text}>
            available in the <br /> <span>apple app store</span>
          </div>
        </div>
        <div className={styles.review}>
          <div className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div>Chrome Store reviews</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
