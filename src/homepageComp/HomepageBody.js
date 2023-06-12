import React from 'react'
import Navbar from '../reuseable/Navbar';

// imported pictures section
import candle from '../images/candle.jpg';
import accessory from "../images/accessory.jpg";
import doggy from "../images/doggy.jpg";
import pin from '../images/pin.jpg';
import tote from "../images/tote.jpg";
import tshirt from "../images/tshirt.jpg";



export default function HomepageBody() {
  return (
    <div className='body-container'>
        <div className='type-of-products-container'>
            <div className='products-wrapper'>
                <header>
                    <h1>All The Funky Stuff We Sell</h1>
                </header>
                <div className='products-grid'>
                    <div className='productImg1 productImg'><img src={candle} className="product-image" />
                        <p>Candles</p>
                    </div>
                    <div className='productImg2 productImg'><img src={accessory} className="product-image"/>
                        <p>Accessories</p>
                    </div>
                    <div className='productImg3 productImg'><img src={doggy} className="product-image" />
                        <p>T-shirts</p>
                    </div>
                    <div className='productImg4 productImg'><img src={pin} className="product-image" />
                    <p>Pins</p></div>
                    <div className='productImg5 productImg'><img src={tote} className="product-image" />
                        <p>Tote Bags</p>
                    </div>
                    <div className='productImg6 productImg'><img src={tshirt} className="product-image" />
                        <p>Fake Band T's</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='form-container'>
        </div>

    </div>
  )
}
