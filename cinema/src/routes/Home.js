import React from 'react'
import { Fragment } from 'react'
import './Home.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function Home() {
  return (
    <Fragment>
        <Header/>
        <Main/>
        <Footer/>
    </Fragment>
  )
}

export default Home