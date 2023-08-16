import React from 'react'
import AboutItem from './AboutItem/AboutItem'
import "../About/About.css"

export default function About() {
  return (
    <div>
      <section id="one-half" class="goblack">
        <span><img
          src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="" /></span>

        <div class="half-content">
          <div class="half__text">
            <h1>About Us</h1>
            <p>Orci urna. In et augue ornare, tempor massa in, luctus sapien. Proin a diam et dui fermentum dolor
              molestie vel id neque. Donec sed tempus enim, a congue risus. Pellen tesqu.</p>
          </div>
          <div className="about-item">
            <AboutItem>
              <h2>Our Vision</h2>
              <p>In a diam et dui elit, orci urna vel id neque. Donec sed tempus enims.</p>
            </AboutItem>
            
            <AboutItem>
              <h2>slm khobi</h2>
              <p>navid rad test test test test test test test test  </p>
            </AboutItem>
          </div>
        </div>
      </section>
    </div>
  )
}

