import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Partner from "@/components/Partner";

import React from "react";

const page = () => {
  return (
    <div>
      <Navbar/>
      <Header />
     <Partner/>
      <Footer/>
    </div>
  );
};

export default page;
