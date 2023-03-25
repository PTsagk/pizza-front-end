import * as React from "react";
import { Component } from "react";
import { footerLinks } from "../../statics/texts";
// import {
//   AiOutlineTwitter,
//   AiFillFacebook,
//   AiFillYoutube,
//   AiFillInstagram,
// } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer
      className="footer-container"
    >
      <div className="footer-icons social-icons">
        <Link to={"/"} className="facebook-icon">
          <FaFacebookF className="social-icon"></FaFacebookF>
        </Link>
        <Link to={"/"} className="twitter-icon">
          <FaTwitter className="social-icon"></FaTwitter>
        </Link>

        <Link to={"/"} className="instagram-icon">
          <FaInstagram className="social-icon"></FaInstagram>
        </Link>
        <Link to={"/"} className="youtube-icon">
          <FaYoutube className="social-icon"></FaYoutube>
        </Link>
      </div>
      <div className="footer-info-container">
        {footerLinks.map((linkGroup, index) => (
          <div key={index} className="footer-info">
            <h4 className="footer-info-header">{linkGroup.header}</h4>
            <div className="footer-links-container">
              {linkGroup.links.map((link) => (
                <Link
                  key={link.split(" ")[0]}
                  to={"/"}
                  className="footer-link"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
