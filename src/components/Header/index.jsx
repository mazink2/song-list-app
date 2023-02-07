/*
    Header:
    Component that renders the headers
*/

import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    // Adds scrolled class to header to give it a background color
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setScrolled(window.pageYOffset > 50),
            );
        }
    }, []);

    return (
        <header
            className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
            id="header"
        >
            <div className={styles.headerContent}>
                <a href="/" class={styles.logo}>
                    Demo
                </a>
            </div>
        </header>
    );
};

export default Header;
