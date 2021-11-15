import React from 'react';
import { NavBar } from '../components/NavBar';

export function NavBarController(props) {
    return(
        <NavBar cartCount={props.cartCount} handleAddCart={props.handleAddCart}/>
    )           
}