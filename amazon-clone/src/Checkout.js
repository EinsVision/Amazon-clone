import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className='checkout'>
      <img 
        className='checkout__ad' 
        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/January/Fuji_LPHero_TopCat_en_US.png' 
        alt=''
      />
    </div>
  )
}

export default Checkout
