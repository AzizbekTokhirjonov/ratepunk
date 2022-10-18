import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import logo from "../public/assets/logo.svg";
import email from "../public/assets/email-footer.svg";
import instagram from "../public/assets/instagram.svg";
import facebook from "../public/assets/facebook.svg";
import linkedin from "../public/assets/linkedin.svg";
import twitter from "../public/assets/twitter.svg";
import tiktok from "../public/assets/tiktok.svg";

const socialSites = [instagram, facebook, linkedin, twitter, tiktok];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.brand}>
            <a href="#!">
              <Image src={logo} alt="logo" width={125} height={32} />
            </a>
          </div>
          <p>
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you’re getting the best deal!
          </p>
          <div className={styles.copyright}>
            © 2021 Ratepunk. All Rights Reserved.
          </div>
        </div>
        <div className={styles.lists}>
          <ul>
            <li>
              <h4>Quick Links</h4>
            </li>
            <li>Price Comparison</li>
            <li>Chrome Extension</li>
            <li>How It Works</li>
            <li>Ratepunk Blog</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li className={styles.contact}>
              <h4>Contact</h4>
              <div className={styles.email}>
                <div className={styles.icon}>
                  <Image src={email} alt="logo" width={16} height={13} />
                </div>
                <div className={styles.text}>hi@ratepunk.com</div>
              </div>
            </li>
            <li className={styles.social}>
              <h4>Social</h4>
              <div className={styles.icons}>
                <ul>
                  {socialSites.map((social, i) => (
                    <li key={i}>
                      <Image
                        src={social}
                        alt="social logo"
                        width={16}
                        height={16}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.copyrightMobile}>
          © 2021 Ratepunk. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
