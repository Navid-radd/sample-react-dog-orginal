import React from 'react'
import Dogsecond from './Dogsecond'
import { FaCut } from 'react-icons/fa';
import { FaPaw } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaBullhorn } from 'react-icons/fa';
export default function Dogsitting() {
  return (


    <section id="five" class="goblack">
      <div class="dog__image"><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/dog2.png"
        alt="" /></div>
      <div className="dog__container">
        <div className="dog__boxes">
          <Dogsecond>
            <FaThumbsUp />
            <h4>Dog Sitting</h4>
            <p>Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere.</p>
          </Dogsecond>
          <Dogsecond>
            <FaPaw />
            <h4>Dog Sitting</h4>
            <p>Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere.</p>
          </Dogsecond>
        </div>
        <div className="dog__boxes">
          <Dogsecond>
            <FaBullhorn />
            <h4>Dog Sitting</h4>
            <p>Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere.</p>
          </Dogsecond>
          <Dogsecond>
            <FaCut />
            <h4>Dog Sitting</h4>
            <p>Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere.</p>
          </Dogsecond>
        </div>
      </div>
    </section >


  )
}