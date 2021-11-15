import React from "react";
import { ProductImage } from "../components/ProductImage";
import { ProductDescriptionController } from "./ProductDescriptionController";

import styles from "../styles/Products.module.css"

export class ProductsController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productDescriptions: [
                ['Fancy Product', '0', 'None', '$40.00 - $80.00', 'View options'],
                ['Special Item', '5', '$20.00', '$18.00', 'Add to cart'],
                ['Sale Item', '0', '$50.00', '$25.00', 'Add to cart'],
                ['Popular Item', '5', 'None', '$40.00', 'Add to cart'],
                ['Sale Item', '0', '$50.00', '$25.00', 'Add to cart'],
                ['Fancy Product', '0', 'None', '$120.00 - $280.00', 'View Options'],
                ['Special Item', '5', '$20.00', '$18.00', 'Add to cart'],
                ['Popular Item', '5', 'None', '$40.00', 'Add to cart']
            ]
        }
        this.handleAddCart = this.handleAddCart.bind(this)
        this.handleRemoveCart = this.handleRemoveCart.bind(this)
        
    }

    handleAddCart(id) {
        let productDescriptions = this.state.productDescriptions
        productDescriptions[id][4] = 'Remove from cart'
        this.setState({
            productDescriptions: productDescriptions
        })
        this.props.handleAddCart()
    }

    handleRemoveCart(id) {
        let productDescriptions = this.state.productDescriptions
        productDescriptions[id][4] = 'Add to cart'
        this.setState({
            productDescriptions: productDescriptions
        })
        this.props.handleRemoveCart()
    }

    render() {

        const products = []
        for ( let i=0; i< this.state.productDescriptions.length; i++) {
            if(this.state.productDescriptions[i][4]==='Add to cart') {
                products.push(
                    <div className={styles.product} key={i.toString()}>
                        <ProductImage/>
                        <ProductDescriptionController description={this.state.productDescriptions[i]} handleClick={this.handleAddCart} id={i.toString()}/>
                    </div>     
                )
            } else if(this.state.productDescriptions[i][4]==='Remove from cart') {
                products.push(
                    <div className={styles.product} key={i.toString()}>
                        <ProductImage/>
                        <ProductDescriptionController description={this.state.productDescriptions[i]} handleClick={this.handleRemoveCart} id={i.toString()}/>
                    </div>
                )
            } else {
                products.push(
                    <div className={styles.product} key={i.toString()}>
                        <ProductImage/>
                        <ProductDescriptionController description={this.state.productDescriptions[i]} handleClick={this.props.scrollToCartButton}/>
                    </div>
                )
            }
            
        }

        return (
            <div className={styles.products}>
                {products}
            </div>
        )
    }
}