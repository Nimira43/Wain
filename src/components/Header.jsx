import { useCart } from '../context/CartContext'
import { PiShoppingCart } from 'react-icons/pi'

const Header = () => {
  const { cart } = useCart()
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0)
  
  return (  
    <header className='bg-main-dark shadow-md p-4 flex justify-between items-center'>
      <h1 className='text-3xl font-light text-light logo-font'>
        Wain
      </h1>
      <div className='relative'>
        <PiShoppingCart className='text-3xl text-light' />
        {itemCount > 0 && (
          <span className='absolute -top-2 -right-2 bg-support text-main-dark text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold'>
            {itemCount}
          </span>
        )}
      </div>
    </header>
  )
}
 
export default Header