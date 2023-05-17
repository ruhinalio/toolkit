import React from 'react';
import "./CartMessage.scss";
import { correct } from "../../utils/images";

const CartMessage = () => {
  return (
    <div className='cart-message text-center'>
      <div className='cart-message-icon'>
        <img src = {correct} alt = "" />
      </div>
      <h6 className='text-white fs-14 fw-5'>QAQA MEHSULU UJE GÖTÜ GET :)</h6>
    </div>
  )
}

export default CartMessage