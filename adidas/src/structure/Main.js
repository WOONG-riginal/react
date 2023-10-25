import React from 'react'
import Homepage from '../components/Homepage'
import Promotion from '../components/Promotion'
import Seasonoff from '../components/Seasonoff'
import Rainydays from '../components/Rainydays'
import Products from '../components/Products'
import Banner from '../components/Banner'


function Main() {
  return (
    <main>
        <Homepage/>
        <Promotion/>
        <Seasonoff/>
        <Rainydays/>
        <Products/>
        <Banner />
    </main>
  )
}

export default Main