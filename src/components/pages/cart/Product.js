import { Space, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import './Product.css';

const Product = ({
  id,
  title,
  toppings,
  price,
  quantity,
  totalPrice,
  imageUrl,
}) => {
  return (
    <div className='product'>
      <div className='product__info'>
        <div className='product__info__image-box'>
          <img src={imageUrl} alt='' />
        </div>

        <Space className='product__info__text' direction='vertical'>
          <div className='title'>{title}</div>
          <div className='toppings'>{toppings}</div>
        </Space>
      </div>

      <div className='product__price'>${price}</div>

      <div className='product__quantity'>
        <div className='product__quantity__actions'>
          <button>-</button>
          {quantity}
          <button>+</button>
        </div>

        <Button type='primary' className='delete-btn'>
          <DeleteOutlined />
        </Button>
      </div>

      <div className='product__total-price'>${totalPrice}</div>
    </div>
  );
};

export default Product;
