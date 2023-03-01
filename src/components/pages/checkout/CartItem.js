import React from 'react';
import { Badge } from 'antd';

import './CartItem.css';

const CartItem = () => {
  return (
    <div className='cart-item'>
      <div className='cart-item__info'>
        <Badge count={5} color='#787778'>
          <div className='image'>
            <img
              src='https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UGVwcGVyb25pJTIwUGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
        </Badge>

        <div>
          <h4>Cheese And Corn Pizza</h4>
          <p>Mushrooms</p>
        </div>
      </div>

      <div className='cart-item__price'>$750.00</div>
    </div>
  );
};

export default CartItem;
