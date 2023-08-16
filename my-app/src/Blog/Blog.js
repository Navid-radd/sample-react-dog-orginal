import React from 'react'
import Info from './Info/Info'

export default function Blog() {
  return (
    <>

      <div class="heading ">
        <h1>What We Do</h1>
        <p class="lightblack">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
          eaque ipsa quae ab
          illo inventore.</p>
      </div>
      <div className="container">
        <Info>
          <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/img1.jpg"
            alt="" /></span>
          <div class="info__text">
            <h1>It's enim ad minim aute</h1>

            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <h5 class="">READ MORE</h5>
          </div>
        </Info>
        <Info>
          <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/img2.jpg"
            alt="" /></span>
          <div class="info__text">
            <h1>It's enim ad minim aute</h1>

            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <h5 class="">READ MORE</h5>
          </div>
        </Info>
        <Info>
          <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/img3.jpg"
            alt="" /></span>
          <div class="info__text">
            <h1>It's enim ad minim aute</h1>

            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <h5 class="">READ MORE</h5>
          </div>
        </Info>
      </div>
    </>
  )
}
