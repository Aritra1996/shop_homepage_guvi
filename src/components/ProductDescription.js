import React from "react";
import styles from "../styles/ProductDescription.module.css"

export class ProductDescription extends React.Component {
    render() {
        if (this.props.rating==="0") {
            return(
                <div className={styles.descriptionContainer}>
                    <div><strong>{this.props.name}</strong></div>
                    <div>$40.00 - $80.00</div>
                    <button type="button">View Options</button>
                </div>
            )
        } else {
            const rating = [];
            for ( let i=0; i< this.props.rating; i++) {
                rating.push(<div>1</div>)
            }
            return(
                <div className={styles.descriptionContainer}>
                    <div><strong>{this.props.name}</strong></div>
                    <div>{rating}</div>
                    <div>$40.00 - $80.00</div>
                    <button type="button">View Options</button>
                </div>
            )
        }
        
    }
}