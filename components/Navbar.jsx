import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import logo from "../public/assets/logo.svg";
import menu from "../public/assets/menu.svg";
import close from "../public/assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [activePage, setActivePage] = useState("extension");
  const handleClick = (e) => {
    e.preventDefault();
    setActive(!active);
  };
  return (
    <div className={styles.container}>
      <section className={styles.navigation}>
        <div
          className={styles.navContainer}
          style={active ? { width: "100%" } : {}}
        >
          <div className={styles.brand}>
            <a href="#!">
              <Image src={logo} alt="logo" width={125} height={32} />
            </a>
          </div>
          <nav className={styles.navbar}>
            <div className={styles.navMobile}>
              <a
                id={styles.navToggle}
                className={active ? styles.active : null}
                href="#!"
                onClick={handleClick}
              >
                {!active ? (
                  <Image src={menu} alt="menu" width={32} height={32} />
                ) : (
                  <Image src={close} alt="close" width={32} height={32} />
                )}
              </a>
            </div>
            <ul
              style={
                active
                  ? { display: "block", borderBottom: "1px solid #1F343E" }
                  : { display: "none" }
              }
              className={styles.navList}
            >
              <li onClick={() => setActivePage("extension")}>
                <a
                  style={
                    activePage === "extension"
                      ? { color: "#4eb3e3" }
                      : { color: "#434a54" }
                  }
                  href="#!"
                >
                  Chrome Extension
                </a>
              </li>
              <li onClick={() => setActivePage("price")}>
                <a
                  style={
                    activePage === "price"
                      ? { color: "#4eb3e3" }
                      : { color: "#434a54" }
                  }
                  href="#!"
                >
                  Price Comparision
                </a>
              </li>
              <li onClick={() => setActivePage("blog")}>
                <a
                  style={
                    activePage === "blog"
                      ? { color: "#4eb3e3" }
                      : { color: "#434a54" }
                  }
                  href="#!"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
