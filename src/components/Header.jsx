import React from 'react';
import './Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { SlSocialTwitter } from "react-icons/sl";
import { CgMail } from "react-icons/cg";
import { FaWhatsappSquare } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="container d-flex flex-wrap">
      <div className="col-9 col-md-6 col-lg-6 d-flex justify-content-start">
        <ul className="list-inline">
          <li className="list-inline-item"><CiFacebook size={20} /></li>
          <li className="list-inline-item"><FaInstagram size={20} /></li>
          <li className="list-inline-item"><CiLinkedin size={20} /></li>
          <li className="list-inline-item"><AiOutlineYoutube size={20} /></li>
          <li className="list-inline-item twit-icon"><SlSocialTwitter size={20} /></li>
          <li className="list-inline-item"> | </li>
          <li className="list-inline-item career">Careers</li>
        </ul>
      </div>
      
      <div className="col-3 col-md-6 col-lg-6 d-flex justify-content-end">
  <ul className='list-inline'>
    <li className="list-inline-item career">
      {/* Icon only for small screens */}
      <span className="d-inline d-md-none"><CgMail size={20} /></span>
      {/* Icon + text for medium and larger screens */}
      <span className="d-none d-md-inline"><CgMail size={20} /> contact@n-school.com</span>
    </li>
    <li className="list-inline-item career">
      {/* Icon only for small screens */}
      <span className="d-inline d-md-none"><FaWhatsappSquare size={20} /></span>
      {/* Icon + text for medium and larger screens */}
      <span className="d-none d-md-inline"><FaWhatsappSquare size={20} /> +91 8778087504</span>
    </li>
  </ul>
</div>

    </div>
    
  );
};
