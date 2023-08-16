import React from 'react'
import Navbar from './Navbar/Navbar'
import "./Header.css"

export default function Header() {
  return (
    <div>
      <section id="one">
        <Navbar />
        <div class="content">
          <div class="text-content">
            <h1 class="white">Providing Special care
              For <strong>Your Pets!</strong>
            </h1>
            <h4 class="blackish">We offer special services for special pets!</h4>
            <div class="two-button">
              <button class="w-btn btn">View Our Services</button>
              <button class="t-btn btn">Hire Us</button>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
