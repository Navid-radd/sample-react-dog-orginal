import React from 'react'
import Serach from '../Serach/Serach'
// import "/Menu/Menu.css"

export default function Menu() {

  

  return (
    <div>
      <ul class="nav-links">

        <li><a>HOME</a></li>
        <li><a>ABOUT</a></li>
        <li><a>SERVICES</a></li>
        <li><a>PAGES </a></li>
        <li><a>CONTACT</a></li>



        <Serach />

        <span><i class="far fa-moon white night"></i></span>
      </ul>
    </div>
  )
}
