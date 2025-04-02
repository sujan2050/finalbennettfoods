import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowLeft } from 'lucide-react';

function Cart() {
  const [showPayment, setShowPayment] = useState(false);
  const totalAmount = 450; // This would be calculated based on actual cart items

  const paymentQRValue = `upi://pay?pa=merchant@upi&pn=BennettFoods&am=${totalAmount}&cu=INR&tn=Order%20Payment`;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={20} className="mr-2" />
            Back to Restaurants
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Your Cart</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {/* Sample cart item */}
                <li className="py-6 flex">
                  <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&auto=format&fit=crop"
                      alt="Chicken Kathi Roll"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-1 flex flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>Chicken Kathi Roll</h3>
                        <p className="ml-4">₹120</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Quantity: 2</p>
                    </div>
                  </div>
                </li>
                {/* Add more cart items here */}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>₹450</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Delivery charges included.</p>
            <div className="mt-6">
              <button
                onClick={() => setShowPayment(true)}
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </main>

      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Scan to Pay</h2>
            <div className="flex justify-center mb-4">
              <QRCodeSVG value={paymentQRValue} size={200} />
            </div>
            <div className="text-center mb-4">
              <p className="text-gray-600">Total Amount</p>
              <p className="text-2xl font-bold">₹{totalAmount}</p>
            </div>
            <button
              onClick={() => setShowPayment(false)}
              className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;