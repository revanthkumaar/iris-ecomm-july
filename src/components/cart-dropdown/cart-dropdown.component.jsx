import React from "react";
import CartItem from '../cart-item/cart-item.component';
import CustomButton from "../custom-button/custom-button.component";
import { withRouter } from 'react-router-dom';

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
            }}
        >

        </CustomButton>
  </div>;
};


export default withRouter(CartDropdown)