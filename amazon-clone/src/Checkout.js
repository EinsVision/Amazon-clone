import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
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
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty.</h2>
          <p>
            You have no items in your basket. To buy one or more "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className='checkout__title'>Your Shopping basket</h2>
          {/* List out all of the Checkout Products */}
          {basket?.map( item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
             />
          ))}
          
        </div>
      )}
    </div>
  )
}

export default Checkout
