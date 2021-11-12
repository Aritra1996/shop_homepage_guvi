import React from "react";
import styles from "../styles/ProductImage.module.css"

export class ProductImage extends React.Component {
    render() {
        return(
            <div className={styles.productImage}>
                <p>450 x 300</p>
            </div>
        )
    }
}