import React from 'react'
import { FaPaw } from 'react-icons/fa';
import "../AboutItem/AboutItem.css"









export default function AboutItem({ children }) {

  return (
    // <div className="item" style={{ display: "flex" }}>
    <div className="item-boxes">

      <div className="half__boxes" >
        <div className="half__boxes-box">
          <span href="#">
            <FaPaw />
          </span>
          {children}

        </div>
      </div>
    </div>
  )
}
