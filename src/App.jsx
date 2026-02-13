import Header from './components/Header/Header'
import MenuCategories from './components/MenuCategories/MenuCategories'
import Cards from './components/Cards/Cards'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'
import Copyright from './components/Copyright/Copyright'
import OrderForm from './components/OrderForm'
import SuccessPage from './components/Order-Forms/OrderSuccess'

import { useState } from 'react'

const App = () => {
 const [activePage, setActivePage] = useState(import.meta.env.MODE === 'test' ? 'form' : 'home')

  const [orderData, setOrderData] = useState(null)

  return (
    <>
      {activePage === 'home' ? (
        <>
          <Header setActivePage={setActivePage} />
          <MenuCategories />
          <Cards setActivePage={setActivePage} />
          <Product />
        </>
      ) : activePage === 'form' ? (
        <OrderForm
          setActivePage={setActivePage}
          setOrderData={setOrderData}
        />
      ) : (
        <SuccessPage
          setActivePage={setActivePage}
          orderData={orderData}
        />
      )}

      <Footer />
      <Copyright />
    </>
  )
}

export default App
