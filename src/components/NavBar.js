import React from "react";
import styles from "../styles/NavBar.module.css"

export function NavBar (props) {
    return (
        <div className={styles.navBarContainer}>
            <div className={styles.header}>Start BootStrap</div>
            <div className={styles.navItems}>
                <div>Home</div>
                <div className={styles.navItemGrey}>About</div>
                <div className={styles.navItemGrey}>Shop</div>
            </div>
            <div className={styles.cartContainer}>
                <button className={styles.cartButtonContainer}>
                    <div>&#128722;</div>
                    <div>Cart</div>
                    <div className={styles.cartCounter}>{props.cartCount}</div>
                </button>
            </div>
        </div>
    )
}