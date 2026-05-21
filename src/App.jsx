import ProductList from './components/ProductList'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <div className='min-h-screen bg-grey-4 p-6'>
        <h1 className='text-3xl mb-6 font-medium'>
          Products Catalogue
        </h1>
        <ProductList />
      </div>
    </>
    
  )
}
 
export default App

