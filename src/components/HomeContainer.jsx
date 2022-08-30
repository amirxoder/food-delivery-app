import React from "react";
import bikeDelivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import I1 from "../img/i1.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div
        className="py-2 flex-1 flex flex-col items-start 
     justify-center gap-6 "
      >
        <div className="flex items-center justify-center gap-2 bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center drop-shadow-xl">
            <img
              src={bikeDelivery}
              alt="deliveryimage"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide text-headingColor ">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor md:text-justify text-center md:w-[80%] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          accusantium eos possimus velit, nisi doloremque dicta saepe, et omnis
          ex repellendus modi aliquid dolorum quod quo. Totam aut minus nostrum?
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-200 to-orange-500 w-full md:w-[200px]  px-4 py-2 rounded-lg text-white 
      hover:shadow-lg hover:-translate-y-[1px] transition-all duration-200 ease-in-out"
        >
          Order Now
        </button>
      </div>

      <div className="py-2 flex-1 flex items-center justify-center relative ">
        <img
          src={HeroBg}
          alt="hero-background"
          className=" ml-auto w-full lg:w-auto h-420"
        />

        <div
          className="md:w-[50rem] w-full h-full flex items-center justify-center gap-4
         select-none absolute md:top-0 md:left-0  top- flex-wrap lg:px-32"
        >
          {heroData &&
            heroData.map((item) => (
              <div
                key={item.id}
                className="w-120 min-w-[120px] p-4 drop-shadow-lg
                 bg-cardOverlay backdrop-blur-[5px] rounded-3xl flex items-center
                  justify-center flex-col"
              >
                <img
                  src={item.img}
                  alt="I1"
                  className="lg:w-40 w-20 -mt-10 lg:-mt-20 "
                />
                <p className="lg:text-xl text-base font-semibold text-textColor">
                  {item.name}
                </p>
                <p className="lg:text-sm text-[12px] text-lighttextGray font-semibold my-2">
                  {" "}
                  {item.desc}
                </p>
                <p className="text-sm font-semibold text-headingColor ">
                  <span className="text-xs text-red-600">$</span> {item.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
