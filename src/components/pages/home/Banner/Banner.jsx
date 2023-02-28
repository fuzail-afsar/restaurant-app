import './Banner.css'
import { Carousel } from 'antd';

const Banner = () => (
    <Carousel autoplay>
        <div className='bannerDiv1'>
            <div>
                <h1 className='foodTitle'>PIZZA</h1>
                <h1 className='foodDetails'>Crispy Mixed Pizza<br /> With Olives</h1>
            </div>
            <button className='btn'>Shop Now</button>
        </div>
        <div className='bannerDiv2'>
            <div>
                <h1 className='foodTitle'>BURGER</h1>
                <h1 className='foodDetails'>Crispy Veg Double<br /> Patty Burger</h1>
            </div>
            <button className='btn'>Shop Now</button>
        </div>
    </Carousel>
);

export default Banner