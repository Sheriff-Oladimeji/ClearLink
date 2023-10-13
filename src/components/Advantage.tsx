import advantages from "@/data/advantage";
import Image from "next/image";
import React from "react";
import people from "public/people.png";
import arrow from "public/arrow.png";

const Advantage = () => {
  return (
    <section className="container ">
      <div className="flex flex-col gap-4">
        <span className="font-semibold text-blue">The ClearLink Advantage</span>
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800">
          Why choose ClearLink?
        </h2>
        <p className="text-gray-500  max-w-lg">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-20 mt-12">
        <main className="grid sm:grid-cols-2 gap-12 md:w-4/6 ">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="flex flex-col gap-4">
              <Image src={advantage.img} alt={advantage.title} />
              <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.desc}</p>
            </div>
          ))}
        </main>
        <aside className="hidden md:block w-2/6 relative mt-12">
          <Image src={arrow} alt="arrow" className="absolute -top-32 w-48 left-[13%]" />
          <Image src={people} alt="people" className="" />
        </aside>
      </div>
    </section>
  );
};

export default Advantage;
