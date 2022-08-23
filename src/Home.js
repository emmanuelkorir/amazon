import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image Processor and Full HD Videos"
            price={479.45}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71EWRyqzw0L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />
          <Product
            id="49538094"
            title="Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)"
            price={103.36}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71rXSVqET9L.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="10 Selfie Ring Light with Tripod Stand & Phone Holder"
            price={23.45}
            rating={3}
            image="https://m.media-amazon.com/images/I/71Tf+sTSeaL._AC_SY355_.jpg"
          />
          <Product
            id="23445930"
            title="Exercise Workout Bands Resistance Bands with 3 Resistance Levels 3 Colors"
            price={21.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81hYz5QrLhL._AC_SX425_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="True Wireless Earbuds, Assistrust BT618 Active Noise Cancelling Earbuds with Bluetooth 5.2, in Ear Bluetooth Headphones with Clear Call Type-C Charging Case Game Mode Voice Assistance"
            price={79.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/410xYuZ86dL._AC_SY355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
