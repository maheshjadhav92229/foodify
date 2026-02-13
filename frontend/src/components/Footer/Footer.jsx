import React from "react";
import "./Footer.css";
import {assets} from "../../assets/assets.js";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
<img src={assets.logo} alt=""/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis nostrum reiciendis perspiciatis, sunt cum quasi libero quas veniam fugiat fugit natus quos eum similique hic dolorum repellendus, magnam excepturi aut.</p>
<div className="footer-social-icons">
  <img src={assets.facebook_icon} alt=""/>
  <img src={assets.twitter_icon} alt=""/>
  <img src={assets.linkedin_icon} alt=""/>
        </div>
        </div>
        <div className="footer-content-center">
<h2>COMPANY</h2>
<ul>
  <li>Home</li>
  <li>About Us</li>
  <li>Delivery</li>
  <li>privacy policy</li>
</ul>
        </div>
        <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
  <li>+91-84596-02527</li>
  <li>mj289192@gmail.com</li>
</ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright &copy 2024 All Rights Reserved  </p>
    </div>
  );
};

export default Footer;
