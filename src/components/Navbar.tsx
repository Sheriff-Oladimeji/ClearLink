import React from "react";
import Logo from "public/logo.svg";
import Image from "next/image";
import Button from "./ui/Button";
const Navbar = () => {
  return (
    <nav className="bg-gray-100 border  border-gray-300 mt-12 container  rounded-full ">
      <div className="md:flex justify-between items-center w-[95%] mx-auto hidden py-2">
        <div className="flex items-center gap-1">
          <Image src={Logo} alt=""  />
          <p className="text-gray-900 font-semibold text-lg">ClearLink</p>
        </div>
        <ul className="text-gray-500 flex gap-8 items-center">
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
        <div className="flex items-center gap-4">
          <Button
            value="Talk to sales"
            styles="text-gray-900 bg-white border border-gray-400"
            link=""
          />
          <Button
            value="Sign up for free"
            styles="text-white bg-blue "
            link=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
