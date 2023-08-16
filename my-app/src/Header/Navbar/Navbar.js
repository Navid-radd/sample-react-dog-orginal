import React from 'react'
import Menu from './Menu/Menu'
// import "Navbar/Navbar.css"

export default function Navbar() {
  return (
    <div>

      <nav id="nav">

        <div class="nav-logo">
          <div class="nav-heading">
            <span href="#"><i class="fas fa-paw logo white"></i>Dogs Care</span>

          </div>

          <div class="hamburger">
            <a href="#"><i class="far fa-moon white "></i></a>
            <a href="#"><i class="fas fa-bars "></i></a>

          </div>
        </div>
        <Menu />



      </nav>


    </div>
  )
}
