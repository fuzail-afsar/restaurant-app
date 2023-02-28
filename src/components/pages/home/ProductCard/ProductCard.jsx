import { heartIcon, eyeIcon, shoppingCart } from "../../../../assets/svgs";
import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="main">
      <div className="product-image"></div>
      <div className="product-text">
        <span className="p-starts"></span>
        <p className="p-des">French Fries Hamburger Fast Food</p>
        <p className="p-price">$370.00</p>
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
