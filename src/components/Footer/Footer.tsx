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
      className="flex flex-col w-100 bg-black text-white
    justify-center items-center py-7 px-5 footer"
    >
      <div className="flex w-[420px] text-[60px] justify-evenly social-icons">
        <Link to={"/"} className="facebook-icon">
          <FaFacebookF className="i"></FaFacebookF>
        </Link>
        <Link to={"/"} className="twitter-icon">
          <FaTwitter></FaTwitter>
        </Link>

        <Link to={"/"} className="instagram-icon">
          <FaInstagram></FaInstagram>
        </Link>
        <Link to={"/"} className="youtube-icon">
          <FaYoutube></FaYoutube>
        </Link>
      </div>
      <div className="flex w-[100%] justify-evenly ">
        {footerLinks.map((linkGroup) => (
          <div className="flex flex-col justify-start">
            <h4 className="font-bold text-[30px] my-8">{linkGroup.header}</h4>
            <div className="flex flex-col">
              {linkGroup.links.map((link) => (
                <Link
                  to={"/"}
                  className="text-[24px] font-normal hover:text-primary"
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
