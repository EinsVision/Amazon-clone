import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image' 
        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg' 
        alt=''
      />
      {/* Product id, title, price, rating, image */}
      <div className='home__row'>
        <Product 
          id={12345} 
          title='The Lean Startup: how contant Innovation Creates'
          price={111.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg' 
        />
        <Product 
          id={12345} 
          title='The Lean Startup: how contant Innovation Creates'
          price={111.96}
          rating={5}
          image='https://canary.contestimg.wish.com/api/webimage/5e05d57c38c90f00212405c6-large.jpg?cache_buster=3eb5368246a461790b2648cb4ebe96fb' 
        />
      </div>
      <div className='home__row'>
        <Product 
          id={12345} 
          title='The Lean Startup: how contant Innovation Creates'
          price={111.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/51TFnR7AtGL._AC_SY400_.jpg' 
        />
        <Product 
          id={12345} 
          title='The Lean Startup: how contant Innovation Creates'
          price={111.96}
          rating={5}
          image='https://lh3.googleusercontent.com/proxy/utAOi4T0bkmisB-rB8wswIs1PVuM6IfRvHIXo6xeTlLLNDoD15ZARzUhyIuBIgKVque2KW1xWTvl0KcxOTfA3DqlrSnWphFQt95od8JKuyoCIQMK8GYkdPw' 
        />
        <Product 
          id={12345} 
          title='The Lean Startup: how contant Innovation Creates'
          price={111.96}
          rating={5}
          image='https://hniesfp.imgix.net/14/images/detailed/86/Misha_Sofabed_2_blue.jpg?fit=fill&bg=0FFF&w=785&h=523&auto=format,compress' 
        />
      </div>
      <div className='home__row'>
        <Product 
          id={12345} 
          title='The Lean Startup: how contant Innovation Creates'
          price={111.96}
          rating={5}
          image='https://img5.yna.co.kr/etc/inner/KR/2020/06/30/AKR20200630178400003_01_i_P2.jpg' 
        />
      </div>
      {/* Product */}
    </div>
  )
}

export default Home
