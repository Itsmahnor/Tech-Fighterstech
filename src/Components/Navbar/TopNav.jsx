import React from "react";
import { FaLinkedinIn, FaRegUserCircle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export const TopNav = () => {
  return (
    <div className="bg-gradient-to-r from-[#C19EE0] to-[#DAC3E8] w-[100vw] flex justify-center items-center m-0 p-0 TopNavRes">
      <div className="w-[80vw] flex justify-around items-center topnavwidth">
        {/* Contact Info */}
        <div className="hideRes flex">
          <p className="text-[1rem] pt-2 text-black">
            +923027022381 | TechFighters@proton.me
          </p>
        </div>

        {/* Register and Social Icons */}
        <div className="flex gap-8 justify-center items-center">
          {/* Register Link */}
          <Link to="/register">
            <div className="flex gap-2 justify-center text-black items-center register1 hover:text-[#A06CD5] transition-colors">
              <FaRegUserCircle />
              <p className="text-[1rem] pt-2 text-black register1 hover:text-[#A06CD5] transition-colors">
                Register
              </p>
            </div>
          </Link>

          {/* Social Icons */}
          <div className="flex gap-2 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/ahsan-malik-788748142/"
              target="_blank"
            >
              {" "}
              <FaLinkedinIn className="text-black hover:text-[#A06CD5] transition-colors" />
            </a>
            <a href="https://www.instagram.com/tech_fighter/" target="_blank">
              <FaInstagram className="text-black hover:text-[#A06CD5] transition-colors" />
            </a>
            <a href="https://web.whatsapp.com/" target="_blank">
              <FaWhatsapp className="text-black hover:text-[#A06CD5] transition-colors" />
            </a>
            <a
              href="https://mail.google.com/mail/TechFighters@proton.me"
              target="_blank"
            >
              <SiGmail className="text-black hover:text-[#A06CD5] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
