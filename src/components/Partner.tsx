import React from "react";
import Marquee from "react-fast-marquee";
import marvel from "public/Marvel.png";
import shopify from "public/Shopify.png";
import coinbase from "public/Coinbase.png";
import dropbox from "public/Dropbox.png";
import automattic from "public/Automattic.png";
import intercom from "public/intercom.png";
import Image, { StaticImageData } from "next/image";

interface Image {
  id: number;
  image: StaticImageData;
}
const images: Image[] = [
  {
    id: 1,
    image: shopify,
  },
  {
    id: 2,
    image: coinbase,
  },
  {
    id: 3,
    image: dropbox,
  },
  {
    id: 4,
    image: intercom,
  },
  {
    id: 5,
    image: marvel,
  },
  {
    id: 6,
    image: automattic,
  },
];
const Partner = () => {
  return (
    <div className="w-[90%] mx-auto my-8">
      <p className="text-gray-600 text-center mb-4">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <Marquee >
        {images.map(image => (
          <Image src={image.image} key={image.id} alt="" className="mx-8 h-[40px]"/>
        ))}
      </Marquee>
    </div>
  );
};

export default Partner;
