const ProductCard = ({ product }) => {
  return (  
    <div className='bg-light rounded shadow p-4 flex flex-col'>
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
  )
}
 
export default ProductCard