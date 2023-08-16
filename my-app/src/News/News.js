import React from 'react'
import Newgallery from './Newgallery'

export default function News() {
  return (
    <section id="seven" class="goblack">
      <div class="heading ">
        <h1>Latest News</h1>
        <p class="lightblack">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
          eaque ipsa quae ab illo inventore</p>

      </div>
      <div class="container container__bg goblack">
        <Newgallery>
          <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/blog1.jpg"
            alt="" /></span>
          <div class="info__text">
            <pre>                                                   May 5, 2021</pre>
            <h1>Hello world!</h1>
            <h5>READ MORE </h5>
          </div>
        </Newgallery>
        <Newgallery>
          <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/blog2.jpg"
            alt="" /></span>
          <div class="info__text">
            <pre>                                                   May 5, 2021</pre>
            <h1>Hello world!</h1>
            <h5>READ MORE </h5>
          </div>
        </Newgallery>
        <Newgallery>
          <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/blog3.jpg"
            alt="" /></span>
          <div class="info__text">
            <pre>                                                   May 5, 2021</pre>
            <h1>Hello world!</h1>
            <h5>READ MORE </h5>
          </div>
        </Newgallery>

      </div>
    </section>
  )
}