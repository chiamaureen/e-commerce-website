import Product from './Prosuct'
import Introduction from './Introduction'

function Main(props) {
  const {setCartItems}=props
  return (
    <>
      <main class="product-detail-main">
        <Product />
        <Introduction setCartItems={setCartItems}/>
      </main>
    </>
  )
}
export default Main
