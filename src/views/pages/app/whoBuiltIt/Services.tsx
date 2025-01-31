import React from "react";
import ServiceBox from "./ServiceBox";
import rightLinear from "src/assets/right-linear-bg.png";
import { services } from "./Helper";

const Services = () => {
  return (
    <>
      {" "}
      <img src={rightLinear} alt="" className="absolute pointer-events-none object-cover opacity-90 right-0 max-w-[671px]  z-0 top-[24%]" />
      <div className="max-w-[1164px] relative 3xl:max-w-[1376px] !px-4 mx-auto pb-12 lg:pt-10 grid grid-cols-1 place-items-center w-full lg:grid-cols-2 !gap-5 xl:!gap-8 3xl:!gap-10 xl:px-8">
        {services.map((service, index) => (
          <ServiceBox key={index} data={service} />
        ))}
      </div>
    </>
  );
};

export default Services;
