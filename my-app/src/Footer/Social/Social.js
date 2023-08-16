import React from 'react'
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';
import { FaGooglePlusG } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';







export default function Social() {
  return (

    <div class="share">
      <div><AiFillFacebook /></div>
      <div><AiFillLinkedin /></div>
      <div><SiTwitter /></div>
      <div><FaGooglePlusG /></div>
      <div><BsGithub /></div>
    </div >
  )
}
