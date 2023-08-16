import React from 'react'
import First from './First/First'
import Second from './Second/Second'

export default function Gallery() {
  return (
    <section id="gallery">
      <div class="heading ">
        <h1>Our Gallery</h1>
        <p class="lightblack">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque,
          eaque ipsa quae ab illo inventore.</p>
      </div>
      <div class="gallery__container">
        <First />
        <Second />
      </div>

    </section>
  )
}
