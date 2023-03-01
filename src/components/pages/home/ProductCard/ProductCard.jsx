import heartIcon from "../../../../assets/svgs/heart.svg";
import shoppingCart from "../../../../assets/svgs/shopping-cart.svg";
import eyeIcon from "../../../../assets/svgs/eye.svg";

import "./ProductCard.css";

function ProductCard({ imageUrl, price, toppings }) {
  return (
    <div className="main">
      <div className="product-image">
        <img src={imageUrl} alt="product-image" />
      </div>
      <div className="product-text">
        <span className="p-starts"></span>
        <p className="p-des">{toppings}</p>
        <p className="p-price">${price}</p>
        <span className="p-percent">-5%</span>
        <div className="icon-list">
          <div className="icon">
            <img src={heartIcon} alt="heart-icon" height={20} width={20} />
          </div>
          <div className="icon">
            <img src={shoppingCart} alt="heart-icon" height={20} width={20} />
          </div>
          <div className="icon">
            <img src={eyeIcon} alt="heart-icon" height={20} width={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
