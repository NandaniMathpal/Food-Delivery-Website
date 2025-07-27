import React, { useContext , useState } from 'react'
import './Order.css'
import { StoreContext } from '../../Context/StoreContext';
import { Link } from 'react-router-dom';

const Order = () => {

  const {getTotalCartAmount, setCartItems} = useContext(StoreContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(getTotalCartAmount()===0){
      alert("Your Cart is Empty")
      return
    }
    setIsSubmitted(true)
    setCartItems({});
  }

  return (
    <form action="" className="place-order" onSubmit={handleSubmit}>
      {isSubmitted ? (
        <div className="order-success">
          <h2>Order Placed Successfully !</h2>
          <p>Thank you for your order. We’ll get your food to you shortly.</p>
          <Link to="/" className="btn">Go Back to Home</Link>
        </div>
      ) : (
        <>
      <div className="place-order-left">
        <p className="title">Delivery Infomation</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' required/>
          <input type="text" placeholder='Last Name'required/>
        </div>
        <input type="text" placeholder='Email Addres'required/>
        <input type="text" placeholder='Street'required/>
        <div className="multi-fields">
          <input type="text" placeholder='City'required/>
          <input type="text" placeholder='State'required/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code'required/>
          <input type="text" placeholder='Country'required/>
        </div>
        <input type="text" placeholder='Phone'required/>
        </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            <button type='submit'>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </>
  )}
    </form>
  );
};

export default Order;
