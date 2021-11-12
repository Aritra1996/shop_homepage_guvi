import React from "react";
import styles from "../styles/NavBar.module.css"

export class NavBar extends React.Component {
    render() {
        return (
            <div className={styles.navBarContainer}>
                <div className={styles.header}>Start BootStrap</div>
                <div className={styles.navItems}>
                    <div>Home</div>
                    <div className={styles.navItemGrey}>About</div>
                    <div className={styles.navItemGrey}>Shop</div>
                </div>
                <div className={styles.cartButton}>
                    <button type='button'>Cart</button>
                </div>
            </div>
        )
    }
}