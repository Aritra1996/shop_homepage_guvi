import React from "react";
import { ProductImage } from "./ProductImage";
import { ProductDescription } from "./ProductDescription";

import styles from "../styles/Products.module.css"

export class Products extends React.Component {
    render() {
        return (
            <div className={styles.products}>
                <div className={styles.product}>
                    <ProductImage/>
                    <ProductDescription name='Fancy Product' rating='0' oldPrice='None' currentPrice='$40.00 - $80.00' buttonText='View options'/>
                </div>
                <div className={styles.product}>
                    <ProductImage/>
                    <ProductDescription name='Special Item' rating='5' oldPrice='$20.00' currentPrice='$18.00' buttonText='Add to cart'/>
                </div>
                <div className={styles.product}>
                    <ProductImage/>
                    <div>Sale Item</div>
                    <div>$50.00 $25.00</div>
                    <button type="button">Add to cart</button>
                </div>
                <div className={styles.product}>
                    <ProductImage/>
                    <div>Popular Item</div>
                    <div>$40.00</div>
                    <button type="button">Add to cart</button>
                </div>
                <div className={styles.product}>
                    <ProductImage/>    
                    <div>Sale Item</div>
                    <div>$50.00 $25.00</div>
                    <button type="button">Add to cart</button>
                </div>
                <div className={styles.product}>
                    <ProductImage/>    
                    <div>Fancy Product</div>
                    <div>$120.00 - $280.00</div>
                    <button type="button">View Options</button>
                </div>
                <div className={styles.product}>
                    <ProductImage/>
                    <div>Special Item</div>
                    <div>$20.00 - $18.00</div>
                    <button type="button">Add to cart</button>
                </div>
                <div className={styles.product}>
                    <ProductImage/>
                    <div>Popular Item</div>
                    <div>$40.00</div>
                    <button type="button">Add to cart</button>
                </div>
            </div>
        )
    }
}