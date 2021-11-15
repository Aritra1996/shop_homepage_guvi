import React from "react";
import styles from "../styles/ProductDescription.module.css"

export class ProductDescriptionController extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.handleClick(this.props.id)
    }

    render() {
        if (this.props.description[1]==="0") {
            if (this.props.description[2]==="None") {
                return(
                    <div className={styles.descriptionContainer}>
                        <div className={styles.description}>
                            <div className={styles.itemName}><strong>{this.props.description[0]}</strong></div>
                            <div>{this.props.description[3]}</div>
                        </div>
                        <button className={styles.productButton} onClick={this.handleClick}>{this.props.description[4]}</button>
                    </div>
                )
            } else {
                return(
                    <div className={styles.descriptionContainer}>
                        <div className={styles.description}>
                            <div className={styles.itemName}><strong>{this.props.description[0]}</strong></div>
                            <div><s>{this.props.description[2]}</s> {this.props.description[3]}</div>
                        </div>
                        <button className={styles.productButton} onClick={this.handleClick}>{this.props.description[4]}</button>
                    </div>
                )
            }
        } else {
            const rating = [];
            for ( let i=0; i< this.props.description[1]; i++) {
                rating.push(<span key={i.toString()}>&#9733;</span>)
            }
            if (this.props.description[2]==="None") {
                return(
                    <div className={styles.descriptionContainer}>
                        <div className={styles.description}>
                            <div className={styles.itemName}><strong>{this.props.description[0]}</strong></div>
                            <div className={styles.rating}>{rating}</div>
                            <div>{this.props.description[3]}</div>
                        </div>
                        <button className={styles.productButton} onClick={this.handleClick}>{this.props.description[4]}</button>
                    </div>
                )
            } else {
                return(
                    <div className={styles.descriptionContainer}>
                        <div className={styles.description}>
                            <div className={styles.itemName}><strong>{this.props.description[0]}</strong></div>
                            <div className={styles.rating}>{rating}</div>
                            <div><s>{this.props.description[2]}</s> {this.props.description[3]}</div>  
                        </div>
                        <button className={styles.productButton} onClick={this.handleClick}>{this.props.description[4]}</button>
                    </div>
                )
            }
        }
    }
}