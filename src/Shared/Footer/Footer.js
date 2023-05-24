import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
  return (

    <div className="container absolute pt-[150px]">
      <footer className="footer p-10 bg-black mt-24 text-white relative bottom-0">
        <div>
          <h1 className="text-3xl">frayon</h1>
          <p>Frayon<br />Providing reliable cloths since 2023</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">Branding</Link>
          <Link to="/" className="link link-hover">Branding</Link>
          <Link to="/" className="link link-hover">Branding</Link>

        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">About us</Link>
          <Link to="/" className="link link-hover">About us</Link>
          <Link to="/" className="link link-hover">About us</Link>

        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">Terms of use</Link>
          <Link to="/" className="link link-hover">Terms of use</Link>
          <Link to="/" className="link link-hover">Terms of use</Link>

        </div>

      </footer>
    </div>
  );
};

export default Footer;