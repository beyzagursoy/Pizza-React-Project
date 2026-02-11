import Header from './components/Header'
import MenuCategories from './components/MenuCategories'
import Cards from './components/Cards'
import Product from './components/Product'
import Footer from './components/Footer'
import Copyright from './components/Copyright'
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