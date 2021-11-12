import React from "react";
import styles from "../styles/ShopBanner.module.css"

export class ShopBanner extends React.Component {
    render() {
        return (
            <div className={styles.bannerImage}>
                <div className={styles.bannerHeader}><strong>Shop in style</strong></div>
                <div className={styles.bannerContent}>With this shop homepage template</div>
            </div>
        )
    }
}