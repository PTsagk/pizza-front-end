import * as React from "react";
import { Component } from "react";
import { footerLinks } from "../../statics/texts";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import "./footer.css";
function Footer() {
  return (
    <footer
      className="flex flex-col w-100 bg-black text-white
    justify-center items-center py-7 px-5 footer"
    >
      <div className="flex w-[420px] text-[60px] justify-evenly">
        <div>
          <AiFillFacebook />
        </div>
        <div>
          <AiOutlineTwitter />
        </div>

        <div>
          <AiFillInstagram />
        </div>
        <div>
          <AiFillYoutube />
        </div>
      </div>
      <div className="flex w-[100%] justify-evenly ">
        {footerLinks.map((linkGroup) => (
          <div className="flex flex-col justify-start">
            <h4 className="font-bold text-[30px] my-8">{linkGroup.header}</h4>
            <div>
              {linkGroup.links.map((link) => (
                <div className="text-[24px] font-normal">{link}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
