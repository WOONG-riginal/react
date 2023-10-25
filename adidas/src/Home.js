import React, { Fragment } from 'react'
import './home.css'
import Header from './structure/Header'
import Main from './structure/Main'
import Aside from './structure/Aside'
import Footer from './structure/Footer'

function Home() {
  return (
    <Fragment>
        <Header/>
        <Main/>
        <Aside/>
        <Footer/>
    </Fragment>
  )
}

export default Home