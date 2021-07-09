import React from "react";
import CartItem from '../cart-item/cart-item.component';
import CustomButton from "../custom-button/custom-button.component";
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
        <CustomButton
            onClick= {() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}
        >
        </CustomButton>
  </div>;
};

const mapStateToProps = // later

export default withRouter(connect(mapStateToProps)(CartDropdown))