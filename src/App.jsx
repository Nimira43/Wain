import { useState, useEffect } from 'react'

const App = () => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setErrors ] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:8000/products')
        
        if (!res.ok) throw new Error('Failed to fetch products.')
        
        const data = await res.json()
        console.log(data)
        setProducts(data)
      } catch (err) {
        setErrors(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (  
    <div className='min-h-screen bg-grey-4 p-6'>
      <h1 className='text-3xl text-main logo-font mb-6'>
        Wain
      </h1>
      {loading && (
        <p>Loading...</p>
      )}
      {error && (
        <div className='error'>
          Error: {error}
        </div>
      )}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-light rounded shadow p-4 flex flex-col'
          >
            <img
              src={product.image}
              alt={product.name}
              className='h-40 object-cover rounded mb-4'
            />
            <h2 className='text-xl font-medium mb-2'>
              {product.name}
            </h2>
            <p className='grey-1 font-normal text-sm mb-2'>
              {product.description}
            </p>
            <p className='font-semibold text-lg text-main'>
              £{product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
 
export default App

