import React, { useEffect } from 'react';
import './App.css';

function Payment({ cart, setCart }) {
  const totalAmount = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  useEffect(() => {
    if (cart.length === 0) return; // Skip if cart is empty

    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_SANDBOX_CLIENT_ID&currency=USD'; // Replace with your Sandbox Client ID
    script.async = true;
    script.onload = () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: totalAmount,
                currency_code: 'USD'
              },
              description: 'Car Spare Parts Purchase'
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Payment successful! Thank you, ${details.payer.name.given_name}!`);
            setCart([]); // Clear cart after payment
          });
        },
        onError: (err) => {
          console.error('PayPal Error:', err);
          alert('Payment failed. Please try again.');
        }
      }).render('#paypal-button-container');
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [totalAmount, setCart]); // Re-run if total changes

  return (
    <div className="container py-5">
      <h1 className="mb-4">Payment</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add items from the <Link to="/catalog">Catalog</Link> to proceed.</p>
      ) : (
        <>
          <p>Pay for your cart total: <strong>${totalAmount}</strong></p>
          <div id="paypal-button-container"></div>
          <div className="mt-4">
            <h3>Cart Items: {cart.length}</h3>
            <ul className="list-group">
              {cart.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item.name} - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Payment;