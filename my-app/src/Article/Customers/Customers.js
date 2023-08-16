import React from 'react'
import People from './People'

export default function Customers() {
  return (
    <div className="four__info">

      <People>
        <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/testi1.jpg"
          alt="" /></span>
        <div className="four__text">
          <h1>“</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. "
          </p>
          <h4>Petey Cru</h4>
        </div>
      </People>
      <People>
        <span><img src="https://raw.githubusercontent.com/Nis-chal/dog_website_clone/main/images/testi2.jpg"
          alt="" /></span>
        <div className="four__text">
          <h1>“</h1>
          <p>
            Dsuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h4>Petey Cru</h4>
        </div>
      </People>

    </div>


  )
}
