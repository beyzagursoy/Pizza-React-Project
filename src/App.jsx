import Header from './components/Header/Header'
import MenuCategories from './components/MenuCategories/MenuCategories'
import Cards from './components/Cards/Cards'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'
import Copyright from './components/Copyright/Copyright'
import OrderForm from './components/OrderForm'

import { useState } from 'react'



const App = () => {
  const [activePage, setActivePage] = useState('home');


  return (
    <>
      {activePage === 'home' ? (
        <>
          <Header setActivePage={setActivePage} />
          <MenuCategories />
          <Cards setActivePage={setActivePage} />
          <Product />
        </>
      ) : (
        <>
          <OrderForm setActivePage={setActivePage} />
        </>
      )}
      <Footer />
      <Copyright />
    </>
  )
}

export default App