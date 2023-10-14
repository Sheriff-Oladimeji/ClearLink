import React from "react";
import Logo from "public/logo.svg";
import Image from "next/image";
import play from "public/play.png";
import app from "public/app.png";
const Footer = () => {
  return (
    <footer className=" text-gray-600 py-12">
      <div className="w-[90%] mx-auto grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-1">
            <Image src={Logo} alt="" />
            <p className="text-gray-900 font-semibold text-lg">ClearLink</p>
          </div>
          <p>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div>
          <p className="font-semibold   text-gray-500  mb-4">Product</p>
          <ul className="flex flex-col gap-8">
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold   text-gray-500  mb-4">Company</p>
          <ul className="flex flex-col gap-8">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-500  mb-4">Resources</p>
          <ul className="flex flex-col gap-8">
            <li>Blog</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold   text-gray-500  mb-4">Legal</p>
          <ul className="flex flex-col gap-8">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-semibold text-blue">Get the app</span>
          <Image src={app} alt="" />
          <Image src={play} alt="" />
        </div>
      </div>
      <div className="w-[90%] mx-auto flex items-center justify-between">
        <p>© 2023 ClearLink. All rights reserved.</p>
        <div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
