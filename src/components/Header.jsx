import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { PiShoppingCart } from 'react-icons/pi'

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const { cart, removeFromCart, clearCart } = useCart()
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0)
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
  
  return (  
    <header className='bg-main-dark shadow-md p-4 flex justify-between items-center'>
      <h1 className='text-3xl font-light text-light logo-font'>
        Wain
      </h1>
      <div className='relative'>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className='cursor-pointer'
        >
          <PiShoppingCart className='text-3xl text-light' />
          {itemCount > 0 && (
            <span className='absolute -top-2 -right-2 bg-support text-main-dark text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold'>
              {itemCount}
            </span>
          )}
        </button>
        {showDropdown && (
          <div className='absolute right-0 mt-2 w-80 bg-light border rounded shadow-md z-50'>
            <div className='p-4'>
              <h2 className='font-medium text-lg mb-2 text-main-dark'>
                Cart Items
              </h2>
              {cart.length === 0 ? (
                <p className='text-dark text-sm'>
                  Cart is Empty
                </p>
              ) : (
                <>
                  <ul className='max-h-60 overflow-y-auto divide-y divide-grey-4'>
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className='flex justify-between items-center py-2'
                      >
                        <div>
                          <p className='font-medium'>
                            {item.name}
                          </p>
                          <p className='text-sm text-dark'>
                            {item.qty} x £{item.price}
                          </p>
                        </div>
                        <button
                          onClick={
                            () => removeFromCart(item.id)
                          }
                          className='text-sm text-main-dark hover:text-main transitioning'>
                          Remove
                        </button>
                      </li>
                    ))}  
                  </ul>
                  <div className='mt-4 flex justify-between '>
                    <span className='font-medium'>
                      Total:
                    </span>
                    <span className='font-semibold text-main-dark'>
                      £{total}
                    </span>  
                  </div>
                  <button
                    onClick={clearCart}
                    className='bg-main-dark text-light hover:bg-main mt-3 px-4 py-2 w-full rounded font-medium transitioning'
                  >
                    Clear Cart  
                  </button> 
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
 
export default Header