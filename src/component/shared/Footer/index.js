import React from "react";
import { Card } from "react-bootstrap";
import email from "../../../assets/icon/email.svg";
import facebook from "../../../assets/icon/facebook.svg";

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <footer class="navbar navbar-expand  navbar-light  ">
        <div className="footer_div">
          <div className="social_icon pt-4 text-center">
            <i class=" fa fa-raguler fa-envelope icon_size1 ml-3 mr-3 "></i>
            <i class=" fa fa-brands fa-facebook icon_size1 ml-3 mr-3 rounded-circle"></i>
          </div>
          <div className="footer_address text-center">
            <p className="mb-4 pt-3 website">Footer.com</p>
            <p className="footer_Address">
              104, vijay nagar indore, 456224 Madhay Predesh
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
