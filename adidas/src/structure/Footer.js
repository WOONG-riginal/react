import React from 'react'
import './footer.css'
import FooterNav from '../components/FooterNav'
import FooterLegal from '../components/FooterLegal'
import FooterCopy from '../components/FooterCopy'

function Footer() {
  return (
    <footer id="footer">
        <FooterNav/>
        <FooterLegal/>
        <FooterCopy/>
    </footer>
  )
}

export default Footer