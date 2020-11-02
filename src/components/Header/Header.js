import React, { Component } from 'react';
import { connect } from "react-redux";


class Header extends Component {


    render() {
        return (
            <header className="App-header" >
                <h1 className="App-title">Prime Pizza</h1>
                <h2>${this.props.calculatePizzaTotal(this.props.cart)}</h2>
            </header >
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        cart: reduxState.cartReducer
    }
}

export default connect(mapStateToProps)(Header);