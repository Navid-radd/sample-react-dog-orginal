import React from 'react'
import Footerright from './Footerright/Footerright'
import Footerleft from './Footerleft/Footerleft'
import Footermid from './Footermid/Footermid'
import Social from './Social/Social'


export default function Footer() {
  return (
    <footer id="eight">

      <div class="footer__container">
        <Footerleft />
        <Footermid />
        <Footerright />

      </div>


      <div class="copyright">

        <p>&#169; 2021 Dogs Care. All Rights Reserved | WordPress Theme by <strong>W3Layouts.</strong> </p>

        <Social />


      </div>





    </footer>
  )
}
