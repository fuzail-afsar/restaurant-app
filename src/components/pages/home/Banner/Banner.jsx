import "./Banner.css";
import { Button, Carousel } from "antd";
import Container from "../../../common/container/Container";

const Banner = () => (
  <section>
    <Carousel>
      <div className="banner banner-slide-1">
        <Container>
          <div className="content">
            <h5 className="food-title">PIZZA</h5>
            <h1 className="food-detail">
              Crispy Mixed Pizza
              <br /> With Olives
            </h1>
          </div>
          <Button type="primary" size="large">
            Shop Now
          </Button>
        </Container>
      </div>
      <div className="banner banner-slide-2">
        <Container>
          <div className="content">
            <h5 className="food-title">BURGER</h5>
            <h1 className="food-detail">
              Crispy Veg Double
              <br /> Patty Burger
            </h1>
          </div>
          <Button type="primary" size="large">
            Shop Now
          </Button>
        </Container>
      </div>
    </Carousel>
  </section>
);

export default Banner;
