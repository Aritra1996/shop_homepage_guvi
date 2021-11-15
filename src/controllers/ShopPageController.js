import { ShopPage } from '../components/ShopPage';
import React from 'react';

export class ShopPageController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cartCount: 0
        }
        this.addItemInCart = this.addItemInCart.bind(this)
        this.removeItemFromCart = this.removeItemFromCart.bind(this)
    }

    scrollToCartButton() {
        const elem = document.querySelectorAll("button[class^=NavBar_cartButtonContainer]")
        elem[0].scrollIntoView();
    }

    addItemInCart() {
        this.setState({
            cartCount: this.state.cartCount + 1
        })
        this.scrollToCartButton()
    }

    removeItemFromCart() {
        this.setState({
            cartCount: this.state.cartCount - 1
        })
        this.scrollToCartButton()
    }

    render() {
        return (
            <div className="App">
                <ShopPage cartCount={this.state.cartCount} handleAddCart={this.addItemInCart} handleRemoveCart={this.removeItemFromCart} scrollToCartButton={this.scrollToCartButton}/>
            </div>
        );
    }
    
}

  