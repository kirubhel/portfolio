import React from 'react'
import profileImage from '../assets/proIMG2.jpg'
import {FaFileDownload} from 'react-icons/fa'
import {BsEyeglasses} from 'react-icons/bs'
import resume from  '../assets/resume.pdf'

function Profilee() {
  return (
    <div className="col-lg-3 col-md-4">
    <div className="profile">
      <div className="profile-name">
        <span className="name">MR. KIRUBEL GIZAW</span>
        <br />
        <span className="job">FullStack Developer</span>
      </div>
      <figure className="profile-image">
        <img src={profileImage} alt="" />
      </figure>
      <ul className="profile-information">
        <li></li>
        <li>
          <p>
            <span>Name:</span> Kirubel Gizaw
          </p>
        </li>
        <li>
          <p>
            <span>Birthday:</span> 20 October 1997
          </p>
        </li>
        <li>
          <p>
            <span>Job:</span> FullStack Developer
          </p>
        </li>
        <li>
          <p>
            <span>Email:</span> kirub.hel@gmail.com
          </p>
        </li>
        <li>
          <p>
            <span>Telegram:</span> @kirube_l
          </p>
        </li>
      </ul>
      <div className="col-md-12">
        <button href="" className="site-btn icon w-[] font-bold py-2  rounded ">
        <a href={resume}  >  <span className='inline-flex items-center text-white '>Download Cv  <FaFileDownload className='rounded-2xl my-1 bg-white text-[#526BC9] mx-2 w-8 h-8 p-[6px] '/></span> 
        
        </a></button>
      </div>
    </div>
  </div>

  )
}

export default Profilee